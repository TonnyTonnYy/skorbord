import React, { Component } from "react";
import Input from "./input";

class Inputs extends Component {
  state = {
    inputTypes: ["+1", "+2", "+3", "A", "Z", "F"]
  };
  render() {
    return (
      <React.Fragment>
        <div class="input-wrapper hv-c">
          {this.state.inputTypes.map(el => (
            <Input player={this.props.num} />
          ))}
        </div>
        <div class="hv-c input-undo-box">
          <div class="input-undo hv-c">&#8617</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Inputs;
