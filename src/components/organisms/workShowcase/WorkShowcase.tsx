import React, { useState } from "react";
import Container from "../../molecules/container/Container";
import SwitchMenu from "../../molecules/switchMenu/SwitchMenu";
import LabDataJSON from "../../../assets/content/labData.json";
import copyWriteJSON from "../../../assets/content/copyWrite.json";
import ProjectPreview from "../projectPreview/ProjectPreview";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const { work: workContent } = copyWriteJSON.pages;

const WorkShowcase = () => {
  const [typeOfWork, setTypeOfWork] = useState<"projects" | "lab">("lab");

  const data = useStaticQuery(graphql`
    query {
      weatherApp: allFile(filter: { relativeDirectory: { eq: "weatherApp" } }) {
        edges {
          node {
            absolutePath
            sourceInstanceName
            relativeDirectory
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      foodMood: allFile(filter: { relativeDirectory: { eq: "foodMood" } }) {
        edges {
          node {
            absolutePath
            sourceInstanceName
            relativeDirectory
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const images = [
    getImage(data.foodMood.edges[0].node.childImageSharp),
    getImage(data.weatherApp.edges[0].node.childImageSharp),
  ];

  return (
    <Container noAnimation>
      <SwitchMenu
        menuState={typeOfWork}
        dispatch={setTypeOfWork}
        possibilities={["projects", "lab"]}
      />
      <p>{workContent.labText}</p>
      {typeOfWork === "projects" ? (
        <h3>No Projects here :(</h3>
      ) : (
        LabDataJSON.lab.map((data, index) => (
          <ProjectPreview
            key={data.name + index}
            heading={data.name}
            techStack={data.tech_stack}
            infoProject="Lorem ipsum lorem ipsum"
            date={data.date}
            liveLink={data.live_link}
            image={
              <GatsbyImage
                image={images[index]}
                alt="coming soon"
                style={{ height: "100%", width: "100%" }}
              />
            }
          >
            {data.preview_text}
          </ProjectPreview>
        ))
      )}
    </Container>
  );
};

export default WorkShowcase;
