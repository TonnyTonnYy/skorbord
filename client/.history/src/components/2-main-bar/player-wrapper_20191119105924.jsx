import React, { Component } from "react";
import Player from "./player";

class Players extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className={`main-${this.props.position} hv-c`}>
        <div className={`main-${this.props.position}-view hv-c`}>
          {this.props.data.players.map(el => (
            <Player key={el.num} num={el.num} team={this.props.position} />
          ))}
        </div>
      </div>
    );
  }
}

export default Players;
