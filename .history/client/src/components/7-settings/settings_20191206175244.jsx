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
              <div>
                <label>Ustaw kolor (lewa)</label>
                <input type="color" name="left" className="login-input" />
              </div>
              <div>
                <label>Ustaw kolor (prawa)</label>
                <input type="color" name="right" className="login-input" />
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
