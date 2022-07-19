import React from "react";

import { HiCode } from "@react-icons/all-files/hi/HiCode";
import styled from "styled-components";
import Theme from "../../particles/Theme";

interface HeadingCodeProps {
  children: React.ReactNode;
  right?: boolean;
  linkHeading?: boolean;
}

const HeadingContainerStyled = styled.div<HeadingCodeProps>`
  position: relative;
  max-width: 50%;
  left: ${(props) => props.right && "45%"};
  text-align: ${({ right }) => right && "right"};
`;

const HeadingCode = ({ children, right, linkHeading }: HeadingCodeProps) => {
  return (
    <HeadingContainerStyled right={right} linkHeading={linkHeading}>
      <HiCode fontSize={(linkHeading && "1.8em") || "2em"} />
      {(linkHeading === true && (
        <h3
          style={{
            fontWeight: Theme.typography.bold,
            textTransform: "capitalize",
            color: "white",
          }}
        >
          {children}
        </h3>
      )) || <h2>{children}.</h2>}
    </HeadingContainerStyled>
  );
};

export default HeadingCode;
