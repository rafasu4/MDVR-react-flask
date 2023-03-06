import styled from "styled-components";

const VoterType = (props) => {
    const { type, onTypeChangeHandler } = props;
    return (
        <Select
            id="voter-type"
            value={type}
            onChange={(e) => onTypeChangeHandler(e)}
        >
            <option key="0" value={0}>
                Lazy
            </option>
            <option key="1" value={1}>
                Active
            </option>
        </Select>
    )
}

const Select = styled.select`
  height: 26px;
  text-align: center;
  background-color: aliceblue;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
`;

export default VoterType;