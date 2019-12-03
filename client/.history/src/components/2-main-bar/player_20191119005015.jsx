import React, { Component } from "react";

class Player extends Component {
  state = {};
  render() {
    return (
      <div class="player hv-c">
        <div class="player-view player-left hv-c">{this.props.num}</div>
      </div>
    );
  }
}

export default Player;
