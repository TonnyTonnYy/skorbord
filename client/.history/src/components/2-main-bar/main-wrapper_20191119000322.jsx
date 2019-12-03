import React, { Component } from "react";

class Main extends Component {
  state = {
    team1: {
      name: "Trampolina",
      category: "Senior",
      players: [
        {
          num: 1,
          name: "Antek"
        },
        {
          num: 2,
          name: "Antek"
        },
        {
          num: 3,
          name: "Antek"
        },
        {
          num: 4,
          name: "Antek"
        },
        {
          num: 5,
          name: "Antek"
        },
        {
          num: 6,
          name: "Antek"
        },
        {
          num: 7,
          name: "Antek"
        },
        {
          num: 8,
          name: "Antek"
        },
        {
          num: 9,
          name: "Antek"
        },
        {
          num: 10,
          name: "Antek"
        }
      ]
    }
  };
  render() {
    return <div class="main-bar">{/* render left and right containers */}</div>;
  }
}

export default Main;
