import React, { useState } from "react";
import Container from "../../molecules/container/Container";
import SwitchMenu from "../../molecules/switchMenu/SwitchMenu";
import LabDataJSON from "../../../assets/content/labData.json";
import ProjectPreview from "../projectPreview/ProjectPreview";
import { StaticImage } from "gatsby-plugin-image";
import { Fade } from "react-awesome-reveal";

const WorkShowcase = () => {
  const [typeOfWork, setTypeOfWork] = useState<"projects" | "lab">("lab");

  console.log(typeOfWork);
  return (
    <Container noAnimation>
      <SwitchMenu
        menuState={typeOfWork}
        dispatch={setTypeOfWork}
        possibilities={["projects", "lab"]}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        consectetur voluptatum atque veritatis aliquid, sint illum natus enim
        veniam earum! Rem doloremque ut maiores soluta, ipsa iste nam sequi
        error.
      </p>
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
              <StaticImage
                src="../../../assets/images/coming-soon.jpg"
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
