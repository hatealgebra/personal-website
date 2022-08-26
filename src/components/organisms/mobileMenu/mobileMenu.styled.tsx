import React from "react";
import styled from "styled-components";
import Theme from "../../particles/Theme";

export const MobileMenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;
  a {
    font-size: ${Theme.fontSize["3xl"]};
    text-transform: uppercase;
    font-weight: ${Theme.typography.semibold};
    letter-spacing: 1px;
    color: white;
    text-decoration: none;
    padding: 0px;
    line-height: 1;
  }
`;

export const MobileMenuNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  grid-row: 3/4;
  margin: 0px 0px 50px 20px;
  p {
    font-weight: ${Theme.typography.semibold};
  }
`;

export const MobileMenuTopBar = styled.div`
  padding: 10px 5%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  font-size: ${Theme.fontSize.lg};
  font-family: "Work-Sans", sans-serif;

  a,
  button {
    color: white;
  }
`;

export const MobileMenuContainer = styled.div<{ isOpen: boolean }>`
  z-index: ${({ isOpen }) => (isOpen ? 99 : -1)};
  position: fixed;
  overflow: hidden;
  display: grid;
  box-sizing: border-box;
  background: ${Theme.color.mono};
  transition: 0.2s linear;
  transform-origin: bottom;
  height: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  /* opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
   */

  color: white;
  grid-template-rows: auto 1fr auto;

  h1 {
    z-index: 1;
  }
`;
