import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Container from "../components/molecules/container/Container";
import ExpandItem from "../components/molecules/expandItem/ExpandItem";
import MyHobbies from "../components/organisms/myHobbies/MyHobbies";
import Theme from "../components/particles/Theme";
import PageTemplate from "../components/templates/Page.template";
import { DEVICE } from "../utils/helpers";
import useWindowSize from "../utils/hooks/useWindowSize";

import copyWriteJSON from "../assets/content/copyWrite.json";

const ExpandMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
`;

const GreetingContainer = styled.div`
  position: relative;
  height: 80vh;
  max-height: 1000px;
  width: 95%;
  margin: auto;
  padding: 20px 0 0 0;
  max-width: 800px;
  background-color: white;

  ${DEVICE.laptop} {
    max-width: 1000px;
  }

  h1 {
    max-width: 400px;
    ${DEVICE.mobileL} {
      margin-left: 5%;
    }
    ${DEVICE.tablet} {
      margin-left: 12%;
    }
  }

  .gatsby-image-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 400px;

    (min-width: 600px) {
      width: 60%;
    }
  }

  ${DEVICE.tablet} {
    padding: 5% 0 0 0;
  }
`;

const { aboutMe } = copyWriteJSON.pages.about;

const about = () => {
  const windowSize = useWindowSize();

  const data = useStaticQuery(graphql`
    query images {
      techStackImages: allFile(filter: { dir: { regex: "/technology/gi" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      otherSkillsImages: allFile(filter: { dir: { regex: "/skills/i" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  return (
    <PageTemplate>
      <GreetingContainer>
        <h1>
          Hey, I'm <span style={{ color: Theme.color.tertiary }}>Paul</span>.
        </h1>

        <StaticImage
          src="../assets/images/greeting.png"
          alt="Greeting memoji as Paul"
          style={{ zIndex: 2 }}
        />
      </GreetingContainer>
      <Container background="black">
        {aboutMe.introduction.map((eachSection: any) => (
          <>
            <h2 style={{ marginTop: "30px" }} className="text--center">
              {eachSection.heading}
            </h2>
            {eachSection.text.map((paragraph: string) => (
              <p className="paragraph--center">{paragraph}</p>
            ))}
          </>
        ))}
        <ExpandMenu>
          <ExpandItem borders="up" number="01" color="white" name="Tech Stack">
            {data.techStackImages.nodes.map((item, index) => (
              <GatsbyImage
                loading="eager"
                objectFit="contain"
                image={item.childImageSharp.gatsbyImageData}
                alt=""
              />
            ))}
          </ExpandItem>
          <ExpandItem
            borders="both"
            number="02"
            color="white"
            name="Other skills"
          >
            {data.otherSkillsImages.nodes.map((item, index) => (
              <GatsbyImage
                loading="eager"
                objectFit="contain"
                image={item.childImageSharp.gatsbyImageData}
                alt=""
              />
            ))}
          </ExpandItem>
          <ExpandItem
            borders="down"
            number="03"
            color="white"
            name="Projects
          "
          >
            <p>{aboutMe.projects}</p>
          </ExpandItem>
        </ExpandMenu>
      </Container>
      {windowSize.width && windowSize.width >= Theme.breakpoints.tablet ? (
        <Fade direction="up" triggerOnce>
          <MyHobbies />
        </Fade>
      ) : (
        <Container>
          <MyHobbies />
        </Container>
      )}
    </PageTemplate>
  );
};

export default about;
