import React, { Component } from "react";

class Element extends Component {
  state = {};
  render() {
    return (
      <div className="game-list-element hv-c">
        <div className="wrapper hv-c">
          <div className="hv-c game-category-junior">
            {`${this.props.game.category}-${this.props.game.id}`}
          </div>
        </div>
        <div className="wrapper hv-c">
          <div className="hv-c game-team">{this.props.game.teams[0].name}</div>
        </div>
        <div className="wrapper hv-c">
          <div className="hv-c">vs</div>
        </div>
        <div className="wrapper hv-c">
          <div className="hv-c game-team">{this.props.game.teams[1].name}</div>
        </div>
        <div className="wrapper hv-c">
          <div className="hv-c game-score">{`${this.props.game.teams[0].score} : ${this.props.game.teams[1].score}`}</div>
        </div>
        <div className="wrapper hv-c">
          <div className="hv-c game-edit">⇨</div>
        </div>
      </div>
    );
  }
}

export default Element;
