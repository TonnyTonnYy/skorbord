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

  toggleStats = () => {
    if (this.state.statsToggle === "none") {
      this.setState({ statsToggle: "flex" });
    } else if (this.state.statsToggle === "flex") {
      this.setState({ statsToggle: "none" });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.props.data.map(el => (
          <React.Fragment>
            <Name side={el.side} name={el.name} />
            <Score side={el.side} score={el.score} />
            <Clock
              updatePeriod={this.updatePeriod}
              toggleClock={this.props.toggleClock}
            />
            <Stats
              period={this.state.period}
              updatePeriod={this.updatePeriod}
              toggleStats={this.toggleStats}
              statsToggle={this.state.statsToggle}
            />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}
export default Scores;
