import './App.css';
import './nav.css';
import Heading from "./components/Heading"
import Nav from "./components/Nav";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Heading greet="Good Morning" firstName="Bryan" lastName="Wong"/>
      <Intro1/>
      <Intro2/>
      <Intro3/>
      <Footer/>
    </div>
  );
};

export default App;
