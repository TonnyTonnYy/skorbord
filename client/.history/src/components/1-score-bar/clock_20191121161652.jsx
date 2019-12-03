import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date(10000),
    toggleClock: "start"
  };

  timerFinished = () => {
    this.setState({
      date: new Date(10000)
    });
  };

  handleClick = () => {
    if (this.state.toggleClock === "start") {
      if (
        this.state.date.getSeconds() === 0 &&
        this.state.date.getMinutes() === 0
      ) {
        this.timerFinished();
        this.tick();
        this.timerID = setInterval(() => this.tick(), 1000);
        this.setState({ toggleClock: "stop" });
      } else {
        this.tick();
        this.timerID = setInterval(() => this.tick(), 1000);
        this.setState({ toggleClock: "stop" });
      }
    } else if (this.state.toggleClock === "stop") {
      clearInterval(this.timerID);
      this.setState({ toggleClock: "start" });
    }
  };

  tick() {
    if (
      this.state.date.getSeconds() === 0 &&
      this.state.date.getMinutes() === 0
    ) {
      clearInterval(this.timerID);
      this.setState({ toggleClock: "start" });
      // this.timerFinished();
    } else {
      this.setState({
        date: new Date(this.state.date - 1000)
      });
    }
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
