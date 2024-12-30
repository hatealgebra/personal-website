import React from "react";
import styled from "styled-components";
import { NavLink } from "../components/atoms/link/link.styled";
import Container from "../components/molecules/container/Container";
import {
  Email,
  ContactPageLink,
} from "../components/organisms/footer/footer.styled";
import TopBar from "../components/organisms/topBar/TopBar";
import Theme from "../components/particles/Theme";
import PageTemplate from "../components/templates/Page.template";
import { SOCIAL_LINKS } from "../utils/contants";
import useWindowSize from "../utils/hooks/useWindowSize";


const ContactFooter = styled.footer`
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 100px 10px 10px 50px;
`;

const SmallHeading = styled.div`
  font-size: ${Theme.fontSize.lg};
  text-transform: uppercase;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  gap: 10%;
  background-color: black;
  padding: 10px;
  color: white;
`;

const contact = () => {
  const windowWidth = useWindowSize().width;
  const socialValues = Object.values(SOCIAL_LINKS);
  const socialKeys = Object.keys(SOCIAL_LINKS);

  return (
    <PageTemplate woFooter>
      {windowWidth >= Theme.breakpoints.tablet && <TopBar contact />}
      <Header>
        <span>
          Currently <br /> fullstack Developer at DigitalVision
        </span>
        <span>
          Based in Regensburg <br /> Germany
        </span>
      </Header>
      <Container background="black">
        <SmallHeading style={{ marginTop: "50px" }}>
          send me a message
        </SmallHeading>
        <ContactPageLink
          href="mailto:contact@pavel-vondra.com"
          style={{ color: "white" }}
        >
          contact@pavel-vondra.com
        </ContactPageLink>
      </Container>
      <Container background="black">
        <SmallHeading>or get in touch with the social media</SmallHeading>
        {socialValues.map((value, i) => (
          <ContactPageLink href={value}>{socialKeys[i]}</ContactPageLink>
        ))}
      </Container>
      <ContactFooter>Created with Gatsby and a lot of coffee.</ContactFooter>
    </PageTemplate>
  );
};

export default contact;
