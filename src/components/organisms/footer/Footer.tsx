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
import { EXTERNALLINKS, LINKS } from "../../../utils/contants";

import copyWriteJSON from "../../../assets/content/copyWrite.json";

interface FooterProps {}

const { homepage, work, about, contact } = LINKS;

const footerContent = copyWriteJSON.footer;

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
        <Email>{footerContent.email}</Email>
        <SocialIcons>
          <Link target="_blank" to="https://www.instagram.com/hatealgebra/">
            <GrInstagram color={Theme.color.gold} fontSize="1.7em" />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/pavel-vondra-603012201/"
          >
            <GrLinkedin color={Theme.color.gold} fontSize="1.7em" />
          </Link>
          <Link target="_blank" to="https://github.com/hatealgebra">
            <GrGithub color={Theme.color.gold} fontSize="1.7em" />
          </Link>
        </SocialIcons>
        <LinkListContainer>
          <LinkList
            heading="Pages"
            linkData={[
              { name: "Homepage", link: homepage },
              { name: "About", link: about },
              { name: "Work", link: work },
              { name: "Contact", link: contact },
            ]}
          />
          <LinkList
            isExternal
            heading="Projects"
            linkData={[
              { name: "Weather App", link: EXTERNALLINKS.weatherApp },
              // { name: "Food Mood", link: EXTERNALLINKS.foodMood },
            ]}
          />
        </LinkListContainer>
      </FooterStyled>
    </FooterContainer>
  );
};

export default Footer;
