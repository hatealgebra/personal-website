import Theme from "../components/particles/Theme";

const { mobileL, tablet, laptop, desktop, highRes } = Theme.breakpoints;

export const DEVICE = {
  mobileL: `(min-width: ${mobileL}px)`,
  tablet: `(min-width: ${tablet}px)`,
  laptop: `(min-width: ${laptop}px)`,
  desktop: `(min-width: ${desktop}px)`,
  highRes: `(min-width: ${highRes}px)`,
};
