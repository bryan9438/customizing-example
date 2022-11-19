import './App.css';
import './nav.css';
import './card.css';
import './footer.css';
import './index.css';
import Heading from "./components/Heading"
import Nav from "./components/Nav";
import Card from "./components/Card";
import Btn from './/components/Btn';
import ModeToogler from './components/ModeToogler'
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Nav first="Home" second="Articles" third="About" fourth="Contact"/>
        <Heading/>
        <div className="card-container">
          <Card h2="First card's h2" h3="First card's h3"/>
          <Card h2="Second card's h2" h3="Second card's h3"/>
          <Card h2="Third card's h2" h3="Third card's h3" />
        </div>
        <ModeToogler className="dark-mode, light-mode"/>

      <Footer/>
    </div>
  );
};

export default App;
