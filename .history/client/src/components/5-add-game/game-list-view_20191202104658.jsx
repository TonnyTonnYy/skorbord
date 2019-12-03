import React, { Component } from "react";

import { connect } from "react-redux";
import { getTeams } from "../../actions/teamActions";

import Element from "./game-list-element";

class View extends Component {
  state = {};
  render() {
    return (
      <div className="game-list-view" id="game-box">
        {/* render all games before form */}
        <Element />
        <form className="reset-default game-add">
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
                <option value="Trampolina">Trampolina</option>
                <option value="Dzikie dzikie">Dzikie Dziki</option>
              </select>
            </div>
          </div>
          <div className="wrapper hv-c">
            <div className="hv-c">vs</div>
          </div>
          <div className="wrapper hv-c">
            <div className="hv-c game-team">
              <select>
                <option value="Trampolina">Trampolina</option>
                <option value="Dzikie dzikie">Dzikie Dziki</option>
              </select>
            </div>
          </div>
          <div className="wrapper hv-c">
            <div className="hv-c game-score">0 : 0</div>
          </div>
          <div className="wrapper hv-c">
            <div className="hv-c game-edit"> ✓</div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  toggle: state.team.chooseToggle
});

export default connect(mapStateToProps, { getTeams })(View);