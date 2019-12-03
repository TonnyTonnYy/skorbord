import React, { Component } from "react";
import Player from "./player";

class Players extends Component {
  state = {};

  renderInput(team) {}

  render() {
    console.log(this.props);
    return (
      <div className={`main-${this.props.position} hv-c`}>
        <div className={`main-${this.props.position}-view hv-c`}>
          {this.props.data.players.map(el => {
            return (
              <Player key={el.num} num={el.num} team={this.props.position} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Players;
