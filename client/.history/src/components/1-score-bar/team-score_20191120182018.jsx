import React, { Component } from "react";

class Score extends Component {
  state = {};
  render() {
    if ((this.props.side = "left")) {
    } else if ((this.props.side = "right")) {
    }
    return (
      <div class="score-left wrapper hv-c">
        {/* right-left into class name */}
        <div class="score-left-view hv-c">21</div>
        {/* props */}
      </div>
    );
  }
}

export default Score;