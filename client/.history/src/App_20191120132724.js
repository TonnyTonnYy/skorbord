import React, { Component } from "react";

class App extends Component {
  state = {
    teams: [
      {
        side: "left",
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
      },
      {
        side: "right"
      }
    ]
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
