import React, { Component } from "react";
import List from "./box-score-list";

class BoxScore extends Component {
  state = {};
  render() {
    if (this.props.statsToggle === "none") {
      return (
        <div class="box-score-wrapper hv-c">
          <div class="box-score">
            <List />
            <List />
            <div class="exit hv-c">X</div>
          </div>
        </div>
      );
    } else if (this.props.statsToggle === "flex") {
    }
  }
}

export default BoxScore;
