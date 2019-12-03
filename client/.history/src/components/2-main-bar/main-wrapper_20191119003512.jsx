import React, { Component } from "react";
import Players from "./player-wrapper";

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
    },
    team2: {
      name: "Dzikie Dziki",
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
    return (
      <div className="main-bar">
        {
          <React.Fragment>
            <Players position="left" data={this.state.team1} />
            <Players position="right" data={this.state.team2} />
          </React.Fragment>
        }
      </div>
    );
  }
}

export default Main;
