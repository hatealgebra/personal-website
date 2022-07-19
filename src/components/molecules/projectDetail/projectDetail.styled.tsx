import React from "react";
import styled from "styled-components";
import Theme from "../../particles/Theme";

export const ProjectDetailImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    width: 100%;
    height: 200px;
  }
`;

export const ProjectDetailInfo = styled.div`
  max-width: 500px;
  padding-bottom: 50px;
  margin-bottom: 70px;
  .project-info {
    &_item {
      display: flex;
      justify-content: space-between;
      padding: 10px 0px;
      h5 {
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
      left: 55%;
      top: 50px;
    }
  }
`;

export const ProjectDetailInfoContainer = styled.section`
  margin-top: 50px;
`;

export const ProjectDetailPanel = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  font-size: ${Theme.fontSize.lg};
`;

export const ProjectDetailContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  display: ${({ isOpen }) => (isOpen && "block") || "none"};
  box-sizing: border-box;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: ${Theme.color.primary};
  padding: 20px 5%;
  color: white;
  z-index: 999;
  padding-bottom: 70px;
`;
