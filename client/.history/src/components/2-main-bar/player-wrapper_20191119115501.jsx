import React, { Component } from "react";
import ReactDOM from "react-dom";
import Player from "./player";
import Inputs from "./input-wrapper";
import Input from "./input";

class Players extends Component {
  state = {
    uiToggle: "players"
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
                onClick={this.renderInput}
              />
            ))}
          </div>
        </div>
      );
    } else if (this.state.uiToggle === "inputs") {
      return <Inputs />;
    }
  }
}

export default Players;
