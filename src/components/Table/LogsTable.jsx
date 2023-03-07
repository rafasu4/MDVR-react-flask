import { useEffect, useState } from "react";
import {
  ChosenVoterBallot,
  TableBody,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableStyled,
  VoterBallot,
  VotersBallotWrapper,
} from "./LogsTable.styled";
import TableHeaderCell from "./TableHeaderCell";
import TableRowCell from "./TableRowCell";

const LogsTable = (props) => {
  const { logs } = props;
  const [data, setData] = useState([]);

  const parseLogsData = () => {
    const ans = [];
    const charToRemove = '"';
    logs.forEach((log) => {
      const currentLogData = {
        round: JSON.stringify(log.round),
        voters_ballot: log.voters_ballot,
        scores: log.scores,
        possible_winners: JSON.stringify(log.possible_winners).replace(new RegExp(charToRemove, 'g'), ' '),
        changed_vote: JSON.stringify(log.changed_vote)
      }
      console.log(currentLogData.scores)
      ans.push(currentLogData);
    })
    return ans;
  };

  const renderVotersBallots = (ballots, changedBallot) => {
    const jsonChangedBallot = JSON.parse(changedBallot);
    const changed_voter = Object.keys(jsonChangedBallot)[0];
    const voters = Object.keys(ballots);
    const votes = Object.values(ballots);
    let ans = []
    let iteration = 0;
    for (const bl in voters) {
      changed_voter && bl === changed_voter ? ans.push(<ChosenVoterBallot key={iteration}>Voter {iteration + 1}: {votes[iteration]}</ChosenVoterBallot>) : ans.push(<VoterBallot key={iteration}>Voter {iteration + 1}: {votes[iteration]}</VoterBallot>);
      iteration++;
    }
    return ans;
  }

  const renderScores = (scores) => {
    const votes = Object.keys(scores);
    console.log(votes)
    const voteScores = Object.values(scores);
    let ans = [];
    votes.forEach((el, i) => {
      ans.push(<VoterBallot key={i}>{el}: {voteScores[i]}</VoterBallot>)
    })
    return ans;
  };

  const renderBody = () => {
    return (
      data && data.map(({ round, voters_ballot, scores, possible_winners, changed_vote }, index) => {
        return (
          <TableRow key={`row ${index}`}>
            <TableRowCell key={`${index}-filler1`} width="10%" noBorders={true} />
            <TableRowCell key={`${index}-round`} textColor="white">
              {round}
            </TableRowCell>
            <TableRowCell key={`${index}-ballots`} textColor="white">
              <VotersBallotWrapper>
                {renderVotersBallots(voters_ballot, changed_vote)}
              </VotersBallotWrapper>
            </TableRowCell>
            <TableRowCell
              key={`${index}-scores`}
              textColor="white"
            >
              <VotersBallotWrapper>
                {renderScores(scores)}
              </VotersBallotWrapper>
            </TableRowCell>
            <TableRowCell key={`${index}-winners`} textColor="white" weight={400}>
              {possible_winners}
            </TableRowCell>
            <TableRowCell key={`${index}-filler2`} width="10%" noBorders={true} />
          </TableRow>
        );
      })
    )
  }

  useEffect(() => {
    if (logs) {
      setData(parseLogsData(logs));
    }
  }, [logs])

  return (
    <TableStyled>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell key="filler1_header" width="10%" />
          <TableHeaderCell key="time">Remaining Rounds</TableHeaderCell>
          <TableHeaderCell key="voters">
            Voters Ballot
          </TableHeaderCell>
          <TableHeaderCell key="scores">Scores</TableHeaderCell>
          <TableHeaderCell key="possible_winners">
            Possible Winners
          </TableHeaderCell>
          <TableHeaderCell key="filler2_header" width="10%" />
        </TableHeaderRow>
      </TableHeader>
      <TableBody>{renderBody()}</TableBody>
    </TableStyled>
  );
};

export default LogsTable;
