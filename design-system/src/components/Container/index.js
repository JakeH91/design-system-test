import React from "react";
import styled from "styled-components";
import { string, node, arrayOf, oneOf } from "prop-types";
import { sizes, colors } from "../../tokens";

/* Container
 *
 * A wrapper for the page content with paddings
 */

const Container = ({
  children,
  padding = ["top", "bottom", "left", "right"],
  background,
}) => {
  return (
    <StyledContainer padding={padding} background={background}>
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  background: string,
  children: node,
  padding: arrayOf(oneOf(["top", "bottom", "left", "right"])),
};

const StyledContainer = styled.div`
  ${({ padding }) =>
    padding.map((p) => {
      const paddingValue = p === "to" ? sizes.size4xl : sizes.size3xl;
      return `padding-${p}: ${paddingValue};`;
    })}
  display: flex;
  flex-direction: column;
  background: ${({ background }) => colors[background]};
`;

export default Container;
