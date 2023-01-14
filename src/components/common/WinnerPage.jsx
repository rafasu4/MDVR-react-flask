import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const WinnerPage = () => {
  const { state } = useLocation();

  return <WinnerMessage>{state.winner}</WinnerMessage>;
};

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
