import React, { Component } from "react";
import Name from "./team-name";
import Score from "./team-score";
import Clock from "./clock";
import Stats from "./stats";

class Scores extends Component {
  state = {
    period: "1"
  };

  updatePeriod = () => {
    this.setState(state => state.period++);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.data.map(el => (
          <React.Fragment>
            <Name side={el.side} name={el.name} fouls={el.fouls} />
            <Score
              side={el.side}
              score={el.score}
              handleClick={this.handleClick}
            />
            <Clock
              updatePeriod={this.updatePeriod}
              resetFouls={this.props.resetFouls}
            />
            <Stats
              period={this.state.period}
              toggleStats={this.props.toggleStats}
            />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}
export default Scores;
