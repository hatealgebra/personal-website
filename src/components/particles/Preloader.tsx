import React from "react";
import styled from "styled-components";

const PreloaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1000;
`;

const Preloader = () => {
  return <PreloaderContainer>hi</PreloaderContainer>;
};

export default Preloader;
