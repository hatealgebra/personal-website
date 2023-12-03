import React, { ReactElement, useContext } from "react";
import {
  ProjectPreviewContainer,
  ProjectPreviewHeading,
} from "./projectPreview.styled";

import { ParallaxBanner } from "react-scroll-parallax";
import { IStaticImageProps } from "gatsby-plugin-image/dist/src/components/static-image.server";
import ProjectModalContext, {
  OPEN_MODAL,
} from "../../../context/ProjectModalContext";

export interface ProjectPreviewProps {
  orientation?: "left" | "center" | "right";
  heading: string;
  infoProject: string;
  techStack: string[];
  date: number;
  children: React.ReactNode;
  image: ReactElement<IStaticImageProps> | null;
  liveLink: string;
}

const ProjectPreview = ({
  orientation = "left",
  heading,
  children,
  techStack,
  date,
  infoProject,
  image,
  liveLink,
}: ProjectPreviewProps) => {
  const { projectModalState, action } = useContext(ProjectModalContext);
  const openModal = () => {
    action({
      type: OPEN_MODAL,
      payload: {
        heading,
        techStack,
        date,
        infoProject,
        image,
        liveLink,
        isOpen: true,
      },
    });
  };
  return (
    <>
      <ProjectPreviewContainer
        orientation={orientation}
        onClick={openModal}
        data-cy="project-preview"
      >
        <ProjectPreviewHeading>{heading}</ProjectPreviewHeading>
        <p className="project-preview_text">{children}</p>
        <ParallaxBanner
          className="project-preview_img"
          layers={[
            {
              children: image,
              speed: -20,
            },
          ]}
          style={{ aspectRatio: "1/1.1" }}
        />
        {/* {useWindowSize().width! < 1000 && <SeeMore />} */}
      </ProjectPreviewContainer>
    </>
  );
};

export default ProjectPreview;
