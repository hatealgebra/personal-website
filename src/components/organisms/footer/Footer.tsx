import React from "react";

import {
  Email,
  FooterContainer,
  FooterStyled,
  LinkListContainer,
  SocialIcons,
} from "./footer.styled";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";
import { GrLinkedin } from "@react-icons/all-files/gr/GrLinkedin";
import { GrGithub } from "@react-icons/all-files/gr/GrGithub";
import LinkList from "../../molecules/linkList/LinkList";
import Link from "../../atoms/link/link.styled";
import Theme from "../../particles/Theme";
import { LINKS } from "../../../utils/contants";

interface FooterProps {}

const { homepage, work, about, contact } = LINKS;

const Footer = ({}: FooterProps) => {
  return (
    <FooterContainer>
      <FooterStyled>
        <div>
          <h3>
            Reach <br /> me out
          </h3>
          <p>
            You cant contact me either via social links down below or write me
            eail via form. Looking forward to hear from you
          </p>
        </div>
        <Email>Hello@pavel-vondra.com</Email>
        <SocialIcons>
          <Link to="https://www.instagram.com/hatealgebra/">
            <GrInstagram color={Theme.color.gold} fontSize="1.7em" />
          </Link>
          <Link to="https://www.linkedin.com/in/pavel-vondra-603012201/">
            <GrLinkedin color={Theme.color.gold} fontSize="1.7em" />
          </Link>
          <Link to="https://github.com/hatealgebra">
            <GrGithub color={Theme.color.gold} fontSize="1.7em" />
          </Link>
        </SocialIcons>
        <LinkListContainer>
          <LinkList
            heading="Pages"
            linkData={[homepage, work, about, contact]}
          />
          <LinkList
            heading="Projects"
            linkData={["homepage", "about me", "projects"]}
          />
        </LinkListContainer>
      </FooterStyled>
    </FooterContainer>
  );
};

export default Footer;
