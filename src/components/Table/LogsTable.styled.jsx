import styled from 'styled-components';

const SCROLLBAR_WIDTH = 14;

export const TableStyled = styled.table`
  border-collapse: collapse;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
  border-radius: 4.2px;
`;

export const TableHeader = styled.thead`
  display: table-header-group;
  border-bottom: 1px solid grey;
  border-radius: 10px;
`;

export const TableHeaderRow = styled.tr`
  display: table;
  width: calc(100% - ${SCROLLBAR_WIDTH}px);
  table-layout: fixed;
  font-family: Open Sans;
  color: #b9b9b9;
`;

export const TableBody = styled.tbody`
  display: block;
  max-height: 327px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: ${SCROLLBAR_WIDTH}px;
    height: 328px;
    background: white;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 100px;
`;

export const TableRow = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
  font-family: Open Sans;
`;