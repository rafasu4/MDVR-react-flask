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
                0
            </option>
            <option key="1" value={1}>
                1
            </option>
        </Select>
    )
}

const Select = styled.select`
  width: 38px;
  height: 26px;
  background-color: aliceblue;
  border: 1px solid #e5e5e5;
`;

export default VoterType;