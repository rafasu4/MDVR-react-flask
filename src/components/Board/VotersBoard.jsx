import { useEffect, useState } from "react";
import styled from "styled-components";
import Voter from "../Voter";

const VotersBoard = (props) => {
  const { totalAlters, updateVoters } = props;
  const [voters, setVoters] = useState([{ type: "0", alters_pref: ["A"] }]);

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
    updateVoters(voters);
  }, []);

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