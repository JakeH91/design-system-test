import React from "react";
import styled from "styled-components";
import { string, shape, arrayOf } from "prop-types";
import { sizes, typography, colors } from "../../tokens";

/* SummaryTable
 *
 * SummaryTable displays order details in a table, each row has information on name and price for each item.
 */

const SummaryTable = ({ items, total, ...props }) => {
  return (
    items &&
    items.length > 0 && (
      <div {...props}>
        <StyledHeading>Summary</StyledHeading>
        <StyledGrid>
          {items.map((item) => (
            <React.Fragment key={item.name}>
              <p>{item.name}</p>
              <StyledPrice>{item.price}</StyledPrice>
            </React.Fragment>
          ))}
        </StyledGrid>
        {total && (
          <>
            <StyledBorder />
            <StyledGrid>
              <StyledItemName>Total</StyledItemName>
              <StyledTotal>{total}</StyledTotal>
            </StyledGrid>
          </>
        )}
      </div>
    )
  );
};

SummaryTable.propTypes = {
  items: arrayOf(
    shape({
      name: string,
      price: string,
    })
  ),
  total: string,
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: ${sizes.sizelg};
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.shadowDefault0Color};
  margin: ${sizes.size3xl} 0;
`;

const StyledItemName = styled.p`
  font-size: ${typography.paragraph1FontSize};
  line-height: ${typography.paragraph1LineHeight};
`;

const StyledHeading = styled.h2`
  margin-bottom: 30px;
`;

const StyledPrice = styled.div`
  font-family: ${typography.paragraph3FontFamily};
  font-size: ${typography.paragraph3FontSize};
  font-weight: ${typography.headline1FontWeight};
  font-style: ${typography.paragraph3FontStyle};
  line-height: ${typography.paragraph3LineHeight};
  letter-spacing: ${typography.paragraph3LetterSpacing};
  text-align: right;
`;

const StyledTotal = styled.div`
  font-family: ${typography.headline4FontFamily};
  font-size: ${typography.headline4FontSize};
  font-weight: ${typography.headline4FontWeight};
  font-style: ${typography.headline4FontStyle};
  line-height: ${typography.headline4LineHeight};
  letter-spacing: ${typography.headline4LetterSpacing};
  text-align: right;
`;

export default SummaryTable;
