import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const PageLink = styled((props) => (
  <AniLink fade duration={2} {...props} />
))`
  font-size: ${({ theme }) => theme.fontSize.md};
  text-decoration: none;
  text-transform: capitalize;
`;

export const NavLink = styled(PageLink)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.medium};
`;

const Link = styled((props) => <PageLink {...props} />)`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.alt};
  color: ${({ white, theme }) => (white ? "white" : theme.color.black)};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: italic;
  position: relative;
  top: 20px;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    background-color: ${({ white, theme }) =>
      white ? "white" : theme.color.black};
    height: 2px;
    bottom: 0;
    left: 0;
    transition: 1s ease-out;
    transform-origin: bottom right;
    animation-iteration-count: 1;
    animation-duration: 1.5s;
  }
  &:hover:after {
    animation-name: hoverUnder;
    animation-timing-function: ease;
    transform-origin: bottom right;
  }

  @keyframes hoverUnder {
    from {
      transform: scaleX(1);
    }

    50% {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }
`;

export default Link;
