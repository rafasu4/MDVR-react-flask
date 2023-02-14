import { useLocation } from "react-router";
import styled from "styled-components";
import LogsTable from "../components/Table/LogsTable";

const WinnerPage = () => {
  const { state } = useLocation();

  return (
    <WinnerPageWrapper>
      <WinnerMessage>{state.winner[1]}</WinnerMessage>
      <LogsTableWrapper>
        <LogsTable logs={state.winner[0]} />
      </LogsTableWrapper>
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
