import React, { Component } from "react";

class Input extends Component {
  state = {};

  handleClick = () => {
    this.props.handleInput(
        this.props.team,
        this.props.num,
        this.props.type
      )
  };

  render() {
    return (
      <div className="input hv-c">
        <div
          className="input-view hv-c"
          onClick={() =>
            
          }
        >
          {this.props.type}
        </div>
      </div>
    );
  }
}

export default Input;
