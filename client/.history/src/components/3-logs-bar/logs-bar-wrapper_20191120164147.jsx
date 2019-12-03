import React, { Component } from "react";
import Log from "./log";

class Logs extends Component {
  state = {};

  handleUndo = (input, num) => {
    this.props.updateScore(this.props.team, input, "-");
    this.props.updatePlayer(this.props.team, input, "-");
  };

  render() {
    if ((this.props.team = "left")) {
      return (
        <div className="logs-left">
          <div className="hv-c">
            <div className="log-undo hv-c">{"↺"}</div>
          </div>
          <div className="hv-c">
            <div className="log-list-view">
              <ul className="log-list reset-default">
                {this.props.history.map(el => (
                  <Log num={el.num} input={el.input} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    } else if ((this.props.team = "right")) {
      return (
        <div className="logs-right">
          <div className="hv-c">
            <div className="log-list-view">
              <ul className="log-list reset-default">
                {this.props.history.map(el => (
                  <Log num={el.num} input={el.input} />
                ))}
              </ul>
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

export default Logs;