import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

export const gatsbyImagesLab = () => {
  const data = useStaticQuery(graphql`
    query {
      WeatherApp: allFile(
        sort: { order: ASC, fields: absolutePath }
        filter: { relativeDirectory: { eq: "weatherApp" } }
      ) {
        edges {
          node {
            absolutePath
            sourceInstanceName
            relativeDirectory
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      FoodMood: allFile(filter: { relativeDirectory: { eq: "foodMood" } }) {
        edges {
          node {
            absolutePath
            sourceInstanceName
            relativeDirectory
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      FEMChallenges: allFile(
        sort: { order: ASC, fields: absolutePath }
        filter: { relativeDirectory: { eq: "fem" } }
        ) {
        edges {
          node {
            absolutePath
            sourceInstanceName
            relativeDirectory
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      },
      EntertainmentApp: allFile(
        sort: { order: ASC, fields: absolutePath }
        filter: { relativeDirectory: { eq: "entertainmentApp" } }
        ) {
        edges {
          node {
            absolutePath
            sourceInstanceName
            relativeDirectory
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  return data;
};

export const gatsbyImageslabPreview = () => {
  const imageData = gatsbyImagesLab();
  return [
    getImage(imageData.FoodMood.edges[0].node.childImageSharp),
    getImage(imageData.WeatherApp.edges[0].node.childImageSharp),
    getImage(imageData.FEMChallenges.edges[0].node.childImageSharp),
    getImage(imageData.EntertainmentApp.edges[0].node.childImageSharp),
  ];
};
