import React, { Component } from "react";

class Main extends Component {
  state = {
    team1: {
      name: String,
      category: String,
      players: [
        {
          num: Number,
          name: String
        }
      ]
    }
  };
  render() {
    return <div class="main-bar">{/* render left and right containers */}</div>;
  }
}

export default Main;
