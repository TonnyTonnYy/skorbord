import React, { Component } from "react";

class Scores extends Component {
  state = {};
  render() {
    return <React.Fragment>{this.props.data.map(el => {
        if ((el.side = "left")) {
          return (
            
          );
        } else if ((el.side = "right")) {
          return (
            
          );
        }
      })}</React.Fragment>;
  }
}
export default Scores;
