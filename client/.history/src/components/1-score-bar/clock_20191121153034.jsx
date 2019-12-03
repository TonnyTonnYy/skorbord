import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(360000) };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(this.state.date - 1000)
    });
  }

  displayDate = () => {
    let mins = `${this.state.date.getMinutes}`;
    return mins;
  };

  render() {
    return (
      <div className="time wrapper hv-c">
        <div className="time-view hv-c" onClick={this.timerID}>
          {this.displayDate()}
        </div>
      </div>
    );
  }
}

export default Clock;
