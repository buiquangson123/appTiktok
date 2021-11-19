import GlobalStyles from './components/GlobalStyles'
import Heading from './components/Heading'
import Container from './components/Container'
import Footer from './components/Footer'

function App() {
  
  return (
    <GlobalStyles>
      <div className="grid">
        <Heading />
        <Container />
        {/* <Footer /> */}
      </div>
    </GlobalStyles>
  );
}

export default App;
