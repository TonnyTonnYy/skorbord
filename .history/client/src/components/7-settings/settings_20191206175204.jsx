import React, { Component } from "react";

class Settings extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper settings-wrapper hv-c">
        <div className="settings-view">
          <form onSubmit={this.props.handleSettings} className="hv-c">
              <div>
                <label>Ustaw zegar (ms)</label>
                <input type="number" name="clock" className="login-input" />
              </div>

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
