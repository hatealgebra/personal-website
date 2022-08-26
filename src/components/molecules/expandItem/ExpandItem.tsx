import React, { useState } from "react";
import {
  ExpandButton,
  ExpandContent,
  ExpandIcon,
  ExpandItemContainer,
} from "./expandItem.styled";

import { BiMinus } from "@react-icons/all-files/bi/BiMinus";

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
      <ExpandContent data-testid="expand-item" isOpen={isOpen}>
        <div>{children}</div>
      </ExpandContent>
    </ExpandItemContainer>
  );
};

interface ExpandItemProps {
  borders: "both" | "up" | "down";
  number: string;
  name: string;
  children: any;
  color?: "black" | "white";
}

export default ExpandItem;
