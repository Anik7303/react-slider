import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const Main = styled.main`
  width: 100%;
  height: 100%;
  background: yellowgreen;
  padding: 1rem;
`;

function App() {
  return (
    <Main>
      <GlobalStyles />
      <h1>React Slider by Ustariz Enzo</h1>
    </Main>
  );
}

export default App;
