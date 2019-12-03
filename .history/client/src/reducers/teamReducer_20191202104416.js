import { GET_TOGGLE_CHOOSE, GET_TEAMS } from "../actions/types";

const initialState = {
  teams: [
    {
      category: "senior",
      name: "Bursiaki z RDK",
      players: [
        { num: 1, name: "Ignacy Wabiński" },
        { num: 2, name: "Franciszek Wabiński" },
        { num: 3, name: "Bartosz Jończyk" },
        { num: 4, name: "Jakub Motyl" },
        { num: 5, name: "Cyprian Karecki" },
        { num: 6, name: "Bartosz Stępień" },
        { num: 7, name: "Mateusz Kozłowski" }
      ]
    },
    {
      category: "senior",
      name: "WojakTM",
      players: [
        { num: 1, name: "Jakub Łangiewczyk" },
        { num: 2, name: "Franciszek Wabiński" },
        { num: 3, name: "Mateusz Endler" },
        { num: 4, name: "Gracjan Gotowałal" },
        { num: 5, name: "Dawid Krata" }
      ]
    },
    {
      category: "senior",
      name: "Haroldy",
      players: [
        { num: 1, name: "Kacper Jantosiak" },
        { num: 2, name: "Jasiek Siwek" },
        { num: 3, name: "Paweł Tęgosz" },
        { num: 4, name: "Łukasz Mielczarek" },
        { num: 5, name: "Paweł Kowalski" },
        { num: 6, name: "Michał Grabjasz" }
      ]
    },
    {
      category: "senior",
      name: "Murem za Bonusem",
      players: [
        { num: 1, name: "Kacper Murawa" },
        { num: 2, name: "Szymon Pietrzak" },
        { num: 3, name: "Radek Wrzosek" },
        { num: 4, name: "Mikołaj Złoty" },
        { num: 5, name: "Eryk Niewiadomski" },
        { num: 6, name: "Kamil Józefczyk" },
        { num: 7, name: "Szymon Róg" }
      ]
    },
    {
      category: "senior",
      name: "Park",
      players: [
        { num: 1, name: "Maciej Szewczyk" },
        { num: 2, name: "Jan Kurowski" },
        { num: 3, name: "Robert Wewersowicz" },
        { num: 4, name: "Piotr Wlazło" },
        { num: 5, name: "Kacper Kałuża" },
        { num: 6, name: "Patryk Chramiec" },
        { num: 7, name: "Kacper Moczkowski" },
        { num: 8, name: "Antoni Cieślak" },
        { num: 9, name: "Daniel Nawrocki" }
      ]
    },
    {
      category: "junior",
      name: "FC po Nalewce",
      players: [
        { num: 1, name: "Igor Posioł" },
        { num: 2, name: "Karol Muzaj" },
        { num: 3, name: "Filip Zawiasa" },
        { num: 4, name: "Szymon Chmielnicki" },
        { num: 5, name: "Hubert Michalski" },
        { num: 6, name: "Szymon Placek" }
      ]
    },
    {
      category: "junior",
      name: "Zduńska Heat",
      players: [
        { num: 1, name: "Szymon Grelewski" },
        { num: 2, name: "Kacper Wajcht" },
        { num: 3, name: "Maciej Michalczak" },
        { num: 4, name: "Hubert Grala" },
        { num: 5, name: "Maksymilian Marciniak" },
        { num: 6, name: "Franciszek Gąsiorowski" },
        { num: 7, name: "Jakub Szewczyk" }
      ]
    }
  ],
  chooseToggle: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOGGLE_CHOOSE:
      return {
        ...state
      };
    case GET_TEAMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
