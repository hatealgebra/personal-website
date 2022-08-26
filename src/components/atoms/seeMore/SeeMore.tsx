import React from "react";
import styled from "styled-components";

const SeeMoreContainer = styled.div.attrs((props) => ({
  className: "see-more-button",
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 0px lightgrey;

  span {
    font-weight: ${({ theme }) => theme.typography.semibold};
    font-size: ${({ theme }) => theme.fontSize.lg};
    text-transform: capitalize;
    text-align: center;
    letter-spacing: 1px;
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.color.black};
  }
`;

const SeeMore = () => {
  return (
    <SeeMoreContainer>
      <span>
        See <br></br> More
      </span>
    </SeeMoreContainer>
  );
};

export default SeeMore;
