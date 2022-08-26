import styled from "styled-components";
import { DEVICE } from "../../../utils/helpers";

// TODO: add disabled attribute

export const SwitchMenuButton = styled.button<{
  isClicked: boolean;
  padding?: boolean;
}>`
  display: inline;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.extrabold};
  color: ${({ isClicked, theme }) =>
    (isClicked && theme.color.black) || "lightgrey"};
  background: none;
  border: none;
  width: max-content;
  padding-left: ${({ padding }) => padding && "70px"};

  ${DEVICE.desktop} {
    font-size: ${({ theme }) => theme.fontSize["4xl"]};
  }
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
