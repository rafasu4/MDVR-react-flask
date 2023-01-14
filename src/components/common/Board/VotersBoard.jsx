import { useEffect, useState } from "react";
import styled from "styled-components";
import PlusIcon from "../../assets/PlusIcon";
import Voter from "../../Voter";

const VotersBoard = (props) => {
  const { totalAlters } = props;
  const [voters, setVoters] = useState([{ type: 0, alters_pref: [] }]);

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
    voters.map((v, index) => {
      votersArr.push(
        <VoterRow key={index}>
          user num {index + 1}:
          <Voter
            id={index}
            type={v.type}
            preference={v.alters_pref}
            totalAlters={totalAlters}
            voterUpdate={voterUpdate}
          />
        </VoterRow>
      );
    });
    return votersArr;
  };

  useEffect(() => {
    props.updateVoters(voters);
  }, []);

  useEffect(() => {
    console.log("render");
  }, [totalAlters]);

  return (
    <VoterBoardWrapper>
      <ButtonWrapper onClick={addVoter}>
        <PlusIcon />
        <CreateButton>add user</CreateButton>
      </ButtonWrapper>
      <VoterBoardContainer>{renderVoters()}</VoterBoardContainer>
    </VoterBoardWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

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
  border: transparent;
  background: transparent;
  color: #ffff;
  font-family: "Open sans";
  font-weight: 800;
  height: 25px;
  text-transform: uppercase;
  cursor: inherited;
`;

export default VotersBoard;
