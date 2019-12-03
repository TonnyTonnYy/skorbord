import React, { Component } from "react";
import Element from "./game-list-element";

class View extends Component {
  state = {};
  render() {
    return (
      <div class="game-list-view" id="game-box">
        {/* render all games before form */}
        <Element />
        <Element />
        <form class="reset-default game-add">
          <div class="wrapper hv-c">
            <div class="hv-c game-category-junior">
              <select class="hv-c">
                <option value="junior">J</option>
                <option value="senior">S</option>
              </select>
            </div>
          </div>
          <div class="wrapper hv-c">
            <div class="hv-c game-team">
              <select>
                <option value="Trampolina">Trampolina</option>
                <option value="Dzikie dzikie">Dzikie Dziki</option>
              </select>
            </div>
          </div>
          <div class="wrapper hv-c">
            <div class="hv-c">vs</div>
          </div>
          <div class="wrapper hv-c">
            <div class="hv-c game-team">
              <select>
                <option value="Trampolina">Trampolina</option>
                <option value="Dzikie dzikie">Dzikie Dziki</option>
              </select>
            </div>
          </div>
          <div class="wrapper hv-c">
            <div class="hv-c game-score">0 : 0</div>
          </div>
          <div class="wrapper hv-c">
            <div class="hv-c game-edit"> ✓</div>
          </div>
        </form>
      </div>
    );
  }
}

export default View;
