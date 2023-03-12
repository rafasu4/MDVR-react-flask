import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Anchor, Container, Footer, Header, Main } from "./App.styled";
import BoardPage from "./Pages/BoardPage";
import WinnerPage from "./Pages/WinnerPage";

function App() {
  const footerDescription =  'Marina Bannikova, Lihi Dery, Svetlana Obraztsova, Zinovi Rabinovich, Jeffery S. Rosenschein. 2021. Reaching Consensus Under a Deadline. Autonomous Agents and Multi-Agent Systems Journal. 35(9).';
  const article = 'https://doi.org/10.1007/s10458-020-09490-7 ';
  useEffect(() => {
    document.title = "MDVR";
  }, []);

  return (
    <Container>
      <Main>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<BoardPage />} />
            <Route path="/winner" element={<WinnerPage />} />
          </Routes>
        </BrowserRouter>
      </Main>
      <Footer>
        {footerDescription} <Anchor href={article}>Consensus Under Deadline</Anchor>
       </Footer>
    </Container>
  );
}

export default App;
