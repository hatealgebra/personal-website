import React from "react";
import Link, { PageLink } from "../../atoms/link/link.styled";
import HeadingCode from "../headingCode/HeadingCode";
import { LinkListStyled } from "./linkList.styled";

const LinkList = ({ heading, linkData, isExternal }: LinkListProps) => {
  return (
    <LinkListStyled>
      <dt className="link-list_heading">
        <HeadingCode linkHeading>{heading}</HeadingCode>
      </dt>
      {linkData.map((child) => (
        <dd key={`link-${child.name}`} className="link-list_item">
          {isExternal ? (
            <PageLink to={child.link} target="_blank">
              {child.name}
            </PageLink>
          ) : (
            <PageLink to={child.link}>{child.name}</PageLink>
          )}
        </dd>
      ))}
    </LinkListStyled>
  );
};

interface LinkListProps {
  heading: string;
  linkData: { name: string; link: string }[];
  isExternal?: boolean;
}

export default LinkList;
