import React, { Component } from "react";

class Settings extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper settings-wrapper hv-c">
        <div className="settings-view">
          <form onSubmit={this.props.handleSettings} className="hv-c">
          <input type="number" name="name" className="login-input" />
            <input
              type="submit"
              className="login-input"
              value="Sign in"
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Settings;
