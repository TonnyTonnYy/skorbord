import React, { Component } from "react";
import Name from "./team-name";
import Score from "./team-score";
import Clock from "./clock";

class Scores extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.data.map(el => (
          <React.Fragment>
            <Name side={el.side} name={el.name} />
            <Score side={el.side} score={el.score} />
            <Clock />
            <div className="stats wrapper hv-c">
              <div className="stats-view hv-c">I</div>
            </div>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}
export default Scores;
