import styled from "styled-components";

const TextDiv = ({ text, width, height, color, fontSize, weight, margin, props }) => {
  return <StyledDiv {...{ width, height, color, fontSize, weight, margin, ...props }}>{text}</StyledDiv>;
};

const StyledDiv = styled.div`
  width: ${({ width }) => (width ? width : "30px")};
  height: ${({ height }) => (height ? height : "10px")};
  color: ${({ color }) => (color ? color : "white")};
  font-weight: ${({ weight }) => (weight ? weight : "400")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "20px")};
  margin: ${({ margin }) => (margin ? margin : "0 0 0 0")};
`;

export default TextDiv;
