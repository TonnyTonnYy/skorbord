import React, { Component } from "react";
import Settings  from "../7-settings/settings";

class Clock extends Component {
  state = {
    date: new Date(10000),
    toggleClock: "start",
    toggleSettings: "block"
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
        //klikamy kiedy czas się skończył - zaczyna się nowa kwarta
        this.props.updatePeriod();
        this.props.resetFouls();
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

  handleSettingsClick = () =>{
    if (this.state.toggleSettings === "none") {
      this.setState({ toggleSettings: "block" });
    } else if (this.state.toggleSettings === "block") {
      this.setState({ clock: "none" });
    }
  }

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
    if (
      this.state.date <= new Date(5000) &&
      this.state.date >= new Date(2000)
    ) {
      return (
        <React.Fragment>
        <div className="settings-button" onClick={this.handleSettingsClick}>klikaj</div>
        <div style={`display:${this.state.toggleSettings}`}><Settings/></div>
        <div className="time wrapper hv-c">
          <div
            className="time-view time-minute hv-c"
            onClick={this.handleClick}
          >
            {this.displayDate()}
          </div>
        </div>
        </React.Fragment>

      );
    } else if (this.state.date <= new Date(2000)) {
      return (
        <React.Fragment>
          <div className="settings-button"  onClick={this.handleSettingsClick}>klikaj</div>
          <div style={`display:${this.state.toggleSettings}`}><Settings/></div>
          <div className="time wrapper hv-c">
          <div
            className="time-view time-15-seconds hv-c"
            onClick={this.handleClick}
          >
            {this.displayDate()}
          </div>
        </div>
        </React.Fragment>

      );
    } else {
      return (
        <React.Fragment>
          <div className="settings-button" onClick={this.handleSettingsClick}>klikaj</div>
          <div style={{display:this.state.toggleSettings}}><Settings/></div>
<div className="time wrapper hv-c">
          <div className="time-view hv-c" onClick={this.handleClick}>
            {this.displayDate()}
          </div>
        </div>
        </React.Fragment>

      );
    }
  }
}

export default Clock;
