import React, { Component } from "react";

class Log extends Component {
  state = {};

  render() {
    switch (this.props.input) {
      case "+1":
        return <li>{`${this.props.input} punkt #${this.props.num}`}</li>;
      case "+2":
        return <li>{`${this.props.input} punkty #${this.props.num}`}</li>;
      case "+3":
        return <li>{`${this.props.input} punkty #${this.props.num}`}</li>;
      case "A":
        return <li>{`Asysta #${this.props.num}`}</li>;
      case "Z":
        return <li>{`${this.props.input} punkt #${this.props.num}`}</li>;
      case "F":
        break;
      default:
        console.log("Error while displaying log");
        break;
    }
  }
}

export default Log;
