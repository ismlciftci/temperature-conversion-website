import React, { Component } from "react";
//let drc=this.props.derece;

export default class Kelvin extends Component {
  render() {
    return (
      <div>
        <h2>Kelvin: {(this.props.secili + 273.15).toFixed(2)}</h2>
      </div>
    );
  }
}
