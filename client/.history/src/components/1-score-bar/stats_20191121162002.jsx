import React, { Component } from "react";

class Stats extends Component {
  state = {};
  render() {
    return (
      <div className="stats wrapper hv-c">
        <div className="stats-view hv-c">{this.props.period}</div>
      </div>
    );
  }
}

export default Stats;
