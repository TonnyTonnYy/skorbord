import React, { Component } from "react";

class Element extends Component {
  state = {};
  render() {
    return (
      <li className="box-score-list-element">
        <div className="hv-c bd-p">#</div>
        <div className="hv-c bd-p">Zawodnik</div>
        <div className="hv-c">P</div>
        <div className="hv-c">A</div>
        <div className="hv-c">Z</div>
        <div className="hv-c">F</div>
      </li>
    );
  }
}

export default Element;