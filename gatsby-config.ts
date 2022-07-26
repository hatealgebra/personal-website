import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Personal website`,
    siteUrl: `https://www.pavel-vondra.com`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-manifest",
      options: { icon: "src/assets/images/favicon.png" },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `lab`,
        path: `${__dirname}/src/assets/images/lab/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `technologyStack`,
        path: `${__dirname}/src/assets/images/technologyStack//`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `otherSkills`,
        path: `${__dirname}/src/assets/images/otherSkills//`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `3dModels`,
        path: `${__dirname}/src/static/3dModels`,
      },
    },
  ],
};

export default config;
