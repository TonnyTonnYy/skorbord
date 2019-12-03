import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date(360000)
  };

  tick = () => {
    this.setState({
      date: this.state.date - 1000
    });
  };

  timerID = () => {
    setInterval(() => this.tick(), 1000);
  };

  render() {
    return (
      <div className="time wrapper hv-c">
        <div className="time-view hv-c" onClick={this.timerID}>
          {this.state.date.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

export default Clock;
