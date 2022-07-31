import styled from "styled-components";
import { rootCertificates } from "tls";
import Theme from "../../particles/Theme";

export const ExpandContent = styled.div<{ isOpen: boolean }>`
  transition: 0.15s ease-in;
  /* height: fit-content; */
  max-height: ${({ isOpen }) => (isOpen ? "auto" : 0)};

  div {
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    gap: 20px;
    padding: 50px 5px 20px 5px;

    & > * {
      width: 100px;
      height: 100px;
    }
    & > p {
      height: auto;
      width: 100%;
      margin: auto;
    }
  }
`;

export const ExpandIcon = styled.div<{ isOpen: boolean }>`
  position: relative;
  display: grid;
  place-items: center;

  svg {
    position: absolute;
    font-size: 2rem;

    :nth-of-type(2n) {
      transition: 0.2s ease-in;

      transform: ${({ isOpen }) =>
        (isOpen && "rotate(0deg)") || "rotate(90deg)"};
    }
  }
`;

export const ExpandButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  border: none;
  background-color: transparent;
  justify-content: space-between;
  text-transform: capitalize;
  width: 100%;
`;

export const ExpandItemContainer = styled.div<{
  borders: "both" | "up" | "down";
  color: "white" | "black";
}>`
  overflow: hidden;
  padding: 25px 10px;
  border-top: ${({ borders, color }) =>
    (borders === "down" && "none") || `1px solid ${color}`};
  border-bottom: ${({ borders, color }) =>
    (borders === "up" && "none") || ` 1px solid ${color}`};
  color: ${({ color }) => color};
  margin: auto;
  width: 100%;
  height: fit-content;
  max-width: 500px;
  min-width: 200px;
  span {
    color: ${({ color }) => color};
    font-size: "1.5rem";
    font-weight: ${Theme.typography.bold};
  }
`;
