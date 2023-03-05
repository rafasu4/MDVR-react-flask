import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import ProgressBar from "../components/common/ProgressBar";
import LogsTable from "../components/Table/LogsTable";
import { exportTxtFile } from "../Utils/localUtils";

const WinnerPage = () => {
  const { state } = useLocation();
  const [voterSatisfaction, setVoterSatisfaction] = useState([]);

  const voterSatisfactionCalc = (voterPref, totalAlters, lastVote) => {
    const percentage = 100 / totalAlters;
    const hit = voterPref.indexOf(lastVote);
    return 100 - (hit * percentage);
  }

  const renderVotersSatisfaction = () => {
    const satBar = [];
    voterSatisfaction.forEach((el, i) => {
      satBar.push(
        <VoterSatWrapper key={i}>
          Voter {i + 1}
          <ProgressBar done={el} />
        </VoterSatWrapper>)
    })
    return satBar;
  }

  useEffect(() => {
    const winner = state.winner[1];
    const votersPref = state.voters_preferences;
    setVoterSatisfaction(votersPref.map((pref) => winner !== 'null' ? `${voterSatisfactionCalc(pref, pref.length, winner)}` : 0));
  }, [])

  return (
    <WinnerPageWrapper>
      <GeneralData>
        <Card>
          <CardHeader>Winner Alternative</CardHeader>
          <CardText>{state.winner[1]}</CardText>
        </Card>
        {/* <Card>
          <CardHeader>Group Satisfaction</CardHeader>
          <CardText>{state.winner[1]}</CardText>
        </Card> */}
        <Card>
          <CardHeader>Voters Satisfaction</CardHeader>
          <CardText>
            {renderVotersSatisfaction()}
          </CardText>
        </Card>
      </GeneralData>
      <LogsTableWrapper>
        <LogsTable logs={state.winner[0]} />
      </LogsTableWrapper>
      <button onClick={() => state.winner[2] ? exportTxtFile(state.winner[2]) : ''} >Export Full Logs</button>
    </WinnerPageWrapper>
  );
};

const WinnerPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const LogsTableWrapper = styled.div`
  width: 50%;
`;

const GeneralData = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 38em;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
`;

const CardHeader = styled.h1`
  font-weight: 700;
  color: #b9b9b9;
`;

const CardText = styled.h2`
font-weight: 500;
`;

const VoterSatWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: smaller;
`;
export default WinnerPage;
