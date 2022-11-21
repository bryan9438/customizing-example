import './App.css';
import './nav.css';
import './card.css';
import './footer.css';
import './index.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import Heading from "./components/Heading"
import Nav from "./components/Nav";
import Card from "./components/Card";
import Promo from "./components/Promo";
import ModeToggler from './components/ModeToggler'
import Footer from "./components/Footer";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function App() {
  const date = new Date ()

  return (
    <div className="App">
      <Nav first="Home" second="Articles" third="About" fourth="Contact"/>
        <Heading/>
        <div className="card-container">
          <Container>
            <Row>
              <Col><Card h2="First card's h2" h3="First card's h3"/></Col>
              <Col><Card h2="Second card's h2" h3="Second card's h3"/></Col>
              <Col><Card h2="Third card's h2" h3="Third card's h3" /></Col>
            </Row>
          </Container>
        </div>
        <Promo message={date.toLocaleTimeString()}/>
        <Button variant="primary">This is a bootstrap button</Button>{' '}
        <Button variant="outline-primary">Primary</Button>{' '}

        <ModeToggler className="dark-mode, light-mode"/>

      <Footer/>
    </div>
  );
};

export default App;
