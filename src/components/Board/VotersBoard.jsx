import { useEffect, useState } from "react";
import styled from "styled-components";
import { shuffleArray } from "../../Utils/localUtils";
import Voter from "../Voter/Voter";
import TextDiv from "../../components/common/TextDiv";
import { ALPHABET } from "../../assets/consts";

const VotersBoard = (props) => {
  const { totalAlters } = props;
  const [currentAlters, setCurrentAlters] = useState(ALPHABET.slice(0, totalAlters));
  const votersFromLocalStorage = JSON.parse(localStorage.getItem('voters') || '[]');
  const [voters, setVoters] = useState(votersFromLocalStorage.length !== 0 ? votersFromLocalStorage : [{ type: 0, alters_pref: currentAlters }]);
  const organizeAltersDescription = 'Use drag & drop to organize the preferred alternatives for each voter.';

  const addVoter = () => {
    const newVoter = { type: 0, alters_pref: currentAlters };
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
            preference={voters[index].alters_pref}
            voterUpdate={voterUpdate}
          />
        </VoterRow>
      );
    });
    return votersArr;
  };

  const randomize = () => {
    const newVoters = voters.map(voter => ({
      ...voter,
      alters_pref: shuffleArray([...voter.alters_pref])
    }));
    setVoters(newVoters);
  }

  const clearDataHandler = () => {
    localStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    const updatedVoters = voters.map(voter => ({
      ...voter,
      alters_pref: totalAlters > voter.alters_pref.length ? voter.alters_pref.concat(ALPHABET.slice(voter.alters_pref.length, totalAlters)) :
        voter.alters_pref.slice(0, totalAlters)
    }))
    setCurrentAlters(ALPHABET.slice(0, totalAlters));
    setVoters(updatedVoters);
  }, [totalAlters]);

  useEffect(() => {
    localStorage.setItem('voters', JSON.stringify(voters));
  }, [voters])

  return (
    <VoterBoardWrapper>
      <ButtonsWrapper>
        <CreateButton onClick={addVoter}>Add Voter</CreateButton>
        <RandomizeButton onClick={randomize}>Randomize</RandomizeButton>
        <ClearDataBtn onClick={clearDataHandler}>Clear data</ClearDataBtn>
      </ButtonsWrapper>
      <TextDiv
        text={organizeAltersDescription}
        width="fit-content"
        height="fit-content"
        color='#b9b9b9'
        weight={400}
      />
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
  &: hover {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
  }
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
    &: hover {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
  }
`;

const ClearDataBtn = styled.button`
  display: flex;
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  background: #6E6D70;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  color: #DFDEDF;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight: 600;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
  }
`;

export default VotersBoard;