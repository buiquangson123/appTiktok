import GlobalStyles from "./components/GlobalStyles";
import Heading from "./components/Heading";
import Container from "./components/Container/ContainerNav.js";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles>
        <div className="grid">
          <Heading />
          <Container />
        </div>
      </GlobalStyles>
    </BrowserRouter>
  );
}

export default App;
