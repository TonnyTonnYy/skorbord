import { GET_TOGGLE_CHOOSE, GET_TEAMS } from "./types";

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
