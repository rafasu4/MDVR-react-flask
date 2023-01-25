import { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const WinnerPage = () => {
  const { state } = useLocation();

  return (
  <WinnerMessage>
    <p>The chosen ballot:</p>
    {state.winner}
  </WinnerMessage>);
};

const WinnerMessage = styled.div`
  width: fit-content;
  height: 250px;
  background: wheat;
  font-size: 50px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: green;
`;
export default WinnerPage;
