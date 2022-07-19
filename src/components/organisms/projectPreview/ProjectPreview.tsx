import React, { ReactElement, ReactNode, useState } from "react";
import {
  ProjectPreviewContainer,
  ProjectPreviewHeading,
} from "./projectPreview.styled";

import ProjectDetail from "../../molecules/projectDetail/ProjectDetail";
import { ParallaxBanner } from "react-scroll-parallax";
import { StaticImage } from "gatsby-plugin-image";
import { IStaticImageProps } from "gatsby-plugin-image/dist/src/components/static-image.server";

export interface ProjectPreviewProps {
  orientation?: "left" | "center" | "right";
  heading: string;
  infoProject: string;
  techStack: string[];
  date: number;
  children: React.ReactNode;
  image: ReactElement<IStaticImageProps>;
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ProjectPreviewContainer
        orientation={orientation}
        onClick={() => setIsOpen(true)}
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
        {/* <div className="project-preview_img">{image}</div> */}
      </ProjectPreviewContainer>
      <ProjectDetail
        heading={heading}
        techStack={techStack}
        infoProject={infoProject}
        date={date}
        liveLink={liveLink}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default ProjectPreview;
