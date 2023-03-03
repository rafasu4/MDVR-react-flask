import { useEffect, useState } from "react";
import {
  TableBody,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableStyled,
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
        voters_ballot: JSON.stringify(log.voters_ballot).replace(new RegExp(charToRemove, 'g'), ' '),
        scores: JSON.stringify(log.scores).replace(new RegExp(charToRemove, 'g'), ' '),
        possible_winners: JSON.stringify(log.possible_winners).replace(new RegExp(charToRemove, 'g'), ' '),
      }
      ans.push(currentLogData);
    })
    return ans;
  };

  const renderBody = () => {
    return (
      data && data.map(({ round, voters_ballot, scores, possible_winners }, index) => {
        return (
          <TableRow key={`row ${index}`}>
            <TableRowCell key={`${index}-filler1`} width="10%" noBorders={true} />
            <TableRowCell key={`${index}-round`} textColor="white">
              {round}
            </TableRowCell>
            <TableRowCell key={`${index}-ballots`} textColor="white">
              {voters_ballot}
            </TableRowCell>
            <TableRowCell
              key={`${index}-scores`}
              padding="0 0 0 20px"
              textColor="white"
            >
              {scores}
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
          <TableHeaderCell key="time">Round</TableHeaderCell>
          <TableHeaderCell key="voters">Voters Ballot</TableHeaderCell>
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
