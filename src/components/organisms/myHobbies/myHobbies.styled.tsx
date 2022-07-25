import styled from "styled-components";
import { DEVICE } from "../../../utils/helpers";
import menuState from "../../molecules/switchMenu/SwitchMenuHobbies";

export const Hobbytext = styled.p``;

export const HobbyImageContainer = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 700px;
  height: 300px;
  background-color: black;
  cursor: pointer;
`;

export const MyHobbiesImagesScroll = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;
  width: 100%;
`;

export const HobbyContent = styled.div`
  display: flex;
  flex-direction: column;

  ${DEVICE.tablet} {
    max-width: 1800px;
    margin: auto;
    flex-direction: row-reverse;
    align-items: center;
    gap: 50px;
    padding: 0 5%;
    p {
      margin: auto;
    }
  }
`;

export const MyHobbiesContainer = styled.div`
  background-color: white;
  ${DEVICE.tablet} {
    padding: 10% 0;
  }
`;
