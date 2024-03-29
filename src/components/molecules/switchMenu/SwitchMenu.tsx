import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import { SwitchMenuButton, SwitchMenuContainer } from "./switchMenu.styled";
export interface HobbieMenuProps {
  menuState: string;
  dispatch: Dispatch<SetStateAction<any>>;
  possibilities: string[];
}
const SwitchMenu = ({
  menuState,
  dispatch,
  possibilities,
}: HobbieMenuProps) => {
  return (
    <SwitchMenuContainer className="switch-menu" variant="column">
      {possibilities.map((menuItem, i) => {
        return (
          <li key={`menuItem-${i}`}>
            <SwitchMenuButton
              isClicked={menuItem === menuState ? true : false}
              onClick={(e) => {
                e.preventDefault();
                dispatch(menuItem);
              }}
            >
              {menuItem}
            </SwitchMenuButton>
          </li>
        );
      })}
    </SwitchMenuContainer>
  );
};
export default SwitchMenu;
