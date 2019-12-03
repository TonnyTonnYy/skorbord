import { GET_TOGGLE_CHOOSE, GET_TEAMS, ADD_GAME } from "./types";

export const getToggleChoose = () => {
  return {
    type: GET_TOGGLE_CHOOSE
  };
};

export const getTeams = () => {
  return {
    type: GET_TEAMS
  };
};

export const addGame = game => {
  return {
    type: ADD_GAME,
    payload: game
  };
};
