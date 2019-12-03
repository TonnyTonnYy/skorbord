import React, { Component } from "react";

class Log extends Component {
  state = {};
  render() {
    if ((this.props.team = "left")) {
      return (
        <div class="logs-left">
          <div class="hv-c">
            <div class="log-undo hv-c">&#11119</div>
          </div>
          <div class="hv-c">
            <div class="log-list-view">
              <ul class="log-list reset-default">
                <li>+1 punkt #31</li>
                <li>Zbiórka #1</li>
                <li>Asysta #6</li>
                <li>+2 punkty #31</li>
                <li>Asysta #6</li>
                <li>+3 punkty #31</li>
                <li>Faul #6</li>
                <li>+2 punkty #31</li>
              </ul>
            </div>
          </div>
        </div>
      );
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
