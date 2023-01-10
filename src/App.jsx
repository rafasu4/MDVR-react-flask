import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Header, Main } from "./App.styled";
import BoardContainer from "./components/common/Board/BoardContainer";
import WinnerPage from "./components/common/WinnerPage";

function App() {
  useEffect(() => {
    document.title = "MDVR";
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<BoardContainer />} />
            <Route path="/winner" element={<WinnerPage />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </Container>
  );
}

export default App;
