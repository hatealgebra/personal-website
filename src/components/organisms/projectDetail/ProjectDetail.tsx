import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";

import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { LightButton } from "../../atoms/button/button.styled";
import Link from "../../atoms/link/link.styled";
import {
  ProjectDetailContainer,
  ProjectDetailImages,
  ProjectDetailInfo,
  ProjectDetailInfoContainer,
  ProjectDetailPanel,
} from "./projectDetail.styled";
import ProjectModalContext, {
  CLOSE_MODAL,
} from "../../../context/ProjectModalContext";

import { graphql, useStaticQuery } from "gatsby";
import { gatsbyImagesLab } from "../../../utils/helpers/graphql";
import useWindowSize from "../../../utils/hooks/useWindowSize";
import Theme from "../../particles/Theme";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export interface ProjectDetailProps {
  heading: string;
  infoProject: string;
  techStack: string[];
  date: number;
  liveLink: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<any>>;
}

// FIXME doesnt show full image, it just goes out of the way
//  TODO: Move to the organisms folder
// TODO: Get alert and not link to food mood app
const ProjectDetail = () => {
  const { projectModalState, action } = useContext(ProjectModalContext);

  const windowSize = useWindowSize();
  const biggerTablet = windowSize.width >= Theme.breakpoints.tablet;

  const data = gatsbyImagesLab();
  const modalRef = React.createRef();

  useEffect(() => {
    if (projectModalState?.isOpen === true) {
      disableBodyScroll(modalRef.current);
    } else {
      enableBodyScroll(modalRef.current);
    }
  }, [projectModalState]);

  if (projectModalState !== null) {
    const { heading, techStack, infoProject, date, liveLink, isOpen } =
      projectModalState;

    const nameOfProject = heading.replace(" ", "");

    const imagesData = data[nameOfProject];

    return (
      <ProjectDetailContainer isOpen={isOpen} ref={modalRef}>
        <ProjectDetailPanel>
          <span>Lab project</span>
          {biggerTablet && (
            <>
              <Link white to={liveLink} target="_blank">
                Visit live link
              </Link>
              <span>{heading}</span>
            </>
          )}
          <LightButton
            onClick={() =>
              action({ type: CLOSE_MODAL, payload: { isOpen: false } })
            }
          >
            Close
          </LightButton>
        </ProjectDetailPanel>
        <div
          className="detail-content"
          style={{ display: "flex", alignItems: "center" }}
        >
          <ProjectDetailInfoContainer>
            <ProjectDetailInfo>
              <div>
                <h4>{infoProject}</h4>
                {!biggerTablet && (
                  <Link white to={liveLink}>
                    Visit live link
                  </Link>
                )}
              </div>
              <div>
                <div className="project-info_item">
                  <h5>Project info</h5>
                </div>
                <div className="project-info_item">
                  <span>Project name</span>
                  <span>{heading}</span>
                </div>
                <div className="project-info_item">
                  <span>Tech stack</span>
                  <span>{techStack.map((tech) => `${tech}, `)}</span>
                </div>
                <div className="project-info_item">
                  <span>Date</span>
                  <span>{date}</span>
                </div>
              </div>
            </ProjectDetailInfo>
            <ProjectDetailImages>
              {imagesData.edges
                .filter((node, i) => i > 0)
                .map(({ node: imageData }) => (
                  <GatsbyImage
                    image={getImage(imageData.childImageSharp.gatsbyImageData)}
                    className="project-info__image"
                    objectFit="contain"
                    objectPosition="left"
                    loading="eager"
                  />
                ))}
            </ProjectDetailImages>
          </ProjectDetailInfoContainer>
        </div>
      </ProjectDetailContainer>
    );
  } else {
    return null;
  }
};

export default ProjectDetail;