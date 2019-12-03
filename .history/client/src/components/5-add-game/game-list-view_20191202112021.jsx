import React, { Component } from "react";

import { connect } from "react-redux";
import { getTeams } from "../../actions/teamActions";

import Element from "./game-list-element";

class View extends Component {
  componentDidMount() {
    this.props.getTeams();
    console.log(this.props.teams);
  }

  onAddClick = e => {
    e.preventDefault();
    // let game = {
    //   category: e.
    // }
    console.dir(e.target[0]);
  };

  render() {
    return (
      <div className="game-list-view" id="game-box">
        {/* render all games before form */}
        <Element />
        <form className="reset-default game-add" onSubmit={this.onAddClick}>
          <div className="wrapper hv-c">
            <div className="hv-c game-category-junior">
              <select className="hv-c">
                <option value="junior">J</option>
                <option value="senior">S</option>
              </select>
            </div>
          </div>
          <div className="wrapper hv-c">
            <div className="hv-c game-team">
              <select>
                {this.props.teams.map(el => {
                  return <option value={`${el.name}`}>{el.name}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="wrapper hv-c">
            <div className="hv-c">vs</div>
          </div>
          <div className="wrapper hv-c">
            <div className="hv-c game-team">
              <select>
                {this.props.teams.map(el => {
                  return <option value={`${el.name}`}>{el.name}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="wrapper hv-c">
            <div className="hv-c game-score">0 : 0</div>
          </div>
          <div className="wrapper hv-c">
            <button type="submit" value="Submit" className="hv-c game-edit">
              ✓
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.team.teams
});

export default connect(mapStateToProps, { getTeams })(View);
