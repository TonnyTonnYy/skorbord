import React, { Component } from "react";

class Name extends Component {
  state = {};
  render() {
    return (
      <div class="name-left wrapper h-c">
        <span class="foul-limit"></span>
        {/* if left span on left, if right span on right */}
        <div class="name-left-view hv-c">Trampolina</div>
        {/* insert team name */}
      </div>
    );
  }
}

export default Name;
