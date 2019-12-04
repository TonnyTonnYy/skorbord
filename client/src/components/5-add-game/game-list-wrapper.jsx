import React, { Component } from "react";
import View from "./game-list-view";

class Choose extends Component {
  state = {};
  render() {
    return (
      <div className="container-add-game wrapper">
        <div className="title-choose wrapper hv-c">
          <h1 className="">Wybierz mecz</h1>
        </div>
        <div className="wrapper hv-c">
          <View
            games={this.props.games}
            toggleChoose={this.props.toggleChoose}
            chooseGame={this.props.chooseGame}
          />
        </div>
      </div>
    );
  }
}

export default Choose;
