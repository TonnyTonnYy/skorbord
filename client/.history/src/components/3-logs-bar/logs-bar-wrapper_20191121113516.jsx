import React, { Component } from "react";
import Log from "./log";

class Logs extends Component {
  state = {};

  handleUndo = (side, input, num) => {
    this.props.updateScore(side, input, "-");
    this.props.updatePlayer(side, input, num, "-");
    this.props.popHistory(side);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.data.map(el => {
          if (el.side === "left") {
            return (
              <div className="logs-left">
                <div className="hv-c">
                  <div
                    className="log-undo hv-c"
                    onClick={() =>
                      this.handleUndo(
                        el.side,
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
                      {el.history.map((element, index) => (
                        <Log
                          key={`${index}-${el.side}`}
                          num={element.num}
                          input={element.input}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          } else if (el.side === "right") {
            return (
              <div className="logs-right">
                <div className="hv-c">
                  <div className="log-list-view">
                    <ul className="log-list reset-default">
                      {el.history.map((element, index) => (
                        <Log
                          key={`${index}-${el.side}`}
                          num={element.num}
                          input={element.input}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hv-c">
                  <div
                    className="log-undo hv-c"
                    onClick={() =>
                      this.handleUndo(
                        el.side,
                        el.history[el.history.length - 1].input,
                        el.history[el.history.length - 1].num
                      )
                    }
                  >
                    {"↺"}
                  </div>
                </div>
              </div>
            );
          } else {
            return -1;
          }
        })}
      </React.Fragment>
    );
  }
}
export default Logs;
