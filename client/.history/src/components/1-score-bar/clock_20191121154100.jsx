import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(360000), toggleClock: "start" };
  }

  handleClick = () => {
    if (this.state.toggleClock === "start") {
      this.timerID = setInterval(() => this.tick(), 1000);
      this.setState({ toggleClock: "stop" });
    } else if (this.state.toggleClock === "stop") {
      clearInterval(this.timerID);
      this.setState({ toggleClock: "start" });
    }
  };

  tick() {
    this.setState({
      date: new Date(this.state.date - 1000)
    });
  }

  displayDate = () => {
    let minutes = `0${this.state.date.getMinutes()}`;
    let seconds = `${this.state.date.getSeconds()}`;
    if (seconds.length === 1) seconds = `0${this.state.date.getSeconds()}`;
    return `${minutes}:${seconds}`;
  };

  render() {
    return (
      <div className="time wrapper hv-c">
        <div className="time-view hv-c" onClick={this.handleClick}>
          {this.displayDate()}
        </div>
      </div>
    );
  }
}

export default Clock;
