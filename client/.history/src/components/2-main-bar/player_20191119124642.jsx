import React, { Component } from "react";

class Player extends Component {
  state = {};

  setNum = () => {
    this.props.onHeaderClick(this.props.value);
  };
  setNum = {};

  render() {
    return (
      <div className="player hv-c">
        <div
          className={`player-view player-${this.props.team} hv-c`}
          onClick={() => this.props.onClick(this.props.num)}
        >
          {this.props.num}
        </div>
      </div>
    );
  }
}

export default Player;
