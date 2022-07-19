import { Ref } from "react";
import styled from "styled-components";
import Theme from "../../particles/Theme";

export const SwitchMenuButton = styled.button<{
  isClicked: boolean;
  padding?: boolean;
}>`
  display: inline;
  font-family: ${Theme.fonts.primary};
  text-transform: uppercase;
  font-size: ${Theme.fontSize["3xl"]};
  font-weight: ${Theme.typography.extrabold};
  color: ${({ isClicked }) => (isClicked && Theme.color.black) || "lightgrey"};
  background: none;
  border: none;
  width: max-content;
  padding-left: ${({ padding }) => padding && "70px"};
`;

export const SwitchMenuContainer = styled.ul<{
  variant: "row" | "column";
}>`
  position: relative;
  display: inline-flex;
  flex-direction: ${(props) => props.variant};
  width: 100%;
  margin: auto;
  overflow-x: hidden;
  transition: 1s all ease;
  scroll-behavior: smooth;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  li {
    list-style-type: none;
  }
`;
