import React, { useEffect, useState } from "react";
import { LINKS } from "../../../utils/contants";
import { NavLink } from "../../atoms/link/link.styled";
import { NavMenu, TopBarContainer } from "./topBar.styled";
import { useLocation } from "@reach/router";

const TopBar = (props) => {
  const [isVisible, setIsVisible] = useState((props.contact && true) || false);

  const { pathname } = useLocation();

  useEffect(() => {
    !props.contact &&
      window.addEventListener("scroll", (e) => {
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <TopBarContainer>
      {isVisible && (
        <>
          <NavLink style={{ color: "white" }} to={LINKS.homepage}>
            Pavel Vondra
          </NavLink>
          <NavMenu>
            <ul>
              {Object.values(LINKS)
                .splice(1)
                .map((link, i) => (
                  <li
                    className={link === pathname && "select--underlined"}
                    key={`navlink${i}`}
                  >
                    <NavLink to={link}>
                      {link.replace("/", "")}
                      {i == 2 ? "" : ","}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </NavMenu>
        </>
      )}
    </TopBarContainer>
  );
};

export default TopBar;
