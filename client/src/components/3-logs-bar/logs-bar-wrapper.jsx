import React, { Component } from "react";
import Log from "./log";

class Logs extends Component {
  state = {};

  handleUndo = (side, history) => {
    if (history.length > 0) {
      this.props.updateScore(side, history[0].input, "-");
      this.props.updatePlayer(side, history[0].input, history[0].num, "-");
      this.props.popHistory(side);
      this.props.saveChanges(this.props.id);
    }
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
                    onClick={() => this.handleUndo(el.side, el.history)}
                  >
                    ⟲
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
                    onClick={() => this.handleUndo(el.side, el.history)}
                  >
                    ⟲
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
