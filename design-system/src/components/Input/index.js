import React, { useState } from "react";
import styled from "styled-components";
import Title from "../Title";
import Button from "../Button";
import { string } from "prop-types";
import { sizes, typography, colors } from "../../tokens";

/* Input
 *
 * Multiline input area, disabled by default, with button to enter editing mode
 */
const Input = ({ label, text }) => {
  const [isDisabled, setDisabled] = useState(true);
  return (
    <>
      <StyledTitleContainer>
        <Title size="small">
          <label htmlFor="addressInput">{label}</label>
        </Title>
        <Button isBorderless onClick={() => setDisabled(false)}>
          Change
        </Button>
      </StyledTitleContainer>
      <StyledTextarea
        rows="3"
        disabled={isDisabled}
        id="addressInput"
        name="textValue"
        onBlur={() => setDisabled(true)}
        defaultValue={text}
      />
    </>
  );
};

Input.propTypes = {
  label: string,
  text: string,
};

const StyledTextarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  font-family: ${typography.headline1FontFamily};
  font-size: ${typography.paragraph3FontSize};
  font-weight: ${typography.paragraph3FontWeight};
  line-height: ${sizes.size2xl};
  letter-spacing: ${typography.paragraph3LetterSpacing};
  color: ${colors.onBackground500};
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default Input;
