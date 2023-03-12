import styled from "styled-components";

const FOOTER_HEIGHT = 82;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 1em;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  background-color: #e3e3e3;
`;

export const Header = styled.header`
  text-align: center;
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: calc(100% - ${FOOTER_HEIGHT}px);
  flex-wrap: wrap;
  overflow-y: scroll;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  position: relative;
  height: ${FOOTER_HEIGHT}px;
  align-items: center;
  align-self: center;
  justify-content: flex-end;
`;

export const Anchor = styled.a`
  color: black;
`;