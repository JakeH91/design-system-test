/*
 * Button component. It provides interfaces for all types
 * of the buttons.
 */

import React from "react";
import styled  from "styled-components";
import { bool, string } from "prop-types";

const Button = ({ as, label, children, ...props }) => {
  const isIcon = children?.type?.displayName === "Icon";
  return (
    <StyledButton as={as} isIcon={isIcon} {...props}>
      {label ? label : children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  line-height: 24px;
  position: relative;
  user-select: none;
  text-decoration: none;
  border-width: 0;
  border-style: solid;
  border-radius: 1rem;
  padding: ${({ isIcon }) => (isIcon ? "12px" : "16px")};
  background-color: ${({ color }) => color};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 700;
  width: ${(p) => (p.isStretched ? "100%" : null)};
  ${({ isOutline }) =>
    isOutline &&
    `border-width: 1px;
     border-color: rgba(221, 227, 235, 1); 
     background-color: transparent;
     color: rgba(12, 17, 24, 1);
  `};
  ${({ isBorderless }) =>
    isBorderless &&
    `
     background-color: transparent;
     color: rgba(241, 82, 35, 1);
     padding: 0;
  `};
`;

Button.propTypes = {
  label: string,
  disabled: bool,
  isStretched: bool,
  isOutline: bool,
  isBorderless: bool,
  color: string,
};

Button.defaultProps = {
  color: "rgba(241, 82, 35, 1)",
};

export default Button;
