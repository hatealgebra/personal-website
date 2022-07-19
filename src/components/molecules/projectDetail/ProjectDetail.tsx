import React, { Dispatch, SetStateAction } from "react";

import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { LightButton } from "../../atoms/button/button.styled";
import Link from "../../atoms/link/link.styled";
import {
  ProjectDetailContainer,
  ProjectDetailImages,
  ProjectDetailInfo,
  ProjectDetailInfoContainer,
  ProjectDetailPanel,
} from "./projectDetail.styled";

interface ProjectDetailProps {
  heading: string;
  infoProject: string;
  techStack: string[];
  date: number;
  liveLink: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<any>>;
}

const ProjectDetail = ({
  heading,
  techStack,
  date,
  liveLink,
  infoProject,
  isOpen,
  setIsOpen,
}: ProjectDetailProps) => {
  return (
    <ProjectDetailContainer isOpen={isOpen}>
      <ProjectDetailPanel>
        <span>{heading}</span>
        <LightButton onClick={() => setIsOpen(false)}>Close</LightButton>
      </ProjectDetailPanel>
      <div style={{ marginTop: "20%" }}>
        <h4>{infoProject}</h4>
        <ProjectDetailInfoContainer>
          <ProjectDetailInfo>
            <div className="project-info_item">
              <h5>Project info</h5>
            </div>
            <div className="project-info_item">
              <h5>Tech stack</h5>
              <span>{techStack.map((tech) => `${tech}, `)}</span>
            </div>
            <div className="project-info_item">
              <h5>Date</h5>
              <span>{date}</span>
            </div>
            <div className="project-info_live-link">
              <Link white to={liveLink}>
                Visit live link
              </Link>
            </div>
          </ProjectDetailInfo>
          <ProjectDetailImages></ProjectDetailImages>
        </ProjectDetailInfoContainer>
      </div>
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
