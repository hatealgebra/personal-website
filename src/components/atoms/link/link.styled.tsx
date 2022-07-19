import React from "react";

import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import Theme from "../../particles/Theme";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const PageLink = styled((props) => (
  <AniLink fade duration={2} {...props} />
))`
  font-size: ${Theme.fontSize.md};
  text-decoration: none;
  text-transform: capitalize;
`;

export const NavLink = styled(PageLink)`
  font-family: ${Theme.fonts.secondary};
  font-size: ${Theme.fontSize.lg};
  font-weight: ${Theme.typography.medium};
`;

const Link = styled((props) => <PageLink {...props} />)`
  display: inline-block;
  font-family: ${Theme.fonts.alt};
  color: ${({ white }) => (white ? "white" : Theme.color.black)};
  font-size: ${Theme.fontSize.lg};
  font-style: italic;
  position: relative;
  top: 20px;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    background-color: ${({ white }) => (white ? "white" : Theme.color.black)};
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
