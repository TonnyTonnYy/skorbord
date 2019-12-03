import React, { Component } from "react";

class Log extends Component {
  state = {};

  render() {
    switch (this.props.input) {
      case "+1":
        return (
          <li>{`${this.props.input} punkt #${this.props.num}`}+1 punkt #31</li>
        );
      case "+2":
        break;
      case "+3":
        break;
      case "A":
        break;
      case "Z":
        break;
      case "F":
        break;
      default:
        console.log("Error while displaying log");
        break;
    }
  }
}

export default Log;
