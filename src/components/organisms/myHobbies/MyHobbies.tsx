import React, { Suspense, useState } from "react";
import HobbiesMenu from "../../molecules/switchMenu/SwitchMenuHobbies";
import {
  HobbyContent,
  Hobbytext,
  MyHobbiesContainer,
  MyHobbiesImagesScroll,
} from "./myHobbies.styled";

import { Canvas, useLoader } from "@react-three/fiber";

import { Environment, OrbitControls, Preload } from "@react-three/drei";
import { GLTFLoader } from "three-stdlib";
import useWindowSize from "../../../utils/hooks/useWindowSize";
import Theme from "../../particles/Theme";

import copywriteJSON from "../../../assets/content/copyWrite.json";

import { graphql, useStaticQuery } from "gatsby";

const hobbyText = copywriteJSON.pages.about.myHobbies;

const posibilities = Object.keys(hobbyText);
// TODO: Get the typings right

export const PureMyHobbies = ({ data }: any) => {
  const [choosenHobby, setChoosenHobby] =
    useState<"basketball" | "music" | "movies" | "race sims">("basketball");

  const windowSize = useWindowSize();
  function Scene() {
    const basketball = useLoader(GLTFLoader, data[1]);
    const music = useLoader(GLTFLoader, data[3]);
    const wheel = useLoader(GLTFLoader, data[0]);
    const tumbler = useLoader(GLTFLoader, data[2]);
    return choosenHobby === "basketball" ? (
      <primitive object={basketball.scene} scale={0.012} />
    ) : choosenHobby === "music" ? (
      <primitive object={music.scene} scale={15} />
    ) : choosenHobby === "race sims" ? (
      <primitive object={wheel.scene} scale={1.45} />
    ) : (
      <primitive object={tumbler.scene} scale={1.4} />
    );
  }
  return (
    <MyHobbiesContainer>
      <HobbiesMenu
        menuState={choosenHobby}
        dispatch={setChoosenHobby}
        possibilities={posibilities}
      />
      <HobbyContent>
        <MyHobbiesImagesScroll>
          <Canvas
            frameloop="demand"
            style={{
              height:
                windowSize.width! >= Theme.breakpoints.tablet ? "55vh" : "40vh",
              width: "100%",
              maxWidth: "500px",
              maxHeight: "500px",
              margin: "auto",
              padding: "50px 0 10px 0",
              overflow: "visible",
            }}
            camera={{
              zoom:
                windowSize.width! >= Theme.breakpoints.tablet
                  ? 1
                  : windowSize.width! >= Theme.breakpoints.laptop
                  ? 1.4
                  : 1.1,
            }}
          >
            <pointLight position={[10, 10, 10]} />
            <ambientLight intensity={0.4} />
            <Environment preset="city" background={false} />
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={1.7}
              enableRotate={true}
              enablePan={false}
              makeDefault
            />

            <Suspense fallback={null}>
              <Scene />
              <Preload all />
            </Suspense>
          </Canvas>
        </MyHobbiesImagesScroll>
        <Hobbytext>{hobbyText[choosenHobby]}</Hobbytext>
      </HobbyContent>
    </MyHobbiesContainer>
  );
};

const MyHobbies = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "3dModels" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);

  const modelArray = data.allFile.edges.map((edge) => edge.node.publicURL);

  return <PureMyHobbies data={modelArray} />;
};

export default MyHobbies;
