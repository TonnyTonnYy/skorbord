import React, { Component } from "react";

import Element from "./game-list-element";

class View extends Component {
  render() {
    return (
      <div className="game-list-view" id="game-box">
        {this.props.games.map(el => (
          <Element
            key={`${el._id}-${el.id}`}
            game={el}
            toggleChoose={this.props.toggleChoose}
            chooseGame={this.props.chooseGame}
          />
        ))}
      </div>
    );
  }
}

export default View;

/* <form className="reset-default game-add" onSubmit={this.onAddClick}>
<div className="wrapper hv-c">
  <div className="hv-c game-category-junior">
    <select className="hv-c">
      <option value="junior">J</option>
      <option value="senior">S</option>
    </select>
  </div>
</div>
<div className="wrapper hv-c">
  <div className="hv-c game-team">
    <select>
      {this.props.teams.map(el => {
        return <option value={`${el.name}`}>{el.name}</option>;
      })}
    </select>
  </div>
</div>
<div className="wrapper hv-c">
  <div className="hv-c">vs</div>
</div>
<div className="wrapper hv-c">
  <div className="hv-c game-team">
    <select>
      {this.props.teams.map(el => {
        return <option value={`${el.name}`}>{el.name}</option>;
      })}
    </select>
  </div>
</div>
<div className="wrapper hv-c">
  <div className="hv-c game-score">0 : 0</div>
</div>
<div className="wrapper hv-c">
  <button type="submit" value="Submit" className="hv-c game-edit">
    ✓
  </button>
</div>
</form> 

onAddClick = e => {
    e.preventDefault();
    let game = {
      category: e.target[0].value,
      teams: [{}, {}],
      history: []
    };
    this.props.teams.map(el => {
      if (el.name === e.target[1].value) game.teams[0] = el;
    });
    this.props.teams.map(el => {
      if (el.name === e.target[2].value) game.teams[1] = el;
    });
    game.teams.map(el => {
      el.score = 0;
      el.fouls = 0;
      el.players.map(element => {
        element.points = 0;
        element.assists = 0;
        element.rebounds = 0;
        element.fouls = 0;
      });
      console.dir(el);
    });
    console.dir(game);
    this.props.addGame(game);
  };
*/
