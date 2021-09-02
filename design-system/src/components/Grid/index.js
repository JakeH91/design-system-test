import React from "react";
import styled from "styled-components";
import { node, number } from "prop-types";
import { sizes } from "../../tokens";

/* Grid
 *
 * A container to hold product cards
 */
const Grid = ({ columns = 2, children }) => {
  return <StyledGrid columns={columns}>{children}</StyledGrid>;
};

Grid.propTypes = {
  children: node,
  columns: number,
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    `repeat(${columns}, minmax(0, 1fr))`};
  gap: ${sizes.size3xl} ${sizes.size2xl};
`;

export default Grid;
