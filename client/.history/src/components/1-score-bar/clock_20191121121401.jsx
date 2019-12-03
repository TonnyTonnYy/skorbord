import React, { Component } from "react";

class Clock extends Component {
  state = {
    date : new Date(360000);
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
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
