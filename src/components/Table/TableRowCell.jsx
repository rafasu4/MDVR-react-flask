import styled from "styled-components";

const TableRowCell = ({
  width,
  textAlign,
  padding,
  noBorders,
  textColor,
  weight,
  ...props
}) => {
  return (
    <TableRowCellStyled
      {...{ width, textAlign, padding, noBorders, textColor, weight, ...props }}
    />
  );
};

const TableRowCellStyled = styled.td`
    height: 64px;
    width: ${({ width }) => (width ? width : "")}};
    overflow-x: auto; 
    border-bottom: ${({ noBorders }) =>
      noBorders ? "" : `1px solid white`};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    padding:${({ padding }) => (padding ? padding : "")};
    color: ${({ textColor }) => (textColor ? textColor : "")};
    font-weight: ${({ weight }) => (weight ? weight : 600)};
`;

export default TableRowCell;
