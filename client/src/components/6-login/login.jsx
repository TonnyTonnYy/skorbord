import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper login-wrapper hv-c">
        <div className="login-view">
          <form onSubmit={this.props.handleLogin} className="hv-c">
            <input type="password" name="name" className="login-input" />
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

export default Login;
