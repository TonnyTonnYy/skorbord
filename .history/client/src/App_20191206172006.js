import React, { Component } from "react";
import axios from "axios";

import Scores from "./components/1-score-bar/score-bar-wrapper";
import Main from "./components/2-main-bar/main-wrapper";
import Logs from "./components/3-logs-bar/logs-bar-wrapper";
import BoxScore from "./components/4-box-score/box-score";
import Choose from "./components/5-add-game/game-list-wrapper";
import Login from "./components/6-login/login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      games: [{
        "teams": [
        {
        "category": "junior",
        "name": "FC po Nalewce",
        "players": [
        {
        "num": 1,
        "name": "Igor Posioł",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 2,
        "name": "Karol Muzaj",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Filip Zawiasa",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 4,
        "name": "Szymon Chmielnicki",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Hubert Michalski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 6,
        "name": "Szymon Placek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "left"
        },
        {
        "category": "junior",
        "name": "Zduńska Heat",
        "players": [
        {
        "num": 1,
        "name": "Szymon Grelewski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 2,
        "name": "Kacper Wajcht",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Maciej Michalczak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 4,
        "name": "Hubert Grala",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Maksymilian Marciniak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 6,
        "name": "Franciszek Gąsiorowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 7,
        "name": "Jakub Szewczyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "right"
        }],
      chooseToggle: true,
      activeGame: 0,
      statsToggle: "none",
      password: "root",
      logged: false
    };
  }

  // async componentDidMount() {
  //   let gameData = await axios.get("/api/games", {});
  //   let games = gameData.data;
  //   // console.log(gameData.data);
  //   this.setState({ games: games });
  //   // Load async data.
  //   // Update state with new data.
  //   // Re-render our component.
  // }

  saveChanges = gameId => {
    const game = this.state.games.find(el => el._id === gameId).teams;
    axios.post("/api/games", {
      id: gameId,
      teams: game
    });
  };

  /* input button clicked */
  updateScore = (side, input, sign) => {
    // console.log(`${sign} ${side} ${input}`);
    if (input === "+1" || input === "+2" || input === "+3") {
      const id = this.state.games[this.state.activeGame].teams.findIndex(
        el => el.side === side
      );
      if (sign === "+") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].score += +input)
        );
      } else if (sign === "-") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].score -= +input)
        );
      }
    }
  };

  updateFouls = side => {
    const id = this.state.games[this.state.activeGame].teams.findIndex(
      el => el.side === side
    );
    this.setState(
      state => state.games[this.state.activeGame].teams[id].fouls++
    );
  };

  resetFouls = () => {
    this.state.games[this.state.activeGame].teams.map(el => {
      return this.setState(state => (el.fouls = 0));
    });
  };

  updatePlayer = (side, input, num, sign) => {
    const id = this.state.games[this.state.activeGame].teams.findIndex(
      el => el.side === side
    );
    const idPlayer = this.state.games[this.state.activeGame].teams[
      id
    ].players.findIndex(el => el.num === num);
    if (input === "+1" || input === "+2" || input === "+3") {
      if (sign === "+") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].points += +input)
        );
      } else if (sign === "-") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].points -= +input)
        );
      }
    } else if (input === "A") {
      if (sign === "+") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].assists += 1)
        );
      } else if (sign === "-") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].assists -= 1)
        );
      }
    } else if (input === "Z") {
      if (sign === "+") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].rebounds += 1)
        );
      } else if (sign === "-") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].rebounds -= 1)
        );
      }
    } else if (input === "F") {
      if (sign === "+") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].fouls += 1)
        );
      } else if (sign === "-") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].fouls -= 1)
        );
        this.setState(
          state => (state.games[this.state.activeGame].teams[id].fouls -= 1)
        );
      }
    }
  };

  updateHistory = (side, input, num) => {
    const id = this.state.games[this.state.activeGame].teams.findIndex(
      el => el.side === side
    );
    this.setState(state =>
      state.games[this.state.activeGame].teams[id].history.unshift({
        num: num,
        input: input
      })
    );
  };
  /* undo button clicked */
  popHistory = side => {
    const id = this.state.games[this.state.activeGame].teams.findIndex(
      el => el.side === side
    );
    this.setState(state =>
      state.games[this.state.activeGame].teams[id].history.shift()
    );
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

  onExit = () => {
    this.toggleChoose();
    this.saveChanges(this.state.games[this.state.activeGame]._id);
  };

  handleLogin = e => {
    e.preventDefault();
    // console.dir(e.target[0].value);
    if (this.state.password === e.target[0].value) {
      this.setState({ logged: true });
    }
  };

  render() {
    if (this.state.chooseToggle === true) {
      return (
        <React.Fragment>
          {(() => {
            if (!this.state.logged)
              return <Login handleLogin={this.handleLogin} />;
          })()}
          {(() => {
            if (this.state.logged)
              return (
                <Choose
                  games={this.state.games}
                  toggleChoose={this.toggleChoose}
                  chooseGame={this.chooseGame}
                />
              );
          })()}
        </React.Fragment>
      );
    } else if (this.state.chooseToggle === false) {
      return (
        <div className="container wrapper">
          <div className="save-quit-wrapper hv-c">
            <div
              className="w50-wrapper hv-c"
              onClick={() =>
                this.saveChanges(this.state.games[this.state.activeGame]._id)
              }
            >
              <div className="save hv-c"> zapisz</div>
            </div>
            <div className="w50-wrapper hv-c" onClick={this.onExit}>
              <div className="quit hv-c">X</div>
            </div>
          </div>
          <BoxScore
            data={this.state.games[this.state.activeGame].teams}
            statsToggle={this.state.statsToggle}
            toggleStats={this.toggleStats}
          />
          <div className="score-bar hv-c">
            <Scores
              id={this.state.games[this.state.activeGame]._id}
              saveChanges={this.saveChanges}
              data={this.state.games[this.state.activeGame].teams}
              toggleStats={this.toggleStats}
              resetFouls={this.resetFouls}
            />
          </div>
          <div className="main-bar wrapper">
            <Main
              data={this.state.games[this.state.activeGame].teams}
              id={this.state.games[this.state.activeGame]._id}
              saveChanges={this.saveChanges}
              updateHistory={this.updateHistory}
              updateScore={this.updateScore}
              updatePlayer={this.updatePlayer}
              updateFouls={this.updateFouls}
            />
          </div>
          <div className="logs-bar">
            <Logs
              data={this.state.games[this.state.activeGame].teams}
              updateScore={this.updateScore}
              updatePlayer={this.updatePlayer}
              popHistory={this.popHistory}
              displayReversed={this.displayReversed}
              id={this.state.games[this.state.activeGame]._id}
              saveChanges={this.saveChanges}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
