import React, { Component } from "react";
import Player from "./player";
import Inputs from "./input-wrapper";

class Players extends Component {
  state = {
    uiToggle: "players",
    left: 0, //number of clicked player on the left
    right: 0, //number of clicked player on the right
    inputTypes: ["+1", "+2", "+3", "A", "Z", "F"]
  };

  toggleUI = (team, num) => {
    if (this.state.uiToggle === "players") {
      this.setState({ uiToggle: "inputs" });
    } else if (this.state.uiToggle === "inputs") {
      this.setState({ uiToggle: "players" });
    }
    this.setState({ [`${team}`]: num });
  };

  render() {
    if (this.state.uiToggle === "players") {
      return (
        <div className={`main-${this.props.position} hv-c`}>
          <div className={`main-${this.props.position}-view hv-c`}>
            {this.props.data.players.map(el => (
              <Player
                key={el.num}
                num={el.num}
                team={this.props.position}
                onClick={this.toggleUI}
              />
            ))}
          </div>
        </div>
      );
    } else if (this.state.uiToggle === "inputs") {
      return (
        <div className={`main-${this.props.position} hv-c`}>
          <div className={`main-${this.props.position}-view hv-c`}>
            <div className="input-wrapper hv-c">
              {this.state.inputTypes.map(el => (
                <Input
                  num={this.props.num}
                  team={this.props.team}
                  type={el}
                  key={el}
                />
              ))}
            </div>
            <div className="hv-c input-undo-box">
              <div className="input-undo hv-c">{`↩`}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Players;
