import React, { Component } from "react";
import Player from "./player";
import Input from "./input";

class Players extends Component {
  state = {
    uiToggle: "players", //number of clicked player on the left
    num: 0, //number of clicked player on the right
    inputTypes: ["+1", "+2", "+3", "A", "Z", "F"]
  };

  toggleUI = () => {
    if (this.state.uiToggle === "players") {
      this.setState({ uiToggle: "inputs" });
    } else if (this.state.uiToggle === "inputs") {
      this.setState({ uiToggle: "players" });
    }
  };

  setNum = num => {
    this.setState({ num: num });
  };

  render() {
    if (this.state.uiToggle === "players") {
      return (
        <div className={`main-${this.props.team} hv-c`}>
          <div className={`main-${this.props.team}-view hv-c`}>
            {this.props.data.players.map(el => (
              <Player
                key={el.num}
                num={el.num}
                team={this.props.team}
                toggleUI={this.toggleUI}
                setNum={this.setNum}
              />
            ))}
          </div>
        </div>
      );
    } else if (this.state.uiToggle === "inputs") {
      return (
        <div className={`main-${this.props.team} hv-c`}>
          <div className={`main-${this.props.team}-view hv-c`}>
            <div className="input-wrapper hv-c">
              {this.state.inputTypes.map(el => (
                <Input
                  num={this.state.num}
                  team={this.props.team}
                  type={el}
                  key={el}
                />
              ))}
            </div>
            <div className="hv-c input-undo-box">
              <div
                className="input-undo hv-c"
                onClick={this.toggleUI}
              >{`↩`}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Players;
