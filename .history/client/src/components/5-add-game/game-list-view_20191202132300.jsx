import React, { Component } from "react";

import Element from "./game-list-element";

class View extends Component {
  render() {
    return (
      <div className="game-list-view" id="game-box">
        {this.props.games.map(el => (
          <Element
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

{
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
</form> */
}
