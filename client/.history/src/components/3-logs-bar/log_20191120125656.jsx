import React, { Component } from "react";

class Log extends Component {
  state = {};
  render() {
    if ((this.props.team = "left")) {
      return (
        <div className="logs-left">
          <div className="hv-c">
            <div className="log-undo hv-c">{"↺"}</div>
          </div>
          <div className="hv-c">
            <div className="log-list-view">
              <ul className="log-list reset-default"></ul>
            </div>
          </div>
        </div>
      );
    } else if ((this.props.team = "right")) {
      return (
        <div className="logs-right">
          <div className="hv-c">
            <div className="log-list-view">
              <ul className="log-list reset-default"></ul>
            </div>
          </div>
          <div className="hv-c">
            <div className="log-undo hv-c">{"↺"}</div>
          </div>
        </div>
      );
    }
  }
}

export default Log;