import React, { Component } from "react";
import Scores from "./components/1-score-bar/score-bar-wrapper";
import Main from "./components/2-main-bar/main-wrapper";
import Logs from "./components/3-logs-bar/logs-bar-wrapper";

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
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 2,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 3,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 4,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 5,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 6,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 7,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 8,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 9,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 10,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          }
        ],
        history: [
          { num: 1, input: "+1" },
          { num: 7, input: "+3" },
          { num: 2, input: "A" }
        ]
      },
      {
        side: "right",
        name: "Dzikie dziki",
        category: "Senior",
        players: [
          {
            num: 1,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 2,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 3,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 4,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 5,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 6,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 7,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 8,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 9,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          },
          {
            num: 10,
            name: "Antek",
            points: 0,
            assists: 0,
            rebounds: 0,
            fouls: 0
          }
        ],
        history: [
          { num: 4, input: "+2" },
          { num: 10, input: "Z" },
          { num: 9, input: "F" }
        ]
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="score-bar hv-c" data={this.state}></div>
        <div className="main-bar wrapper"></div>
        <div className="logs-bar"></div>
      </React.Fragment>
    );
  }
}

export default App;