import { graphql } from "gatsby";
import Theme from "../components/particles/Theme";

const { mobileL, tablet, laptop, desktop, highRes } = Theme.breakpoints;

export const DEVICE = {
  mobileL: `@media only screen and (min-width: ${mobileL}px)`,
  tablet: `@media only screen and (min-width: ${tablet}px)`,
  laptop: `@media only screen and (min-width: ${laptop}px)`,
  desktop: `@media only screen and (min-width: ${desktop}px)`,
  highRes: `@media only screen and (min-width: ${highRes}px)`,
};
