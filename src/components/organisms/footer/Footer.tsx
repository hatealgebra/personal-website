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

import copyWriteJSON from "../../../assets/content/copyWrite.json";

interface FooterProps {}

const { homepage, work, about, contact } = LINKS;

const footerContent = copyWriteJSON.footer;

//  fixme add external links

const Footer = ({}: FooterProps) => {
  return (
    <FooterContainer>
      <FooterStyled>
        <div>
          <h3>
            {footerContent.heading[0]} <br /> {footerContent.heading[1]}
          </h3>
          <p>{footerContent.headingText}</p>
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
            linkData={["weather app", "food mood"]}
          />
        </LinkListContainer>
      </FooterStyled>
    </FooterContainer>
  );
};

export default Footer;
