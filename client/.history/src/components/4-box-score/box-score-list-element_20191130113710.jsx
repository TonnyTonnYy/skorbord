import React, { Component } from "react";

class Element extends Component {
  state = {};
  render() {
    return (
      <li class="box-score-list-element">
        <div class="hv-c bd-p">#</div>
        <div class="hv-c bd-p">Zawodnik</div>
        <div class="hv-c">P</div>
        <div class="hv-c">A</div>
        <div class="hv-c">Z</div>
        <div class="hv-c">F</div>
      </li>
    );
  }
}

export default Element;
