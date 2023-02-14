import styled from "styled-components";

const TableHeaderCell = ({ width, textAlign, noBorders, ...props }) => {
  return (
    <TableHeaderCellStyled {...{ width, textAlign, noBorders, ...props }} />
  );
};

const TableHeaderCellStyled = styled.th`
  position: sticky;
  height: 61px;
  width: ${({ width }) => (width ? width : "")}};
  text-align: left;
  font-family: 'Open Sans';
  text-transform: uppercase;
  color: white;
  font-weight: 600;
  text-align: center;
  border-bottom: ${({ noBorders }) =>
    noBorders ? "" : `2px solid white`};
`;
export default TableHeaderCell;
