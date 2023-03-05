import styled from "styled-components";
import ToolTip from "../ToolTip";

const CountInput = (props) => {
  const { value, min, max, onChange, info } = props;

  return (
    <CountInputWrapper>
      <CountInputContainer
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
      <ToolTip info={info} />
    </CountInputWrapper>
  );
};

const CountInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: aliceblue;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  width: 35%;
  height: 50px;
`;

const CountInputContainer = styled.input.attrs({ type: "number" })`
  background-color: transparent;
  border: 1px solid transparent;
  width: inherit;
  height: inherit;
  font-size: 20px;
  text-align: center;
  font-family: 'Open Sans';
  padding-left: 10px;
`;

export default CountInput;