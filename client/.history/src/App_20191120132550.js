import React, { Component } from "react";

class App extends Component {
  state = {
    teams: [{}, {}]
  };
  render() {
    return (
      <React.Fragment>
        <div className="score-bar hv-c"></div>
        <div className="main-bar wrapper"></div>
        <div class="logs-bar"></div>
      </React.Fragment>
    );
  }
}

export default App;
