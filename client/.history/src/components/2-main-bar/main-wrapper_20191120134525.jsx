import React, { Component } from "react";
import Players from "./main-team";

class Main extends Component {
  state = {
    left: {
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
    right: {
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

  handleInput = (team, num, input) => {
    console.log(`${team} #${num} : ${input}`);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.data.map(el => (
          <Players
            team={el.side}
            data={this.state.left}
            handleInput={this.handleInput}
          />
        ))}

        <Players
          team="right"
          data={this.state.right}
          handleInput={this.handleInput}
        />
      </React.Fragment>
    );
  }
}

export default Main;