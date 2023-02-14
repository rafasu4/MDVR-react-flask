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

  const renderBody = () => {
    for (let index = 0; index < logs.length; index++) {
      const log = logs[index];
      const round = JSON.stringify(log.round);
      const voters_ballot = JSON.stringify(log.voters_ballot);
      const scores = JSON.stringify(log.scores);
      const possible_winners = JSON.stringify(log.possible_winners);
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
    }
  };

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
