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
`;

const CountInputContainer = styled.input.attrs({ type: "number" })`
  width: 30px;
`;

export default CountInput;