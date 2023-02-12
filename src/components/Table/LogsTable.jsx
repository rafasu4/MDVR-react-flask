import { TableHeader, TableHeaderRow, TableStyled } from "./LogsTable.styled";
import TableHeaderCell from "./TableHeaderCell";

const LogsTable = () => {
  return (
    <TableStyled>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell key="filler1_header" width="10%" />
          <TableHeaderCell key="time" width="2%" />
          <TableHeaderCell key="voters">User</TableHeaderCell>
          <TableHeaderCell key="scores">Platform</TableHeaderCell>
          <TableHeaderCell key="possible_winners">Group</TableHeaderCell>
          <TableHeaderCell key="filler2_header" width="10%" />
        </TableHeaderRow>
      </TableHeader>
    </TableStyled>
  );
};

export default LogsTable;
