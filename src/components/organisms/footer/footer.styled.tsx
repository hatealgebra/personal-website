import React from "react";
import styled, { css } from "styled-components";
import { DEVICE } from "../../../utils/helpers";
import Theme from "../../particles/Theme";

export const LinkListContainer = styled.div`
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  a {
    color: white;
  }

  @media ${DEVICE.tablet} {
    flex-direction: row;
    flex-wrap: nowrap;
    & > * {
      width: 50%;
      gap: 0px;
    }
  }
`;

export const SocialIcons = styled.div`
  width: fit-content;
  display: flex;
  gap: 30px;
  color: ${Theme.color.gold};
  margin: 50px auto 10vh auto !important;
`;

const contactLinkStyling = css`
  max-width: 300px;
  display: flex;
  font-size: ${Theme.fontSize["2xl"]};
  font-weight: ${Theme.typography.semibold};
  text-transform: uppercase;

  @media ${DEVICE.tablet} {
    font-size: ${Theme.fontSize["3xl"]};
    max-width: 450px;
  }
`;

export const ContactPageLink = styled.a`
  ${contactLinkStyling};
  color: white;
  margin: auto;
`;

export const Email = styled.a.attrs((props) => ({
  href: "mailto:Hello@pavel-vondra.com",
}))`
  ${contactLinkStyling};
  color: ${Theme.color.gold};
  margin: 10vh auto 20px auto !important;
`;

export const FooterStyled = styled.footer`
  position: relative;
  box-sizing: border-box;
  padding: 10px 10% 30px 10%;
  width: 100%;
  color: white;
  max-width: 1200px;
  margin: auto;

  & > * {
    margin: 40px 0px;
  }

  h3 {
    text-transform: initial;
  }

  p {
    width: 90%;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  bottom: 0;
  background-color: ${Theme.color.black};
`;
