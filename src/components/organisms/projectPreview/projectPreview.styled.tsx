import React from "react";
import styled from "styled-components";
import { DEVICE } from "../../../utils/helpers";
import Theme from "../../particles/Theme";

export const ProjectPreviewHeading = styled.h4`
  font-size: ${Theme.fontSize["3xl"]};
  text-transform: uppercase;
`;

export const ProjectPreviewContainer = styled.div<{
  orientation: "left" | "center" | "right";
  noImage?: boolean;
}>`
  text-align: ${(props) => props.orientation};
  margin: 50px 0px;
  box-sizing: border-box;

  cursor: pointer;
  .project-preview {
    box-sizing: border-box;
    &_text {
      margin-top: 20px;
    }
    &_img {
      width: 100%;
      max-width: 600px;
      margin-top: 40px;
      background-color: "black";
    }
  }
  .see-more-button {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  ${DEVICE.laptop} {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr;
    .project-preview {
      &_img {
        grid-row: 1/10;
        grid-column: 2/3;
        margin-top: 20px;
      }
    }
  }
`;
