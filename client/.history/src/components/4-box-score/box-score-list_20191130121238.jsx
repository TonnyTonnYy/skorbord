import React, { Component } from "react";
import Element from "./box-score-list-element";

class List extends Component {
  state = {};
  render() {
    return (
      <ul className="box-score-list">
        <li className="box-score-list-element">
          <div className="hv-c bd-p">#</div>
          <div className="hv-c bd-p">Zawodnik</div>
          <div className="hv-c">P</div>
          <div className="hv-c">A</div>
          <div className="hv-c">Z</div>
          <div className="hv-c">F</div>
        </li>
        {this.props.players.map(el => {
          return <Element player={el} />;
        })}
      </ul>
    );
  }
}

export default List;
