import React, { Component } from "react";
import Log from "./log";

class Logs extends Component {
  state = {};

  handleUndo = (input, num) => {
    this.props.updateScore(this.props.team, input, "-");
    this.props.updatePlayer(this.props.team, input, num, "-");
    this.props.popHistory(this.props.team);
  };

  render() {
    {
    <React.Fragment>
      {this.props.data.map(el => {
        if ((el.side = "left")) {
          return (
            <div className="logs-left">
              <div className="hv-c">
                <div
                  className="log-undo hv-c"
                  onClick={() =>
                    this.handleUndo(
                      el.history[el.history.length - 1].input,
                      el.history[el.history.length - 1].num
                    )
                  }
                >
                  {"↺"}
                </div>
              </div>
              <div className="hv-c">
                <div className="log-list-view">
                  <ul className="log-list reset-default">
                    {el.history.map(element => (
                      <Log num={el.num} input={el.input} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        } else if ((el.side = "right")) {
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
      });}

    </React.Fragment>
      
    }
  }
}
export default Logs;