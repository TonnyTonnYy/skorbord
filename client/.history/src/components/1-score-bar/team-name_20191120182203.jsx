import React, { Component } from "react";

class Name extends Component {
  state = {};
  render() {
    if ((this.props.side = "left")) {
      return (
        <div class="name-left wrapper h-c">
          <span class="foul-limit"></span>
          <div class="name-left-view hv-c">Trampolina</div>
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
