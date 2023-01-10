import styled from "styled-components";

const Input = ({ placeholder, width, height, type, props }) => {
  return (
    <InputStyle
      placeholder={placeholder ? placeholder : ""}
      {...{ width, height, type, ...props }}
    />
  );
};

const InputStyle = styled.input.attrs(({ type }) => ({
  type: type || "text",
}))`
  width: ${({ width }) => (width ? width : "30px")};
  height: ${({ height }) => (height ? height : "20px")};
`;

export default Input;
