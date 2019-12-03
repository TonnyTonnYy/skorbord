import React, { Component } from "react";

class Input extends Component {
  state = {};
  render() {
    return (
      <div className="input hv-c">
        <div
          className="input-view hv-c"
          onClick={() =>
            this.props.handleInput(this.props.team, this.props.num, "+2")
          }
        >
          {this.props.type}
        </div>
      </div>
    );
  }
}

export default Input;
