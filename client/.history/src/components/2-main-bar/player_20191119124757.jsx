import React, { Component } from "react";

class Player extends Component {
  state = {};

  handleClick = () => {
    this.props.setNum(this.props.num);
    this.props.toggleUI();
  };

  render() {
    return (
      <div className="player hv-c">
        <div
          className={`player-view player-${this.props.team} hv-c`}
          onClick={this.handleClick}
        >
          {this.props.num}
        </div>
      </div>
    );
  }
}

export default Player;
