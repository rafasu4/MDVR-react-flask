import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import LogsTable from "../components/Table/LogsTable";
import { exportTxtFile } from "../Utils/localUtils";

const WinnerPage = () => {
  const { state } = useLocation();

  return (
    <WinnerPageWrapper>
      <WinnerMessage>{state.winner[1]}</WinnerMessage>
      <LogsTableWrapper>
        <LogsTable logs={state.winner[0]} />
      </LogsTableWrapper>
      <button onClick={() => state.winner[2]? exportTxtFile(state.winner[2]) : ''} >Export Full Logs</button>
    </WinnerPageWrapper>
  );
};

const WinnerPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogsTableWrapper = styled.div`
  width: 50%;
`;

const WinnerMessage = styled.div`
  width: 250px;
  height: 250px;
  background: wheat;
  font-size: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
  color: green;
`;
export default WinnerPage;
