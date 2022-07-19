import React, { Dispatch } from "react";

import styled from "styled-components";

import { CgMenuRight } from "@react-icons/all-files/cg/CgMenuRight";

interface MenuButtonProps {
  dispatch: Dispatch<void>;
}

const MenuContainer = styled.button`
  position: fixed;
  z-index: 99;
  right: 20px;
  top: 20px;
  display: grid;
  place-content: center;
  padding: 15px;
  border-radius: 100%;
  background: white;
  border: none;
  transition: 0.5s ease-out;
  height: 40px;
  width: 40px;

  & > * {
    margin: auto;
  }

  &:hover {
    box-shadow: 0 2px 3px 1px lightgrey;
    cursor: pointer;
  }
`;

const MenuButton = ({ dispatch }: MenuButtonProps) => {
  return (
    <MenuContainer onClick={() => dispatch()}>
      <CgMenuRight fontSize={"1.3rem"} />
    </MenuContainer>
  );
};

export default MenuButton;
