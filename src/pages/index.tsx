import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";
import Theme from "../components/particles/Theme";

import HeadingCode from "../components/molecules/headingCode/HeadingCode";
import Container from "../components/molecules/container/Container";

import { ImArrowLeft } from "@react-icons/all-files/im/ImArrowLeft";
import { FaCode } from "@react-icons/all-files/fa/FaCode";

import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Link from "../components/atoms/link/link.styled";
import ProjectPreview from "../components/organisms/projectPreview/ProjectPreview";
import Button from "../components/atoms/button/button.styled";
import PageTemplate from "../components/templates/Page.template";

import LabDataJSON from "../assets/content/labData.json";
import CopyWriteJSON from "../assets/content/copyWrite.json";

import { Fade } from "react-awesome-reveal";
import { DEVICE as device } from "../utils/helpers";
import { LINKS } from "../utils/contants";
import { ParallaxBanner } from "react-scroll-parallax";
import useWindowSize from "../utils/hooks/useWindowSize";
import ProjectDetail from "../components/organisms/projectDetail/ProjectDetail";
import { gatsbyImageslabPreview } from "../utils/helpers/graphql";

// FIXME Parallex scroll is on safari little bit shuttering
// Snapshot testing, waiting for storyshots to be compatible with React 18

const HelloThereHero = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
  align-self: flex-end;
  margin: 5px 10px 5em 30px;
  width: 70%;
  max-width: 350px;

  ${device.mobileL} {
    margin-left: 10%;
    margin-right: 10%;
  }

  ${device.laptop} {
    max-width: 500px;
  }

  .hlthere_heading {
    display: flex;
    font-size: ${Theme.fontSize.lg};
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
`;

const ScrollLabel = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  align-items: center;
  grid-column: 2/3;
  right: -20px;
  bottom: 20vh;
  color: white;
  font-size: ${Theme.fontSize.lg};
  transform: rotate(270deg);

  @keyframes bounce {
    from {
      transform: translateX(0);
    }

    50% {
      transform: translateX(10px);
    }

    to {
      transform: translateX(0);
    }
  }

  span {
    animation-name: bounce;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    font-weight: 800;
  }
`;

// FIXME Don't center vertically to 50%, just little bit higher, because on the mobile device, the text is not shown fullly, because of the panel of the browsers/ example safari
const HeroContainer = styled.div<HeroContainerProps>`
  position: relative;
  display: grid;
  grid-template-columns: 60vw repeat(3, 50vw);
  grid-template-rows: 1fr 1fr;
  height: 105vh;
  transition:1s ease-out ;
  transform-origin: left;
  transform: ${(props) =>
    props.scroll === true ? "translateX(0)" : "translateX(-60vw)"};
  /* overflow: ${(props) => (props.scroll ? "hidden" : "default")}; */
  .hero_part {
    width: 100%;
    height: 100%;
    grid-row: 1/2;

    &--hidden,
    &--red {
      background: ${Theme.color.tertiary};
    }

    &--hidden {
      grid-column: 1/3;
      grid-row: 1/3;
    }w
  }

  h1 {
    grid-column: 2/4;
    grid-row: 1/3;
    position: absolute;
    place-self: center;
  }
`;

const { heroSection, myselfSection, sectionMyPhoto } =
  CopyWriteJSON.pages.homepage;

const IndexPage = () => {
  const [heroScroll, setHeroScroll] = useState<boolean>(false);
  const homepageContent = CopyWriteJSON.pages.homepage;

  const windowSize = useWindowSize();

  const imagesPreview = gatsbyImageslabPreview();

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 4 ? setHeroScroll(true) : setHeroScroll(false)
    );
  }, [heroScroll]);

  return (
    <PageTemplate>
      <ProjectDetail />
      <HeroContainer scroll={heroScroll}>
        <div className="hero_part hero_part--hidden" />
        <div className="hero_part" />
        <h1>
          Wel
          {windowSize.width! <= Theme.breakpoints.tablet && <br />}
          come.
        </h1>
        <HelloThereHero className={"hero_part--hidden"}>
          {heroScroll && (
            <Fade direction="down" triggerOnce>
              <span className="hlthere_heading libre">
                <FaCode fontSize={"2.2rem"} />
                Hello there
              </span>
              <h4>
                {heroSection.text[0]}
                <div style={{ color: "white" }}>{heroSection.text[1]}</div>
              </h4>
            </Fade>
          )}
        </HelloThereHero>
        <ScrollLabel>
          <ImArrowLeft />
          <span>Scroll</span>
        </ScrollLabel>
      </HeroContainer>
      <Container grid={true}>
        <HeadingCode>{myselfSection.heading}</HeadingCode>
        <ParallaxBanner
          layers={[
            {
              children: (
                <StaticImage
                  src="../assets/images/coding.jpg"
                  alt="Macbook with open IDE with the lamp"
                  style={{ height: "100%", width: "100%" }}
                />
              ),
              speed: -3,
            },
          ]}
          style={{ aspectRatio: "1/1" }}
        />
        <h4>
          {myselfSection.subheading[0]}
          <span className="libre"> {myselfSection.subheading[1]} </span>
          {myselfSection.subheading[2]}
        </h4>
        <div>
          {myselfSection.text.map((paragraph: string) => (
            <p>{paragraph}</p>
          ))}
          <Link to={LINKS.about}>What I can do</Link>
        </div>
      </Container>
      <Container variant="projects" background="black">
        <StaticImage
          src="../assets/images/macbook.jpg"
          alt="Macbook w dark background"
          style={{ width: "100%", maxHeight: "1500px" }}
        />
        <HeadingCode right>work</HeadingCode>
        <h4 className="justify--right">
          Just
          <span className="libre"> some of </span>
          my projects.
        </h4>
        <div style={{ display: "flex", flexDirection: "column-reverse" }}>
          {LabDataJSON.lab.map((data, index) => (
            <ProjectPreview
              key={data.name + index}
              heading={data.name}
              techStack={data.tech_stack}
              infoProject={data.info_project}
              date={data.date}
              liveLink={data.live_link}
              image={
                <GatsbyImage
                  image={imagesPreview[index]}
                  alt="Pancakes"
                  style={{ width: "100%", height: "100%" }}
                />
              }
            >
              {data.preview_text}
            </ProjectPreview>
          ))}
        </div>
        <Link
          style={{ position: "relative", left: "40%" }}
          white
          to={LINKS.work}
        >
          Show All
        </Link>
      </Container>
      <Container>
        <h2>{homepageContent.sectionWMyPhoto.heading[0]}</h2>
        <ParallaxBanner
          className="hobby-preview-img"
          layers={[
            {
              children: (
                <StaticImage
                  src="../assets/images/portrait.jpg"
                  alt="Hobby photo"
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                  }}
                />
              ),
              speed: -10,
            },
          ]}
          style={{
            aspectRatio:
              windowSize.width && windowSize.width >= Theme.breakpoints.laptop
                ? "2.5/1"
                : "1.5/1",
          }}
        />
        <h2>
          {homepageContent.sectionWMyPhoto.heading[1]} <br />
          {homepageContent.sectionWMyPhoto.heading[2]}
        </h2>
        <p>{homepageContent.sectionWMyPhoto.text}</p>
        <Link to={LINKS.about}>More about me</Link>
      </Container>
    </PageTemplate>
  );
};

interface HeroContainerProps {
  scroll: boolean;
}

export default IndexPage;
