import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { DEVICE } from "../../../utils/helpers";
import useWindowSize from "../../../utils/hooks/useWindowSize";
import Theme from "../../particles/Theme";
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
  const windowSize = useWindowSize();
  const isTablet = windowSize.width >= Theme.breakpoints.tablet ? true : false;

  const [infPossibilities, setInfPossibilities] = useState(possibilities);
  const [scrollCount, setScrollCount] = useState(0);

  const switchMenu = document.querySelector(".switch-menu");

  /**
   * When menu is in the tablet mode and up, this function scrolls to the element based on the offset from the parent. Also appends element to the end of the array based on the scroll count
   *
   * @param {Click Event} e - Click event
   * @param {string} menuItem - button label
   *
   */
  const scrollTo = (e, menuItem) => {
    dispatch(menuItem);
    if (isTablet) {
      switchMenu && switchMenu.scrollTo(e.target.offsetLeft, 0);
      const firstChild = infPossibilities[scrollCount];
      const infiniteArray = infPossibilities.concat(firstChild);
      setInfPossibilities(infiniteArray);
      setScrollCount((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (isTablet) {
      setInfPossibilities(possibilities.concat(...possibilities));
    } else {
      setInfPossibilities(possibilities);
    }
  }, [isTablet]);

  return (
    <SwitchMenuContainer
      className="switch-menu"
      variant={windowSize.width && isTablet ? "row" : "column"}
    >
      {infPossibilities.map((menuItem, i) => {
        return (
          <li>
            <SwitchMenuButton
              key={`menuItem-${i}`}
              isClicked={menuItem === menuState ? true : false}
              onClick={(e) => scrollTo(e, menuItem)}
              padding={isTablet}
              className={`${
                isTablet && i === scrollCount - 1 && "item--dissapear"
              }`}
            >
              {i === 0 && windowSize.width < Theme.breakpoints.mobileL
                ? "bball"
                : menuItem}
            </SwitchMenuButton>
          </li>
        );
      })}
    </SwitchMenuContainer>
  );
};

export default SwitchMenu;
