import { string } from "prop-types";
import React from "react";
import styled from "styled-components";
import { sizes, typography } from "../../tokens";

/*
 * Title
 */
const Title = ({ size = "big", ...props }) => {
  return size === "big" ? (
    <StyledTitleBig {...props} />
  ) : (
    <StyledTitleSmall {...props} />
  );
};

const StyledTitleBig = styled.h1`
  margin-bottom: 40px;
  letter-spacing: ${typography.headline1LetterSpacing};
  display: inline-flex;
  justify-content: space-between;
`;

const StyledTitleSmall = styled.h2`
  margin-bottom: ${sizes.sizelg};
  letter-spacing: ${typography.headline2LetterSpacing};
  display: inline-flex;
  justify-content: space-between;
`;

Title.propTypes = {
  size: string,
};

export default Title;
