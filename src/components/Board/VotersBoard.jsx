import { useEffect, useState } from "react";
import styled from "styled-components";
import Voter from "../Voter/Voter";

const VotersBoard = (props) => {
  const { totalAlters, updateVoters } = props;
  const [alternatives, setAlternatives] = useState([]);
  const [voters, setVoters] = useState([{ type: "0", alters_pref: [] }]);
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

  const addVoter = () => {
    const newVoter = { type: 0, alters_pref: [] };
    setVoters((prev) => [...prev, newVoter]);
    props.updateVoters(voters);
  };

  const voterUpdate = (id, key, value) => {
    let updatedVoters = [...voters];
    updatedVoters[id][key] = value;
    setVoters(updatedVoters);
    props.updateVoters(voters);
  };

  const renderVoters = () => {
    const votersArr = [];
    voters.forEach((v, index) => {
      votersArr.push(
        <VoterRow key={index}>
          User  {index + 1}:
          <Voter
            id={index}
            type={v.type}
            preference={alternatives}
            voterUpdate={voterUpdate}
          />
        </VoterRow>
      );
    });
    return votersArr;
  };

  useEffect(() => {
    updateVoters(voters);
    const altersMax = totalAlters >= alphabet.length? alphabet.length : totalAlters; // max choice in the alphabet
    setAlternatives(alphabet.slice(0, altersMax));
  }, [totalAlters]);

  return (
    <VoterBoardWrapper>
      <CreateButton onClick={addVoter}>add user</CreateButton>
      <VoterBoardContainer>{renderVoters()}</VoterBoardContainer>
    </VoterBoardWrapper>
  );
};

const VoterBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const VoterBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: 394px;
  width: fit-content;
  border-radius: 16px;
  border: 1px solid #919aa4;
  background: #3c4853;
  padding: 20px;
  gap: 20px;
  overflow-y: auto;
`;

const VoterRow = styled.div`
  display: flex;
  gap: 5px;
`;

const CreateButton = styled.button`
  height: 25px;
  text-transform: uppercase;
`;

export default VotersBoard;