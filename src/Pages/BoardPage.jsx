import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { handleSubmit } from "../Utils/apiUtils";
import CountInput from "../components/common/CountInput";
import TextDiv from "../components/common/TextDiv";
import {
  TitleStyle,
  HeaderStyle,
  HeadersWrapper,
} from "./BoardPage.styled";
import VotersBoard from "../components/Board/VotersBoard";
import { ALPHABET } from "../assets/consts";

const BoardContainer = () => {
  const title = "Consensus Under Deadline";
  const header = "Algorithm for reaching a group consensus under a deadline.";
  const altersInfo =
    "Alternatives represent the choices offered to the voters.";
  const roundInfo = "Total rounds for the voters to come to agreement.";
  const totalAltersFromLocalStorage = localStorage.getItem('totalAlters') || 1;
  const totalRoundsFromLocalStorage = localStorage.getItem('totalRounds') || 0;
  const [totalAlters, setTotalAlters] = useState(totalAltersFromLocalStorage);
  const [rounds, setRounds] = useState(totalRoundsFromLocalStorage);
  const [voters, setVoters] = useState([{}]);
  const navigate = useNavigate();

  const updateVoters = (voters) => {
    setVoters(voters);
  };

  const totalAltersChangeHandler = (e) => {
    localStorage.setItem('totalAlters', e.target.value);
    setTotalAlters(e.target.value);
  };

  const totalRoundsChangeHandler = (e) => {
    localStorage.setItem('totalRounds', e.target.value);
    setRounds(e.target.value);
  };

  const submitHandler = () => {
    const totalVoters = voters.length;
    const alters = ALPHABET.slice(0, totalAlters);
    const body = {
      voters: [...Array(totalVoters).keys()].map((i) => i + 1),
      voters_type: voters.map((v) => parseInt(v.type)),
      alternatives: alters,
      voters_preferences: voters.map((v) => v.alters_pref),
      remaining_rounds: parseInt(rounds),
    };
    handleSubmit(body).then((res) => {
      console.log(res)
      navigate("/winner", { state: { winner: res.message, voters_preferences: body.voters_preferences } });
    });
  };

  return (
    <VotersBoardWrapper>
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
      </HeadersWrapper>
      <GeneralData>
        <OptionsWrapper>
          <TextDiv
            text="Number of alternatives"
            width="fit-content"
            height="fit-content"
            color='#f0a500'
            weight={700}
          />
          <CountInput
            value={totalAlters}
            min={1}
            onChange={totalAltersChangeHandler}
            info={altersInfo}
          />
        </OptionsWrapper>
        <OptionsWrapper>
          <TextDiv
            text="Number of rounds"
            width="fit-content"
            height="fit-content"
            color='#f0a500'
            weight={700}
          />
          <CountInput
            value={rounds}
            min={1}
            onChange={totalRoundsChangeHandler}
            info={roundInfo}
          />
        </OptionsWrapper>
      </GeneralData>
      <VotersBoard totalAlters={totalAlters} updateVoters={updateVoters} />
      <SubmitBtn onClick={submitHandler}>Run The Algorithm</SubmitBtn>
    </VotersBoardWrapper>
  );
};

const VotersBoardWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  max-width: 38em;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
`;

const SubmitBtn = styled.button`
  height: 40px;
  text-transform: uppercase;
  text-transform: uppercase;
  background: #bd8200;
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: "Open Sans";
  color: #ffff;
  font-weight: 700;
  margin-top: 4px;
  cursor: pointer;
`;

const GeneralData = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
  width: 100%;
`;

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export default BoardContainer;
