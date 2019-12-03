import React, { Component } from "react";

class Players extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className={`main-{this.props.position} hv-c`}>
        {/* render left or right into a class */}
        <div class="main-left-view hv-c">
          {/*for each render <Player />  */}
        </div>
      </div>
    );
  }
}

export default Players;
