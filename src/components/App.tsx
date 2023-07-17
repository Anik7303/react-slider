import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Slider from "./Slider";

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
      <Slider />
    </Main>
  );
}

export default App;
