import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { DEVICE } from "../../../utils/helpers";
import Theme from "../../particles/Theme";

export const ProjectDetailImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;

  img {
    height: 100%;
  }

  .project-info__image {
    width: 100%;
    height: fit-content;
    height: auto;
  }

  ${DEVICE.tablet} {
    margin-top: 0px;
    margin-left: 50px;
    grid-row: 1/3;
    grid-column: 2/3;
    flex-direction: row;

    .project-info__image {
      height: auto;
      max-height: 600px;
      width: 1200px;
      max-width: 1200px;
    }
  }

  ${DEVICE.laptop} {
    .project-info__image {
      max-width: 1000px;
      max-height: 650px;
    }
  }
`;

export const ProjectDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 450px;
  width: fit-content;
  max-width: 500px;
  .project-info {
    &_item {
      display: flex;
      justify-content: space-between;
      padding: 15px 0px;
      max-width: 300px;
      s h5 {
        text-transform: uppercase;
      }
      span {
        width: 50%;
      }

      &:nth-of-type(2n) {
        border: 1px solid lightgrey;
        border-left: none;
        border-right: none;
      }
    }
    &_live-link {
      position: relative;
      top: 50px;
    }
  }

  ${DEVICE.tablet} {
    min-height: auto;
    width: 300px;
  }
`;

export const ProjectDetailInfoContainer = styled.section`
  margin-top: 50px;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  ${DEVICE.tablet} {
    height: 80%;
    flex-direction: row;
    min-height: 500px;
    width: fit-content;
    h4 {
      margin-bottom: 50px;s
    }
  }
`;

export const ProjectDetailPanel = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  font-size: ${Theme.fontSize.lg};
  padding: 0 5%;

  a {
    top: 0px;
  }
`;

export const ProjectDetailContainer = styled.div<{
  isOpen: boolean;
  ref: any;
}>`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ isOpen }) => (isOpen && "block") || "none"};
  box-sizing: border-box;
  height: 100%;
  width: auto;
  background-color: ${Theme.color.primary};
  padding: 20px 0;
  color: white;
  z-index: 99;
  animation-fill-mode: backwards !important;
  overflow-y: scroll;
  width: 100%;

  ${DEVICE.tablet} {
    overflow-y: hidden;
    .detail-content {
      overflow-x: auto;
      margin-top: 0% !important;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
