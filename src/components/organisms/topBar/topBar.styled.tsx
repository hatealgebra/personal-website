import React from "react";
import styled from "styled-components";

export const NavMenu = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    display: inline-flex;
    flex-direction: row;
    li {
      list-style-type: none;
      display: inline-block;
      a {
        color: white;
        mix-blend-mode: difference;
      }
    }
  }
`;

export const TopBarContainer = styled.div`
  z-index: 97;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 15px 5%;
  color: white;
  mix-blend-mode: difference;
`;
