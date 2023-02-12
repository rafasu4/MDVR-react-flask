import styled from 'styled-components';

const SCROLLBAR_WIDTH = 14;

export const TableStyled = styled.table`
  border-collapse: collapse;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  display: table-header-group;
`;

export const TableHeaderRow = styled.tr`
  display: table;
  width: calc(100% - ${SCROLLBAR_WIDTH}px);
  table-layout: fixed;
  font-family: Open Sans;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
`;