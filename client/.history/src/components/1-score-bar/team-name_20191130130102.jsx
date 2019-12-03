import React, { Component } from "react";

class Name extends Component {
  state = {};
  render() {
    if (this.props.side === "left") {
      return (
        <div className="name-left wrapper h-c">
          (if(this.props.fouls >= 4) <span className="foul-limit"></span>})
          <div className="name-left-view hv-c">{this.props.name}</div>
        </div>
      );
    } else if (this.props.side === "right") {
      return (
        <div className="name-right wrapper h-c">
          <div className="name-right-view hv-c">{this.props.name}</div>
          <span className="foul-limit"></span>
        </div>
      );
    }
  }
}

export default Name;
