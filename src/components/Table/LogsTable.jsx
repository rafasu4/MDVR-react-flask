import { TableHeader, TableHeaderRow, TableStyled } from "./LogsTable.styled";
import TableHeaderCell from "./TableHeaderCell";

const LogsTable = () => {
  return (
    <TableStyled>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell key="filler1_header" width="10%" />
          <TableHeaderCell key="time">Round</TableHeaderCell>
          <TableHeaderCell key="voters">Voters Ballot</TableHeaderCell>
          <TableHeaderCell key="scores">Scores</TableHeaderCell>
          <TableHeaderCell key="possible_winners">Possible Winners</TableHeaderCell>
          <TableHeaderCell key="filler2_header" width="10%" />
        </TableHeaderRow>
      </TableHeader>
    </TableStyled>
  );
};

export default LogsTable;
