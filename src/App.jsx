import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Header, Main } from "./App.styled";
import BoardPage from "./Pages/BoardPage";
import WinnerPage from "./Pages/WinnerPage";

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
            <Route exact path="/" element={<BoardPage />} />
            <Route path="/winner" element={<WinnerPage />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </Container>
  );
}

export default App;
