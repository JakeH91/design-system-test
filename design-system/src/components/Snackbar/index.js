import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { sizes, effects } from "../../tokens";

/* Snackbar
 *
 * TODO: add component description
 */

/* use "as" prop to pass Link component of React Router, when you implement this component into product */
const Snackbar = ({ as }) => {
  const component = as || "a";
  return (
    <StyledSnackbar>
      <p>Added to your cart</p>
      <Button as={component} to="/checkout" isBorderless>
        Checkout
      </Button>
    </StyledSnackbar>
  );
};

export const StyledSnackbar = styled.div`
  display: flex;
  box-shadow: ${effects.shadowDefault0OffsetX} ${effects.shadowDefault0OffsetY}
      ${effects.shadowDefault0Radius} ${effects.shadowDefault0Spread}
      ${effects.shadowDefault0Color},
    ${effects.shadowDefault1OffsetX} ${effects.shadowDefault1OffsetY}
      ${effects.shadowDefault1Radius} ${effects.shadowDefault1Spread}
      ${effects.shadowDefault1Color};
  padding: ${sizes.sizexl} ${sizes.size2xl};
  justify-content: space-between;
  border-radius: ${sizes.sizelg};
  margin-top: ${sizes.size2xl};
`;

export default Snackbar;
