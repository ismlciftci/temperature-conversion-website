import React, { Component } from "react";

class Fahrenheit extends Component {
  render() {
    return (
      <div>
        <h2>Fahrenheit: {(this.props.secili * 1.8 + 32).toFixed(2)}</h2>
      </div>
    );
  }
}

export default Fahrenheit;
