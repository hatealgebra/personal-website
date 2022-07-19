import React from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import { DEVICE } from "../../../utils/helpers";

type ContainerProps = {
  variant?: "section" | "projects";
  background?: "black" | "white";
  children: any;
  noM?: boolean;
  noAnimation?: boolean;
  grid?: boolean;
};

const ContainerStyled = styled.section<ContainerProps>`
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => props.background};
  color: ${(props) => (props.background === "black" ? "white" : "black")};
  .container {
    &_content {
      width: 92.5%;
      padding: 50px 2.5% 70px 2.5%;
      max-width: 500px;

      @media ${DEVICE.tablet} {
        max-width: 600px;
      }

      @media ${DEVICE.laptop} {
        max-width: 1200px;
        ${({ grid }) =>
          grid &&
          `
        display: grid;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
        div:nth-of-type(2) {
          grid-column: 2/3;
          grid-row: 1 / span 3;
        }
        `}
      }

      margin: auto;
      & > * {
        margin-bottom: 20px;
      }
      h3 {
        text-align: ${(props) => props.variant == "projects" && "center"};
        margin-top: 2em;
      }
      h4 {
        width: 50%;
        @media ${DEVICE.tablet} {
          width: 100%;
        }
      }
    }
  }
`;

const Container = ({
  variant = "section",
  background = "white",
  noM = false,
  noAnimation,
  children,
  grid,
}: ContainerProps) => {
  return (
    <ContainerStyled grid={grid} background={background} variant={variant}>
      <div className="container_content">
        {(noAnimation && children) || (
          <Fade direction="up" triggerOnce>
            {children}
          </Fade>
        )}
      </div>
    </ContainerStyled>
  );
};

export default Container;
