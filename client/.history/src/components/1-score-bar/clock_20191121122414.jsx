import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date(360000)
  };

  tick() {
    this.setState({
      date: date - 1000
    });
  }
  render() {
    return (
      <div className="time wrapper hv-c">
        <div className="time-view hv-c">06:00</div>
      </div>
    );
  }
}

export default Clock;
