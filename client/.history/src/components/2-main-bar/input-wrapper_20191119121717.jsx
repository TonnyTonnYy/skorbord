import React, { Component } from "react";
import Input from "./input";

class Inputs extends Component {
  state = {
    inputTypes: ["+1", "+2", "+3", "A", "Z", "F"]
  };
  render() {
    return (
      <React.Fragment>
        <div className="input-wrapper hv-c">
          {this.state.inputTypes.map(el => (
            <Input num={this.props.num} type={el} key={el} />
          ))}
        </div>
        <div className="hv-c input-undo-box">
          <div className="input-undo hv-c">{`↩`}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Inputs;
