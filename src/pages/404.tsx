import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

import Link from "../components/atoms/link/link.styled";

import { LINKS } from "../utils/contants";
import { DEVICE } from "../utils/helpers";

//  TODO particles on background animation
const MissingPageContainer = styled.div`
  display: flex;
  height: 100vh;
  place-content: center;
  .missing-page {
    &__content {
      margin: auto;
      padding: 10px;
      text-align: center;
    }
    &__heading {
      height: fit-content;
      display: flex;
      justify-content: space-between;
      max-width: 900px;
      h1 {
        font-size: 10em;
        ${DEVICE.laptop} {
          font-size: 20em;
        }
      }
    }
    &__text {
      text-align: center;
      margin: 40px auto;
      max-width: 400px;
      font-weight: ${({ theme }) => theme.typography.medium};
    }
  }
`;

const MissingPage = () => {
  return (
    <MissingPageContainer>
      <div className="missing-page__content">
        <div className="missing-page__heading">
          <h1>4</h1>
          <StaticImage
            src="../assets/images/404.svg"
            alt="Void"
            style={{
              maxWidth: "300px",
              width: "50%",
              height: "auto",
            }}
          />
          <h1>4</h1>
        </div>
        <p className="missing-page__text">
          Hello, I'm sorry, but one of the links is broken because I was
          probably too sleepy to get it correct. Please let me know which link
          you've clicked and take route back to the homepage. Thank you.
        </p>
        <Link to={LINKS.homepage}>Home</Link>
      </div>
    </MissingPageContainer>
  );
};

export default MissingPage;
