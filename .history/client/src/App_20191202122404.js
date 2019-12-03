import React, { Component } from "react";

import Scores from "./components/1-score-bar/score-bar-wrapper";
import Main from "./components/2-main-bar/main-wrapper";
import Logs from "./components/3-logs-bar/logs-bar-wrapper";
import BoxScore from "./components/4-box-score/box-score";
import Choose from "./components/5-add-game/game-list-wrapper";

class App extends Component {
  state = {
    games: [
      {
        id: 1,
        category: "S",
        teams: [
          {
            side: "left",
            name: "Trampolina",
            score: 0,
            fouls: 0,
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
            history: []
          },
          {
            side: "right",
            name: "Dziki",
            score: 0,
            fouls: 0,
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
            history: []
          }
        ]
      },
      {
        id: 2,
        category: "S",
        teams: [
          {
            side: "left",
            name: "Park",
            score: 0,
            fouls: 0,
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
            history: []
          },
          {
            side: "right",
            name: "Bursiaki",
            score: 0,
            fouls: 0,
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
            history: []
          }
        ]
      }
    ],
    chooseToggle: true,
    activeGame: 0,
    statsToggle: "none"
  };

  /* input button clicked */
  updateScore = (side, input, sign) => {
    // console.log(`${sign} ${side} ${input}`);
    if (input === "+1" || input === "+2" || input === "+3") {
      const id = this.state.teams.findIndex(el => el.side === side);
      if (sign === "+") {
        this.setState(state => (state.teams[id].score += +input));
      } else if (sign === "-") {
        this.setState(state => (state.teams[id].score -= +input));
      }
    }
  };

  updateFouls = side => {
    const id = this.state.teams.findIndex(el => el.side === side);
    this.setState(state => state.teams[id].fouls++);
  };

  resetFouls = () => {
    this.state.teams.map(el => {
      return this.setState(state => (el.fouls = 0));
    });
  };

  updatePlayer = (side, input, num, sign) => {
    const id = this.state.teams.findIndex(el => el.side === side);
    const idPlayer = this.state.teams[id].players.findIndex(
      el => el.num === num
    );
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
      if (sign === "+") {
        this.setState(
          state => (state.teams[id].players[idPlayer].rebounds += 1)
        );
      } else if (sign === "-") {
        this.setState(
          state => (state.teams[id].players[idPlayer].rebounds -= 1)
        );
      }
    } else if (input === "F") {
      if (sign === "+") {
        this.setState(state => (state.teams[id].players[idPlayer].fouls += 1));
      } else if (sign === "-") {
        this.setState(state => (state.teams[id].players[idPlayer].fouls -= 1));
      }
    }
  };

  updateHistory = (side, input, num) => {
    const id = this.state.teams.findIndex(el => el.side === side);
    this.setState(state =>
      state.teams[id].history.unshift({ num: num, input: input })
    );
  };
  /* undo button clicked */
  popHistory = side => {
    const id = this.state.teams.findIndex(el => el.side === side);
    this.setState(state => state.teams[id].history.shift());
  };

  toggleClock = () => {
    if (this.state.clock === "start") {
      this.setState({ clock: "stop" });
    } else if (this.state.clock === "stop") {
      this.setState({ clock: "stop" });
    }
  };

  toggleStats = () => {
    if (this.state.statsToggle === "none") {
      this.setState({ statsToggle: "flex" });
    } else if (this.state.statsToggle === "flex") {
      this.setState({ statsToggle: "none" });
    }
  };

  toggleChoose = () => {
    if (this.state.chooseToggle === true) {
      this.setState({ chooseToggle: false });
    } else if (this.state.chooseToggle === false) {
      this.setState({ chooseToggle: true });
    }
  };

  chooseGame = num => {
    this.setState({ activeGame: num });
  };

  render() {
    if (this.state.chooseToggle === true) {
      return (
        <Choose
          games={this.state.games}
          toggleChoose={this.toggleChoose}
          chooseGame={this.chooseGame}
        />
      );
    } else if (this.state.chooseToggle === false) {
      return (
        <div class="container wrapper">
          <BoxScore
            data={this.state.games[this.state.activeGame]}
            statsToggle={this.state.statsToggle}
            toggleStats={this.toggleStats}
          />
          <div className="score-bar hv-c">
            <Scores
              data={this.state.games[this.state.activeGame]}
              toggleStats={this.toggleStats}
              resetFouls={this.resetFouls}
            />
          </div>
          <div className="main-bar wrapper">
            <Main
              data={this.state.games[this.state.activeGame]}
              updateHistory={this.updateHistory}
              updateScore={this.updateScore}
              updatePlayer={this.updatePlayer}
              updateFouls={this.updateFouls}
            />
          </div>
          <div className="logs-bar">
            <Logs
              data={this.state.games[this.state.activeGame]}
              updateScore={this.updateScore}
              updatePlayer={this.updatePlayer}
              popHistory={this.popHistory}
              displayReversed={this.displayReversed}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
