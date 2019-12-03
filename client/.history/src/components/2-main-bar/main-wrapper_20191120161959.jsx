import React, { Component } from "react";
import Players from "./main-team";

class Main extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        {this.props.data.map(el => (
          <Players
            team={el.side}
            players={el.players}
            updateHistory={this.props.updateHistory}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Main;
