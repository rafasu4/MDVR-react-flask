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
          Voter  {index + 1}
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

  const randomize = () => {
    const votersCopy = [...voters];
    for (let index = 0; index < votersCopy.length; index++) {
      votersCopy[index].alters_pref = votersCopy[index].alters_pref.sort(() => Math.random() - 0.5);
    }
    setVoters(votersCopy);
  }

  useEffect(() => {
    updateVoters(voters);
    setAlternatives(alphabet.slice(0, 1));
  }, []);

  useEffect(() => {
    updateVoters(voters);
    const altersMax = totalAlters >= alphabet.length ? alphabet.length : totalAlters; // max choice in the alphabet
    setAlternatives(alphabet.slice(0, altersMax));
  }, [totalAlters]);

  return (
    <VoterBoardWrapper>
      <ButtonsWrapper>
        <CreateButton onClick={addVoter}>Add User</CreateButton>
        <RandomizeButton onClick={randomize}>Randomize</RandomizeButton>
      </ButtonsWrapper>
      <VoterBoardContainer>{renderVoters()}</VoterBoardContainer>
    </VoterBoardWrapper>
  );
};

const VoterBoardWrapper = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  margin-top: 30px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const VoterBoardContainer = styled.div`
  display: flex;
  height: fit-content;
  max-height: 394px;
  max-width 100%;
  padding: 20px;
  gap: 20px;
  overflow-y: auto;
`;

const VoterRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #f0a500;
  background: #f9f9f9;
  border-radius: 10px;
  align-items: center;
  padding: 5px;
  font-weight: 500;
`;

const CreateButton = styled.button`
  width: 50%;
  background-color: #f0a500;
  color: #fff;
  border-color: #bd8200;
  font-size: larger;
  height: fit-content;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid white;
  cursor: pointer;
  font-weight: 900;
`;

const RandomizeButton = styled.button`
  width: 50%;
  border-color: #bd8200;
  font-size: larger;
  height: fit-content;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid white;
  cursor: pointer;
  font-weight: 900;
`;

export default VotersBoard;