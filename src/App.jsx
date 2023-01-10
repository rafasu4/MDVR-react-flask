import { Container, Header, Main } from "./App.styled";
import BoardContainer from "./components/common/Board/BoardContainer";

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <BoardContainer />
      </Main>
    </Container>
  );
}

export default App;
