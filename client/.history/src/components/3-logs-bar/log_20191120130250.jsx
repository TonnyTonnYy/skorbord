import React, { Component } from "react";

class Log extends Component {
  state = {};
  render() {
      switch(this.props.input)
  return <li>{`${this.props.input} `}+1 punkt #31</li>;
  }
}

export default Log;
