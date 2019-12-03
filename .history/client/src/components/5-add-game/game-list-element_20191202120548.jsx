import React, { Component } from "react";

class Element extends Component {
  state = {};
  render() {
    return (
      <div className="game-list-element hv-c">
        <div className="wrapper hv-c">
          <div className="hv-c game-category-junior">
            {`${this.props.game.category}-${this.props.game.id}}
          </div>
        </div>
        <div className="wrapper hv-c">
          <div className="hv-c game-team">Trampolina</div>
        </div>
        <div className="wrapper hv-c">
          <div className="hv-c">vs</div>
        </div>
        <div className="wrapper hv-c">
          <div className="hv-c game-team">Dzikie Dziki</div>
        </div>
        <div className="wrapper hv-c">
          <div className="hv-c game-score">21 : 20</div>
        </div>
        <div className="wrapper hv-c">
          <div className="hv-c game-edit">⇨</div>
        </div>
      </div>
    );
  }
}

export default Element;
