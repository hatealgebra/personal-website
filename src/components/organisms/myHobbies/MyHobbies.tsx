import React, { Suspense, useState } from "react";
import HobbiesMenu, {
  HobbieMenuProps,
} from "../../molecules/switchMenu/SwitchMenuHobbies";
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

const hobbyText = {
  basketball:
    "One of my favourite hobbies to do, because it balances my life with IT world. Currently I’m playing for ASV Cham in Bavaria, Germany. Also I like to watch from time to time some NBA games when there are some on schedule.",
  music:
    "I do not have a lot of addictions, but music is one of them. From rap, hip-hop through rock, indie to electronic music like Stimming. I do listen to every genre almost possible. Mainly when working cause it helpes me to focus on the task.",
  movies:
    "When I want to completely switch off and just chill, I do like to play some movies rather than tv shows. One of my fav movies are 500 days of summer and everything that has fingerprint from Christopher Nolan",
  "race sims":
    "Other thing that allows me to get my happy hour of freedom is racing sim. I love to play F1, Forza with open world or some of the serious IRacing, that has awesome community.",
};

const posibilities = ["basketball", "movies", "race sims", "music"];

const MyHobbies = () => {
  const [choosenHobbie, setChoosenHobbie] =
    useState<"basketball" | "music" | "movies" | "race sims">("basketball");

  const windowSize = useWindowSize();

  function Scene() {
    const basketball = useLoader(GLTFLoader, "/3dModel/basketball.glb");
    const music = useLoader(GLTFLoader, "/3dModel/headphones.glb");
    const wheel = useLoader(GLTFLoader, "/3dModel/wheel.glb");
    const tumbler = useLoader(GLTFLoader, "/3dModel/tumbler.glb");

    return choosenHobbie === "basketball" ? (
      <primitive object={basketball.scene} scale={0.012} />
    ) : choosenHobbie === "music" ? (
      <primitive object={music.scene} scale={15} />
    ) : choosenHobbie === "race sims" ? (
      <primitive object={wheel.scene} scale={1.45} />
    ) : (
      <primitive object={tumbler.scene} scale={1.4} />
    );
  }

  return (
    <MyHobbiesContainer>
      <HobbiesMenu
        menuState={choosenHobbie}
        dispatch={setChoosenHobbie}
        possibilities={posibilities}
      />
      <HobbyContent>
        <MyHobbiesImagesScroll>
          <Canvas
            frameloop="demand"
            style={{
              height:
                windowSize.width >= Theme.breakpoints.tablet ? "55vh" : "40vh",
              width: "100%",
              maxWidth: "500px",
              margin: "auto",
              padding: "50px 0 10px 0",
              overflow: "visible",
            }}
            camera={{
              zoom:
                windowSize.width >= Theme.breakpoints.tablet
                  ? 1
                  : windowSize.width >= Theme.breakpoints.laptop
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
        <Hobbytext>{hobbyText[choosenHobbie]}</Hobbytext>
      </HobbyContent>
    </MyHobbiesContainer>
  );
};

export default MyHobbies;
