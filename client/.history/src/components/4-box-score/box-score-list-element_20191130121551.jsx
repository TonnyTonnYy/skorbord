import React, { Component } from "react";

class Element extends Component {
  state = {};
  render() {
    return (
      <li className="box-score-list-element">
        <div className="hv-c">{this.props.player.num}</div>
        <div className="hv-c">{this.props.player.name}</div>
        <div className="hv-c">{this.props.player.points}</div>
        <div className="hv-c">{this.props.player.assists}</div>
        <div className="hv-c">{this.props.player.rebounds}</div>
        <div className="hv-c">{this.props.player.fouls}</div>
      </li>
    );
  }
}

export default Element;
