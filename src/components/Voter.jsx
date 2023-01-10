import { useState } from "react";
import styled from "styled-components";

const Voter = (props) => {
  const { id, totalAlters, voterUpdate } = props;
  const [preference, setPreference] = useState(props.preference);
  const [type, setType] = useState(props.type);
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const onTypeChangeHandler = (e) => {
    setType(e.target.value);
    voterUpdate(id, "type", e.target.value);
  };

  const onPreferenceChangeHandler = (index, e) => {
    let updatedPreference = [...preference];
    console.log(updatedPreference);
    updatedPreference[index] = e.target.value;
    console.log(updatedPreference);
    setPreference(updatedPreference);
    voterUpdate(id, "alters_pref", updatedPreference);
  };

  const renderAltersPreference = () => {
    const selectArr = [];
    const copyAlphabet = [...alphabet];
    const altersAvailable = copyAlphabet.splice(0, totalAlters);
    for (let i = 0; i < totalAlters; i++) {
      selectArr.push(
        <Select
          key={i}
          value={preference[i]}
          onChange={(e) => onPreferenceChangeHandler(i, e)}
        >
          {altersAvailable.map((option, index) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      );
    }
    return selectArr;
  };

  return (
    <VoterContainer>
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
      {renderAltersPreference()}
    </VoterContainer>
  );
};

const VoterContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const Select = styled.select`
  width: 38px;
  height: 26px;
`;

export default Voter;
