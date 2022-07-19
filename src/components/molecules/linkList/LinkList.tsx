import React from "react";
import { PageLink } from "../../atoms/link/link.styled";
import HeadingCode from "../headingCode/HeadingCode";
import { LinkListStyled } from "./linkList.styled";

type LinkListProps = {
  heading: string;
  linkData: string[];
};

const LinkList = ({ heading, linkData }: LinkListProps) => {
  return (
    <LinkListStyled>
      <dt className="link-list_heading">
        <HeadingCode linkHeading>{heading}</HeadingCode>
      </dt>
      {linkData.map((link) => (
        <dd key={`link-${link}`} className="link-list_item">
          <PageLink to={link}>{link.replace("/", "")}</PageLink>
        </dd>
      ))}
    </LinkListStyled>
  );
};

export default LinkList;
