import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";
import Theme from "../components/particles/Theme";

import HeadingCode from "../components/molecules/headingCode/HeadingCode";
import Container from "../components/molecules/container/Container";

import { ImArrowLeft } from "@react-icons/all-files/im/ImArrowLeft";
import { FaCode } from "@react-icons/all-files/fa/FaCode";

import { StaticImage } from "gatsby-plugin-image";
import Link from "../components/atoms/link/link.styled";
import ProjectPreview from "../components/organisms/projectPreview/ProjectPreview";
import Button from "../components/atoms/button/button.styled";
import PageTemplate from "../components/templates/Page.template";

import LabDataJSON from "../assets/content/labData.json";

import { Fade } from "react-awesome-reveal";
import { DEVICE as device } from "../utils/helpers";
import { LINKS } from "../utils/contants";
import { ParallaxBanner } from "react-scroll-parallax";
import useWindowSize from "../utils/hooks/useWindowSize";
import ProjectDetail from "../components/molecules/projectDetail/ProjectDetail";

const HelloThereHero = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
  align-self: flex-end;
  margin: 5px 10px 5em 30px;
  width: 70%;
  max-width: 350px;

  @media ${device.mobileL} {
    margin-left: 10%;
    margin-right: 10%;
  }

  @media ${device.laptop} {
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

const IndexPage = () => {
  const [heroScroll, setHeroScroll] = useState<boolean>(false);

  const windowSize = useWindowSize();

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
          Wel <br />
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
                This is my webpage, where I showcase
                <div style={{ color: "white" }}>
                  myself and work that is behind me. Enjoy!
                </div>
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
        <HeadingCode>My self</HeadingCode>
        <ParallaxBanner
          layers={[
            {
              children: (
                <StaticImage
                  src="../assets/images/coding.jpg"
                  alt="Macbook with open IDE with the lamp"
                  objectPosition="bottom"
                  style={{ height: "100%", width: "100%" }}
                />
              ),
              speed: -3,
            },
          ]}
          style={{ aspectRatio: "1/1" }}
        />
        <h4>
          An
          <span className="libre"> aspiring </span>
          front-end developer.
        </h4>
        <div>
          <p>
            Felt in love with web development. I love when nice things are
            functional and helpful. Trying to become good developer step by tep.
            Learning new things, meeting new people, apprehending new
            informations, till my brain(emoticon) can’t go further.{" "}
          </p>
          <p>
            In meantime I’m cat dad that plays basketball in Germany. Also I’m
            searching for new sneakers, enjoy car sims, listen to music or read
            Batman comics.
          </p>
        </div>
        <Link>What I can do</Link>
      </Container>
      <Container variant="projects" background="black">
        <StaticImage
          src="../assets/images/macbook.jpg"
          alt="Macbook w dark background"
          style={{ width: "100%", maxHeight: "2000px" }}
        />
        <HeadingCode right>work</HeadingCode>
        <h4 className="justify--right">
          Just
          <span className="libre"> some of </span>
          my projects.
        </h4>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {LabDataJSON.lab.map((data, index) => (
            <ProjectPreview
              key={data.name + index}
              heading={data.name}
              techStack={data.tech_stack}
              infoProject="Lorem ipsum lorem ipsum"
              date={data.date}
              liveLink={data.live_link}
              image={
                <StaticImage
                  src={"../assets/images/coming-soon.jpg"}
                  alt="Pancakes"
                  style={{ width: "100%", height: "100%" }}
                />
              }
            >
              {data.preview_text}
            </ProjectPreview>
          ))}
          <Link style={{ alignSelf: "center" }} white to={LINKS.work}>
            Show All
          </Link>
        </div>
      </Container>
      <Container>
        <h2>Bball,</h2>
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
          nolan, <br />
          race sims
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iste
          ex quibusdam eaque voluptate dolore aut sequi harum deleniti aliquid
          beatae veritatis explicabo id unde culpa, adipisci incidunt dolorum
          autem!
        </p>
        <Link to={LINKS.about}>More about me</Link>
      </Container>
    </PageTemplate>
  );
};

interface HeroContainerProps {
  scroll: boolean;
}

export default IndexPage;
