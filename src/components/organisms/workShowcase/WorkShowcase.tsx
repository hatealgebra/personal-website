import React, { useState } from "react";
import Container from "../../molecules/container/Container";
import SwitchMenu from "../../molecules/switchMenu/SwitchMenu";
import LabDataJSON from "../../../assets/content/labData.json";
import copyWriteJSON from "../../../assets/content/copyWrite.json";
import ProjectPreview from "../projectPreview/ProjectPreview";
import { GatsbyImage } from "gatsby-plugin-image";
import { gatsbyImageslabPreview } from "../../../utils/helpers/graphql";

// TODO add see more to the images
// TODO zoom on image when hovering

const { work: workContent } = copyWriteJSON.pages;

const WorkShowcase = () => {
  const [typeOfWork, setTypeOfWork] = useState<"projects" | "lab">("lab");

  const imagesPreview = gatsbyImageslabPreview();

  return (
    <Container noAnimation>
      <SwitchMenu
        menuState={typeOfWork}
        dispatch={setTypeOfWork}
        possibilities={["projects", "lab"]}
      />
      <p>{workContent.labText}</p>
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        {typeOfWork === "projects" ? (
          <h3>No Projects here :(</h3>
        ) : (
          LabDataJSON.lab.map((data, index) => (
            <ProjectPreview
              key={data.name + index}
              heading={data.name}
              techStack={data.tech_stack}
              infoProject={data.info_project}
              date={data.date}
              liveLink={data.live_link}
              image={
                <GatsbyImage
                  image={imagesPreview[index]!}
                  alt="Pancakes"
                  style={{ width: "100%", height: "100%" }}
                />
              }
            >
              {data.preview_text}
            </ProjectPreview>
          ))
        )}
      </div>
    </Container>
  );
};

export default WorkShowcase;
