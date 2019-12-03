import React, { Component } from "react";
import Players from "./main-team";

class Main extends Component {
  state = {};

  handleInput = (team, num, input) => {
    /* hisotry update */
    /* player stat update */
  };

  render() {
    return (
      <React.Fragment>
        {this.props.data.map(el => (
          <Players
            team={el.side}
            players={el.players}
            handleInput={this.handleInput}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Main;
