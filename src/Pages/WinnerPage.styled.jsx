import styled from "styled-components";

export const WinnerPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const LogsTableWrapper = styled.div`
  width: 50%;
`;

export const GeneralData = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 38em;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
`;

export const CardHeader = styled.h1`
  font-weight: 700;
  color: #b9b9b9;
`;

export const CardText = styled.h2`
font-weight: 500;
`;

export const VoterSatWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: smaller;
`;

export const ToolTipWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`