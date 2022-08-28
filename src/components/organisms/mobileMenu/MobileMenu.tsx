import { Link } from "gatsby";
import React, { Dispatch } from "react";
import { NavLink } from "../../atoms/link/link.styled";
import { useLocation } from "@reach/router";
import { LINKS } from "../../../utils/contants";

import {
  MobileMenuContainer,
  MobileMenuNav,
  MobileMenuNavContainer,
  MobileMenuTopBar,
} from "./mobileMenu.styled";
import { ButtonLink } from "../../atoms/button/button.styled";

interface MobileMenuprops {
  isOpen: boolean;
  close: Dispatch<void>;
}

const MobileMenu = ({ isOpen, close }: MobileMenuprops) => {
  const linkValues = Object.values(LINKS);
  const { pathname } = useLocation();

  return (
    <MobileMenuContainer data-testid="mobile-menu__container" isOpen={isOpen}>
      <MobileMenuTopBar>
        <NavLink to="/about-me">Pavel Vondra</NavLink>
        <ButtonLink onClick={close}>Close</ButtonLink>
      </MobileMenuTopBar>
      <MobileMenuNavContainer>
        <MobileMenuNav>
          {linkValues.map((link, i) => (
            <Link
              key={link + i}
              className={(link === pathname && "select--underlined") || ""}
              to={link}
            >
              {link.replace("/", "")}
            </Link>
          ))}
        </MobileMenuNav>
        <p>
          Currently Software <br /> Engineer at Diebold Nixdorf
        </p>
        <p>
          Based in Pilsen <br /> Czech republic
        </p>
      </MobileMenuNavContainer>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
