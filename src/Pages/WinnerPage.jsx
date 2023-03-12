import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ProgressBar from "../components/common/ProgressBar";
import LogsTable from "../components/Table/LogsTable";
import ToolTip from "../components/ToolTip";
import { exportTxtFile } from "../Utils/localUtils";
import { Card, CardHeader, CardText, GeneralData, LogsTableWrapper, ToolTipWrapper, VoterSatWrapper, WinnerPageWrapper } from "./WinnerPage.styled";

const WinnerPage = () => {
  const { state } = useLocation();
  const [voterSatisfaction, setVoterSatisfaction] = useState([]);
  const [groupSatisfaction, setGroupSatisfaction] = useState();
  const tableDescription = 'The table below presents action taken in each round. Note that the voter who was selected to change his vote, marked in red.';

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
          <ProgressBar done={el.toFixed(2)} />
        </VoterSatWrapper>)
    })
    return satBar;
  }

  useEffect(() => {
    const winner = state.winner[1];
    const votersPref = state.voters_preferences;
    setVoterSatisfaction(votersPref.map((pref) => winner !== 'null' ? voterSatisfactionCalc(pref, pref.length, winner) : 0));
  }, [])

  useEffect(() => {
    const sum = voterSatisfaction.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    setGroupSatisfaction((sum / voterSatisfaction.length).toFixed(2));
  }, [voterSatisfaction])


  return (
    <WinnerPageWrapper>
      <GeneralData>
        <Card>
          <CardHeader>Winner</CardHeader>
          <CardText>{state.winner[1]}</CardText>
        </Card>
        <Card>
          <CardHeader>Group Satisfaction</CardHeader>
          <CardText>
            <ProgressBar done={groupSatisfaction} />
          </CardText>
        </Card>
        <Card>
          <CardHeader>Voter Satisfaction</CardHeader>
          <CardText>
            {renderVotersSatisfaction()}
          </CardText>
        </Card>
      </GeneralData>
      <LogsTableWrapper>
        <ToolTipWrapper>
          <ToolTip
            info={tableDescription} />
        </ToolTipWrapper>
        <LogsTable logs={state.winner[0]} />
      </LogsTableWrapper>
      <button onClick={() => state.winner[2] ? exportTxtFile(state.winner[2]) : ''} >Export Full Logs</button>
    </WinnerPageWrapper>
  );
};
export default WinnerPage;
