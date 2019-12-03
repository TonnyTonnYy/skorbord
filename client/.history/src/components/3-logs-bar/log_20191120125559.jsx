import React, { Component } from "react";

class Log extends Component {
  state = {};
  render() {
    if ((this.props.team = "left")) {
    } else if ((this.props.team = "right")) {
      return (
        <div class="logs-right">
          <div class="hv-c">
            <div class="log-list-view">
              <ul class="log-list reset-default"></ul>
            </div>
          </div>
          <div class="hv-c">
            <div class="log-undo hv-c">{"↺"}</div>
          </div>
        </div>
      );
    }
  }
}

export default Log;
