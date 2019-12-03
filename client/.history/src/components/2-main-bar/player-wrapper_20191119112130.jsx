import React, { Component } from "react";
import ReactDOM from "react-dom";
import Player from "./player";
import Inputs from "./input-wrapper";

class Players extends Component {
  state = {};

  renderInput(team) {
    console.log(team);
    // ReactDOM.render(<Inputs />, document.querySelector({`.${team}`}));
  }

  render() {
    console.log(this.props);
    return (
      <div className={`main-${this.props.position} hv-c`}>
        <div className={`main-${this.props.position}-view hv-c`}>
          {this.props.data.players.map(el => (
            <Player
              key={el.num}
              num={el.num}
              team={this.props.position}
              onClick={() => this.renderInput(this.props.position)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Players;
