import React, { useState } from "react";
import {
  ExpandButton,
  ExpandContent,
  ExpandIcon,
  ExpandItemContainer,
} from "./expandItem.styled";

import { BiMinus } from "@react-icons/all-files/bi/BiMinus";
import { StaticImage } from "gatsby-plugin-image";

interface ExpandItemProps {
  borders: "both" | "up" | "down";
  number: string;
  name: string;
  children: any;
  color?: "black" | "white";
}

const pathImage: string = "../../assets";

const ExpandItem = ({
  borders,
  number,
  name,
  children,
  color = "black",
}: ExpandItemProps) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <ExpandItemContainer borders={borders} color={color}>
      <ExpandButton onClick={() => setisOpen((state) => !state)}>
        <span>{number}</span>
        <span>{name}</span>
        <ExpandIcon isOpen={isOpen}>
          <BiMinus size="2rem" color={color} />
          <BiMinus size="2rem" color={color} />
        </ExpandIcon>
      </ExpandButton>
      <ExpandContent isOpen={isOpen}>
        <div>{children}</div>
      </ExpandContent>
    </ExpandItemContainer>
  );
};

export default ExpandItem;
