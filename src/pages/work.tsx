import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import styled from "styled-components";
import Container from "../components/molecules/container/Container";
import ProjectDetail from "../components/molecules/projectDetail/ProjectDetail";
import WorkShowcase from "../components/organisms/workShowcase/WorkShowcase";
import Theme from "../components/particles/Theme";
import PageTemplate from "../components/templates/Page.template";

import copyWriteJSON from "../assets/content/copyWrite.json";

const WorkHeroContainer = styled.div`
  height: 70vh;
  max-width: 1100px;
  margin: auto;

  display: grid;
  padding: 20px;
  grid-template-columns: 5% 1fr 5%;
  grid-template-rows: repeat(5, 1fr);
  .work-hero {
    &__image {
      margin: auto;
      background-color: lightgrey;
      width: 100%;
      height: 400px;
      grid-column: 2/3;
      grid-row: 1/6;

      filter: brightness(60%);
    }
    &__heading {
      align-self: center;
      z-index: 1;
      grid-column: 1/3;
      grid-row: 3/4;
      color: white;
    }
  }
`;

const workContent = copyWriteJSON.pages.work;

const work = () => {
  return (
    <PageTemplate>
      <ProjectDetail />
      <div style={{ backgroundColor: Theme.color.primary }}>
        <WorkHeroContainer className="work-hero">
          <ParallaxBanner
            className="work-hero__image"
            layers={[
              {
                children: (
                  <StaticImage
                    src="../assets/images/workImage.jpg"
                    alt="Macbook with open IDE"
                    style={{ height: "100%", width: "100%" }}
                  />
                ),
                speed: -20,
              },
            ]}
          />
          {/* <StaticImage
            className="work-hero__image"
            src="../assets/images/workImage.jpg"
            alt="Macbook with IDE"
          /> */}
          <h1 className="work-hero__heading">{workContent.heading}.</h1>
        </WorkHeroContainer>
      </div>
      <WorkShowcase />
    </PageTemplate>
  );
};

export default work;
