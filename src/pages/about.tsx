import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Container from "../components/molecules/container/Container";
import ExpandItem from "../components/molecules/expandItem/ExpandItem";
import ProjectDetail from "../components/molecules/projectDetail/ProjectDetail";
import MyHobbies from "../components/organisms/myHobbies/MyHobbies";
import Theme from "../components/particles/Theme";
import PageTemplate from "../components/templates/Page.template";
import { DEVICE } from "../utils/helpers";
import useWindowSize from "../utils/hooks/useWindowSize";

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

  @media ${DEVICE.laptop} {
    max-width: 1000px;
  }

  h1 {
    max-width: 400px;
    @media ${DEVICE.mobileL} {
      margin-left: 5%;
    }
    @media ${DEVICE.tablet} {
      margin-left: 12%;
    }
  }

  .gatsby-image-wrapper {
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 400px;

    @media (min-width: 600px) {
      width: 60%;
    }
  }

  @media ${DEVICE.tablet} {
    padding: 5% 0 0 0;
  }
`;

const about = () => {
  const windowSize = useWindowSize();

  const data = useStaticQuery(graphql`
    query images {
      techStackImages: allFile(
        filter: { dir: { regex: "/Technology stack/i" } }
      ) {
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
        <h2 style={{ marginTop: "30px" }} className="text--center">
          Software Engineer
        </h2>
        <p className="paragraph--center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A maiores
          nisi eveniet accusamus dicta iure, nam quas ad nemo repellendus odio
          inventore itaque alias quibusdam voluptates molestiae amet architecto
          quae.
        </p>
        <p className="paragraph--center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          assumenda aliquid itaque velit, totam et perferendis. Adipisci sequi
          sed quo neque dolores nobis corrupti repellendus dolorum nemo minus,
          impedit illum!
        </p>
        <h2 style={{ marginTop: "60px" }} className="text--center">
          My Aim
        </h2>
        <p className="paragraph--center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A maiores
          nisi eveniet accusamus dicta iure, nam quas ad nemo repellendus odio
          inventore itaque alias quibusdam voluptates molestiae amet architecto
          quae.
        </p>
        <p className="paragraph--center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          assumenda aliquid itaque velit, totam et perferendis. Adipisci sequi
          sed quo neque dolores nobis corrupti repellendus dolorum nemo minus,
          impedit illum!
        </p>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              est dolorem consectetur dolore nemo? Deleniti sapiente praesentium
              illum nostrum nesciunt alias placeat neque in autem, molestias
              modi voluptates hic natus!
            </p>
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
