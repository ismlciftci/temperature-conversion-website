import React, { Component } from "react";
import { Button } from "reactstrap";

export default class Main extends Component {
  render() {
    return (
      <div>
        <h5>
          <div>
            <h4>Şu an sıcaklık: {this.props.secili} decere.</h4>
            <Button
              color="danger"
              onClick={() => this.props.arttir(this.props.secili)}
            >
              Sıcaklık Arttır
            </Button>
          </div>
        </h5>
        <h5>Üç birimde sıcaklık ölçümü</h5>
      </div>
    );
  }
}
