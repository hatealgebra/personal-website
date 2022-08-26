import styled, { css } from "styled-components";
import theme from "../../particles/Theme";

import { NavLink } from "../link/link.styled";

const baseStyling = css`
  min-width: 100px;
  min-height: 20px;
  border-radius: 5px;

  color: white;
  font-weight: ${theme.typography.medium};
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in;
`;

export const ButtonLink = styled.button`
  font-family: ${theme.fonts.secondary};
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.typography.medium};
  border: none;
  background: none;
`;

// fixme font size of the link button
export const LightButton = styled.button`
  ${baseStyling}
  background: none;
  min-width: auto;
  height: auto;
  display: block;
`;

const Button = styled.button<ButtonProps>`
  ${baseStyling}
  padding: 12px 27px;
  background: ${({ variant }) =>
    variant === "secondary" ? theme.color.secondary : theme.color.primary};

  &:hover {
    opacity: 0.9;
  }
`;

export interface ButtonProps {
  variant: "primary" | "secondary";
}

export default Button;
