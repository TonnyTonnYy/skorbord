import React, { Component } from "react";

class Input extends Component {
  state = {};

  handleClick = () => {
    this.props.updateScore(this.props.team, this.props.type, "+");
    this.props.updatePlayer(this.props.team, this.props.type, this.props.num"+");
    this.props.updateHistory();
    this.props.toggleUI();
  };

  render() {
    return (
      <div className="input hv-c">
        <div className="input-view hv-c" onClick={this.handleClick}>
          {this.props.type}
        </div>
      </div>
    );
  }
}

export default Input;
