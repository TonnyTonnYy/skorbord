import React, { Component } from "react";
import API from "./axios/api";

import Scores from "./components/1-score-bar/score-bar-wrapper";
import Main from "./components/2-main-bar/main-wrapper";
import Logs from "./components/3-logs-bar/logs-bar-wrapper";
import BoxScore from "./components/4-box-score/box-score";
import Choose from "./components/5-add-game/game-list-wrapper";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      games: [],
      chooseToggle: true,
      activeGame: 0,
      statsToggle: "none"
    };
  }

  async componentDidMount() {
    let gameData = await API.get("/", {});
    let games = gameData.data;
    // console.log(gameData.data);
    this.setState({ games: games });
    // Load async data.
    // Update state with new data.
    // Re-render our component.
  }

  saveChanges = gameId => {
    const game = this.state.games.find(el => el._id === gameId).teams;
    const change = API.post("/", { id: gameId, teams: game });
    console.dir(change.data);
    // console.dir(` siemanko : ${game}`);
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
    console.log(this.state.games[this.state.activeGame].teams);
  };

  onExit = () => {
    this.toggleChoose();
    this.saveChanges(this.state.games[this.state.activeGame]._id);
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
          <div className="exit hv-c" onClick={this.onExit}>
            X
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
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
