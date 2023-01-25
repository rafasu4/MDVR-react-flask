import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { handleSubmit } from "../../../Utils/apiUtils";
import TextDiv from "../TextDiv";
import {
  TitleStyle,
  HeaderStyle,
  DescriptionStyle,
  VotersBoardContainer,
  HeadersWrapper,
} from "./BoardContainer.styled";
import VotersBoard from "./VotersBoard";

const BoardContainer = () => {
  const title = "Consensus Under Deadline";
  const header = "MDVR - Algorithm for group making decision";
  const description =
    "Enter the required fields in order to run the algorithm.";
  const [totalAlters, setTotalAlters] = useState(1);
  const [rounds, setRounds] = useState(0);
  const [voters, setVoters] = useState([{}]);
  const navigate = useNavigate();

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
  const updateVoters = (voters) => {
    setVoters(voters);
  };

  const totalAltersChangeHandler = (e) => {
    setTotalAlters(e.target.value);
  };

  const totalRoundsChangeHandler = (e) => {
    setRounds(e.target.value);
  };

  const inputValidation = (body) => {
    let missingAlterFlag = false;
    let duplicateAlterFlag = false;
    // each user's alternatives are filled
    let i = 0;
    for(i ; i< body.voters_preferences.length; i++){
      if(body.voters_preferences[i] < totalAlters){
        missingAlterFlag = true;
        break;
      }
      if(Array.from(new Set(body.voters_preferences[i])) != body.voters_preferences[i].length){
        duplicateAlterFlag = true;
        break;
      }
    }
    if(missingAlterFlag){
      alert(`missing user ${i + 1} preference`)
      return missingAlterFlag;
    }
    if(duplicateAlterFlag){
      alert(`each preference at user ${i + 1} needs to be unique!`)
      return duplicateAlterFlag;
    }
  }

  const submitHandler = () => {
    const totalVoters = voters.length;
    const alters = alphabet.slice(0, totalAlters);
    const body = {
      voters: [...Array(totalVoters).keys()].map((i) => i + 1),
      voters_type: voters.map((v) => parseInt(v.type)),
      alternatives: alters,
      voters_preferences: voters.map((v) => v.alters_pref),
      remaining_rounds: parseInt(rounds),
    };
    console.log(body);
    if(inputValidation(body)){
      return;
    }
    handleSubmit(body).then((res) => {
      console.log(res);
      navigate("/winner", { state: { winner: res.message } });
    });
  };

  return (
    <VotersBoardContainer>
      <HeadersWrapper>
        <TextDiv
          text={title}
          width={TitleStyle.width}
          height={TitleStyle.height}
          weight={TitleStyle.fontWeight}
          fontSize={TitleStyle.fontSize}
        />
        <TextDiv
          text={header}
          width={HeaderStyle.width}
          height={HeaderStyle.height}
          weight={HeaderStyle.fontWeight}
          fontSize={HeaderStyle.fontSize}
        />
        <TextDiv
          text={description}
          width={DescriptionStyle.width}
          height={DescriptionStyle.height}
          weight={DescriptionStyle.fontWeight}
          fontSize={DescriptionStyle.fontSize}
          margin={DescriptionStyle.margin}
        />
      </HeadersWrapper>
      <GeneralData>
        <OptionsWrapper>
          <TextDiv
            text="Number of alternatives"
            width="fit-content"
            height="fit-content"
          />
          <CountInput
            value={totalAlters}
            min={1}
            onChange={totalAltersChangeHandler}
          />
        </OptionsWrapper>
        <OptionsWrapper>
          <TextDiv
            text="Number of rounds"
            width="fit-content"
            height="fit-content"
          />
          <CountInput
            value={rounds}
            min={1}
            onChange={totalRoundsChangeHandler}
          />
        </OptionsWrapper>
      </GeneralData>
      <VotersBoard totalAlters={totalAlters} updateVoters={updateVoters} />
      <SubmitBtn onClick={submitHandler}>submit</SubmitBtn>
    </VotersBoardContainer>
  );
};

const SubmitBtn = styled.button`
  width: 145px;
  height: 40px;
  text-transform: uppercase;
  background: #0dcbcb;
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: "Open Sans";
  color: #ffff;
  font-weight: 700;
  margin-top: 4px;
`;

const GeneralData = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const CountInput = styled.input.attrs({ type: "number" })`
  width: 30px;
`;

export default BoardContainer;
