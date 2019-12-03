import React, { Component } from "react";

class Player extends Component {
  state = {};

  setNum = () => {
    this.props.setNum(this.props.num);
  };

  render() {
    return (
      <div className="player hv-c">
        <div
          className={`player-view player-${this.props.team} hv-c`}
          onClick={this.setNum}
        >
          {this.props.num}
        </div>
      </div>
    );
  }
}

export default Player;
