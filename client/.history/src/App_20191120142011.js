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
        score: 0,
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
        score: 0,
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
  /* input button clicked */
  updateScore = (side, input, sign) => {
    if (input === "+1" || input === "+2" || input === "+3") {
      let id = this.state.teams.indexOf(el => (el.side = side));
      if (sign === "+") {
        this.setState(state => (state.teams[id].score += +input));
      } else if (sign === "-") {
        this.setState(state => (state.teams[id].score -= +input));
      }
    }
  };
  updatePlayer = (side, input, num, sign) => {
    let id = this.state.teams.indexOf(el => (el.side = side));
    let idPlayer = this.state.teams[id].playes.indexOf(el => (el.num = num));
    if (input === "+1" || input === "+2" || input === "+3") {
      if (sign === "+") {
        this.setState(
          state => (state.teams[id].players[idPlayer].points += +input)
        );
      } else if (sign === "-") {
        this.setState(
          state => (state.teams[id].players[idPlayer].points -= +input)
        );
      }
    } else if (input === "A") {
      if (sign === "+") {
        this.setState(
          state => (state.teams[id].players[idPlayer].assists += 1)
        );
      } else if (sign === "-") {
        this.setState(
          state => (state.teams[id].players[idPlayer].assists -= 1)
        );
      }
    } else if (input === "Z") {
    } else if (input === "F") {
    }
  };
  updateHistory = (side, input, num) => {};
  /* undo button clicked */
  popScore = () => {};
  popPlayer = () => {};
  popHistory = () => {};

  render() {
    return (
      <React.Fragment>
        <div className="score-bar hv-c">
          <Scores data={this.state.teams} />
        </div>
        <div className="main-bar wrapper">
          <Main data={this.state.teams} />
        </div>
        <div className="logs-bar">
          <Logs data={this.state.teams} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
