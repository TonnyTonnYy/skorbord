import React, { Component } from "react";
import List from "./box-score-list";

class BoxScore extends Component {
  state = {};
  render() {
    return (
      <div class="box-score-wrapper hv-c">
        <div class="box-score"></div>
      </div>
    );
  }
}

export default BoxScore;
