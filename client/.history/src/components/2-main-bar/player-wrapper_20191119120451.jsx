import React, { Component } from "react";
import Player from "./player";
import Inputs from "./input-wrapper";

class Players extends Component {
  state = {
    uiToggle: "players"
  };

  toggleUI = () => {
    if (this.state.uiToggle === "players") {
      this.setState({ uiToggle: "inputs" });
    } else if (this.state.uiToggle === "inputs") {
      this.setState({ uiToggle: "players" });
    }
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
            <Inputs />
          </div>
        </div>
      );
    }
  }
}

export default Players;
