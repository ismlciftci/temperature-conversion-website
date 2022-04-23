import { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";
import Main from "./Main";

class App extends Component {
  state = { derece: 0 };
  arttir = (yderece) => {
    this.setState({ derece: Number(yderece) + 1 });
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>Hava Nasıl</h1>

            <Main secili={this.state.derece} arttir={this.arttir}></Main>
          </Row>
          <Row>
            <Col xs="4">
              <Celcius secili={this.state.derece}></Celcius>
            </Col>
            <Col xs="4">
              <Fahrenheit secili={this.state.derece}></Fahrenheit>
            </Col>
            <Col xs="4">
              <Kelvin secili={this.state.derece}></Kelvin>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
