import { graphql, useStaticQuery } from "gatsby";

export const gatsbyImagesLab = () => {
  const data = useStaticQuery(graphql`
    query {
      weatherApp: allFile(filter: { relativeDirectory: { eq: "weatherApp" } }) {
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
      foodMood: allFile(filter: { relativeDirectory: { eq: "foodMood" } }) {
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
