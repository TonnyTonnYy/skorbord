import React, { Component } from "react";
import Name from "./team-name";
import Score from "./team-score";
class Scores extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.data.map(el => (
          <React.Fragment>
            <Name side={el.side} name={el.name} />
            <Score side={el.side} score={el.score} />
            <div class="time wrapper hv-c">
              <div class="time-view hv-c">06:00</div>
            </div>
            <div class="stats wrapper hv-c">
              <div class="stats-view hv-c">I</div>
            </div>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}
export default Scores;
