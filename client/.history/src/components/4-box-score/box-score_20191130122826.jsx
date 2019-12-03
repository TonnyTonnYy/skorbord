import React, { Component } from "react";
import List from "./box-score-list";

class BoxScore extends Component {
  state = {};
  render() {
    if (this.props.statsToggle === "none") {
      return <div className="dp-none"></div>;
    } else if (this.props.statsToggle === "flex") {
      return (
        <div className="box-score-wrapper hv-c dp-flex">
          <div className="box-score">
            {this.props.data.map(el => {
              return <List players={el} />;
            })}
            <div className="exit hv-c">X</div>
          </div>
        </div>
      );
    }
  }
}

export default BoxScore;
