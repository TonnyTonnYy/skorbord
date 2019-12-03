import React, { Component } from "react";

class Score extends Component {
  state = {};
  render() {
    if (this.props.side === "left") {
      return (
        <div className="score-left wrapper hv-c">
          <div className="score-left-view hv-c">{this.props.score}</div>
        </div>
      );
    } else if (this.props.side === "right") {
      return (
        <div className="score-right wrapper hv-c">
          <div className="score-right-view hv-c">{this.props.score}</div>
        </div>
      );
    }
  }
}

export default Score;
