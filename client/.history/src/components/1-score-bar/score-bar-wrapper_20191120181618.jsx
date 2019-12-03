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
            <Score />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}
export default Scores;
