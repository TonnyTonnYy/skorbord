import React, { Component } from "react";
import Player from "./player";

class Players extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className={`main-${this.props.position} hv-c`}>
        <div className={`main-${this.props.position}-view hv-c`}>
          {this.props.data.players.array.forEach(el => {
            <Player />
          });}
        </div>
      </div>
    );
  }
}

export default Players;
