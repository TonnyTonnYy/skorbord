import React, { Component } from "react";

class Name extends Component {
  state = {};
  render() {
    if ((this.props.side = "left")) {
      return (
        <div class="score-left wrapper hv-c">
          <div class="score-left-view hv-c">{this.props.score}</div>
        </div>
      );
    } else if ((this.props.side = "right")) {
      return (
        <div class="score-right wrapper hv-c">
          <div class="score-right-view hv-c">{this.props.score}</div>
        </div>
      );
    }
  }
}

export default Name;
