import React, { Component } from "react";
import List from "./box-score-list";

class BoxScore extends Component {
  state = {};
  render() {
    if (this.props.statsToggle === "none") {
      return (
        <div class="box-score-wrapper hv-c dp-none">
          
        </div>
      );
    } else if (this.props.statsToggle === "flex") {
        return (
            <div class="box-score-wrapper hv-c dp-flex">
                <div class="box-score">
                <List />
                <List />
                <div class="exit hv-c">X</div>
                </div>
            </div>
    }
  }
}

export default BoxScore;
