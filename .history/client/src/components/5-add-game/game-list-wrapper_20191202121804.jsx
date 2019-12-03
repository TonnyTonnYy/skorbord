import React, { Component } from "react";
import View from "./game-list-view";

class Choose extends Component {
  state = {};
  render() {
    return (
      <div className="container-add-game wrapper">
        <div className="wrapper hv-c">
          <h1>Select a game</h1>
        </div>
        <div className="wrapper hv-c">
          <View
            games={this.props.games}
            toggleChoose={this.toggleChoose}
            chooseGame={this.chooseGame}
          />
        </div>
      </div>
    );
  }
}

export default Choose;
