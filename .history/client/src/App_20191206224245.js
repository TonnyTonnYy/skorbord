import React, { Component } from "react";
import axios from "axios";

import Scores from "./components/1-score-bar/score-bar-wrapper";
import Main from "./components/2-main-bar/main-wrapper";
import Logs from "./components/3-logs-bar/logs-bar-wrapper";
import BoxScore from "./components/4-box-score/box-score";
import Choose from "./components/5-add-game/game-list-wrapper";
import Login from "./components/6-login/login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      games: [
        {
        "teams": [
        {
        "category": "junior",
        "name": "FC po Nalewce",
        "players": [
        {
        "num": 2,
        "name": "Igor Posioł",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Karol Muzaj",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 4,
        "name": "Filip Zawiasa",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 9,
        "name": "Szymon Chmielnicki",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 7,
        "name": "Hubert Michalski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 8,
        "name": "Szymon Placek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "left"
        },
        {
        "category": "junior",
        "name": "Btw",
        "players": [
        {
        "num": 7,
        "name": "Marcel Stasiak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Alan Bryłka",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 4,
        "name": "Szymon Nita",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 6,
        "name": "Igor Skorupa",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 2,
        "name": "Jakub Ośródek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Dawid Borkiewicz",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "left"
        }
        ],
        "id": 0,
        "category": "J"
        },
        {
        "teams": [
        {
        "category": "junior",
        "name": "Btw",
        "players": [
        {
        "num": 7,
        "name": "Marcel Stasiak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Alan Bryłka",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 4,
        "name": "Szymon Nita",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 6,
        "name": "Igor Skorupa",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 2,
        "name": "Jakub Ośródek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Dawid Borkiewicz",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "left"
        },
        {
        "category": "junior",
        "name": "PARK",
        "players": [
        {
        "num": 1,
        "name": "Jakub Szewczyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 2,
        "name": "Wiktor Kruszwic",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Wiktor Glinkowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 4,
        "name": "Jakub Lewandowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Wojciech Wierzchowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 6,
        "name": "Oskar Frydrych",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 7,
        "name": "Michał Grzanka",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "right"
        }
        ],
        "id": 1,
        "category": "J"
        },
        {
        "teams": [
        {
        "category": "junior",
        "name": "FC po Nalewce",
        "players": [
        {
        "num": 2,
        "name": "Igor Posioł",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Karol Muzaj",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 4,
        "name": "Filip Zawiasa",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 9,
        "name": "Szymon Chmielnicki",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 7,
        "name": "Hubert Michalski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 8,
        "name": "Szymon Placek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "left"
        },
        {
        "category": "junior",
        "name": "PARK",
        "players": [
        {
        "num": 1,
        "name": "Jakub Szewczyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 2,
        "name": "Wiktor Kruszwic",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Wiktor Glinkowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 4,
        "name": "Jakub Lewandowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Wojciech Wierzchowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 6,
        "name": "Oskar Frydrych",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 7,
        "name": "Michał Grzanka",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "right"
        }
        ],
        "id": 2,
        "category": "J"
        },
        {
        "teams": [
        {
        "category": "senior",
        "name": "Bursiaki z RDK",
        "players": [
        {
        "num": 2,
        "name": "Ignacy Wabiński",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 13,
        "name": "Franciszek Wabiński",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 69,
        "name": "Bartosz Jończyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 11,
        "name": "Jakub Motyl",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Cyprian Karecki",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 1,
        "name": "Bartosz Stępień",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 23,
        "name": "Mateusz Kozłowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "right"
        },
        {
        "category": "senior",
        "name": "Harnoldy",
        "players": [
        {
        "num": 6,
        "name": "Kacper Jantosiak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Jasiek Siwek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 2,
        "name": "Paweł Tęgosz",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Łukasz Mielczarek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 8,
        "name": "Paweł Kowalski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 13,
        "name": "Michał Grabjasz",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "left"
        }
        ],
        "id": 3,
        "category": "S"
        },
        {
        "teams": [
        {
        "category": "senior",
        "name": "Murem za Bonusem",
        "players": [
        {
        "num": 2,
        "name": "Kacper Murawa",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Szymon Pietrzak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 13,
        "name": "Radek Wrzosek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 6,
        "name": "Mikołaj Złoty",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 8,
        "name": "Eryk Niewiadomski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 9,
        "name": "Kamil Józefczyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 7,
        "name": "Szymon Róg",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "right"
        },
        {
        "category": "senior",
        "name": "Park",
        "players": [
        {
        "num": 9,
        "name": "Maciej Szewczyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 11,
        "name": "Jan Kurowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 4,
        "name": "Robert Wewersowicz",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 15,
        "name": "Piotr Wlazło",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 35,
        "name": "Kacper Kałuża",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 30,
        "name": "Patryk Chramiec",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Kacper Moczkowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 19,
        "name": "Antoni Cieślak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "left"
        }
        ],
        "id": 4,
        "category": "S"
        },
        {
        "teams": [
        {
        "category": "senior",
        "name": "Bursiaki z RDK",
        "players": [
        {
        "num": 2,
        "name": "Ignacy Wabiński",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 13,
        "name": "Franciszek Wabiński",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 69,
        "name": "Bartosz Jończyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 11,
        "name": "Jakub Motyl",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Cyprian Karecki",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 1,
        "name": "Bartosz Stępień",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 23,
        "name": "Mateusz Kozłowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "right"
        },
        {
        "category": "senior",
        "name": "Murem za Bonusem",
        "players": [
        {
        "num": 2,
        "name": "Kacper Murawa",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Szymon Pietrzak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 13,
        "name": "Radek Wrzosek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 6,
        "name": "Mikołaj Złoty",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 8,
        "name": "Eryk Niewiadomski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 9,
        "name": "Kamil Józefczyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 7,
        "name": "Szymon Róg",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "right"
        }
        ],
        "id": 5,
        "category": "S"
        },
        {
        "teams": [
        {
        "category": "senior",
        "name": "Harnoldy",
        "players": [
        {
        "num": 6,
        "name": "Kacper Jantosiak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Jasiek Siwek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 2,
        "name": "Paweł Tęgosz",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Łukasz Mielczarek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 8,
        "name": "Paweł Kowalski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 13,
        "name": "Michał Grabjasz",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "left"
        },
        {
        "category": "senior",
        "name": "Park",
        "players": [
        {
        "num": 9,
        "name": "Maciej Szewczyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 11,
        "name": "Jan Kurowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 4,
        "name": "Robert Wewersowicz",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 15,
        "name": "Piotr Wlazło",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 35,
        "name": "Kacper Kałuża",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 30,
        "name": "Patryk Chramiec",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Kacper Moczkowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 19,
        "name": "Antoni Cieślak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "left"
        }
        ],
        "id": 6,
        "category": "S"
        },
        {
        "teams": [
        {
        "category": "senior",
        "name": "Park",
        "players": [
        {
        "num": 9,
        "name": "Maciej Szewczyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 11,
        "name": "Jan Kurowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 4,
        "name": "Robert Wewersowicz",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 15,
        "name": "Piotr Wlazło",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 35,
        "name": "Kacper Kałuża",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 30,
        "name": "Patryk Chramiec",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Kacper Moczkowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 19,
        "name": "Antoni Cieślak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "left"
        },
        {
        "category": "senior",
        "name": "Bursiaki z RDK",
        "players": [
        {
        "num": 2,
        "name": "Ignacy Wabiński",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 13,
        "name": "Franciszek Wabiński",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 69,
        "name": "Bartosz Jończyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 11,
        "name": "Jakub Motyl",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Cyprian Karecki",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 1,
        "name": "Bartosz Stępień",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 23,
        "name": "Mateusz Kozłowski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "right"
        }
        ],
        "id": 7,
        "category": "S"
        },
        {
        "teams": [
        {
        "category": "senior",
        "name": "Harnoldy",
        "players": [
        {
        "num": 6,
        "name": "Kacper Jantosiak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Jasiek Siwek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 2,
        "name": "Paweł Tęgosz",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 5,
        "name": "Łukasz Mielczarek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 8,
        "name": "Paweł Kowalski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 13,
        "name": "Michał Grabjasz",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "left"
        },
        {
        "category": "senior",
        "name": "Murem za Bonusem",
        "players": [
        {
        "num": 2,
        "name": "Kacper Murawa",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 3,
        "name": "Szymon Pietrzak",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 13,
        "name": "Radek Wrzosek",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 6,
        "name": "Mikołaj Złoty",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 8,
        "name": "Eryk Niewiadomski",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 9,
        "name": "Kamil Józefczyk",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        },
        {
        "num": 7,
        "name": "Szymon Róg",
        "points": 0,
        "assists": 0,
        "rebounds": 0,
        "fouls": 0
        }
        ],
        "score": 0,
        "fouls": 0,
        "history": [],
        "side": "right"
        }
        ],
        "id": 8,
        "category": "S"
        }
        ],
      chooseToggle: true,
      activeGame: 0,
      statsToggle: "none",
      password: "root",
      logged: false
    };
  }

  // async componentDidMount() {
  //   let gameData = await axios.get("/api/games", {});
  //   let games = gameData.data;
  //   // console.log(gameData.data);
  //   this.setState({ games: games });
  //   // Load async data.
  //   // Update state with new data.
  //   // Re-render our component.
  // }

  saveChanges = gameId => {
    const game = this.state.games.find(el => el._id === gameId).teams;
    axios.post("/api/games", {
      id: gameId,
      teams: game
    });
  };

  /* input button clicked */
  updateScore = (side, input, sign) => {
    // console.log(`${sign} ${side} ${input}`);
    if (input === "+1" || input === "+2" || input === "+3") {
      const id = this.state.games[this.state.activeGame].teams.findIndex(
        el => el.side === side
      );
      if (sign === "+") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].score += +input)
        );
      } else if (sign === "-") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].score -= +input)
        );
      }
    }
  };

  updateFouls = side => {
    const id = this.state.games[this.state.activeGame].teams.findIndex(
      el => el.side === side
    );
    this.setState(
      state => state.games[this.state.activeGame].teams[id].fouls++
    );
  };

  resetFouls = () => {
    this.state.games[this.state.activeGame].teams.map(el => {
      return this.setState(state => (el.fouls = 0));
    });
  };

  updatePlayer = (side, input, num, sign) => {
    const id = this.state.games[this.state.activeGame].teams.findIndex(
      el => el.side === side
    );
    const idPlayer = this.state.games[this.state.activeGame].teams[
      id
    ].players.findIndex(el => el.num === num);
    if (input === "+1" || input === "+2" || input === "+3") {
      if (sign === "+") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].points += +input)
        );
      } else if (sign === "-") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].points -= +input)
        );
      }
    } else if (input === "A") {
      if (sign === "+") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].assists += 1)
        );
      } else if (sign === "-") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].assists -= 1)
        );
      }
    } else if (input === "Z") {
      if (sign === "+") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].rebounds += 1)
        );
      } else if (sign === "-") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].rebounds -= 1)
        );
      }
    } else if (input === "F") {
      if (sign === "+") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].fouls += 1)
        );
      } else if (sign === "-") {
        this.setState(
          state =>
            (state.games[this.state.activeGame].teams[id].players[
              idPlayer
            ].fouls -= 1)
        );
        this.setState(
          state => (state.games[this.state.activeGame].teams[id].fouls -= 1)
        );
      }
    }
  };

  updateHistory = (side, input, num) => {
    const id = this.state.games[this.state.activeGame].teams.findIndex(
      el => el.side === side
    );
    this.setState(state =>
      state.games[this.state.activeGame].teams[id].history.unshift({
        num: num,
        input: input
      })
    );
  };
  /* undo button clicked */
  popHistory = side => {
    const id = this.state.games[this.state.activeGame].teams.findIndex(
      el => el.side === side
    );
    this.setState(state =>
      state.games[this.state.activeGame].teams[id].history.shift()
    );
  };

  toggleClock = () => {
    if (this.state.clock === "start") {
      this.setState({ clock: "stop" });
    } else if (this.state.clock === "stop") {
      this.setState({ clock: "stop" });
    }
  };

  toggleStats = () => {
    if (this.state.statsToggle === "none") {
      this.setState({ statsToggle: "flex" });
    } else if (this.state.statsToggle === "flex") {
      this.setState({ statsToggle: "none" });
    }
  };

  toggleChoose = () => {
    if (this.state.chooseToggle === true) {
      this.setState({ chooseToggle: false });
    } else if (this.state.chooseToggle === false) {
      this.setState({ chooseToggle: true });
    }
  };

  chooseGame = num => {
    this.setState({ activeGame: num });
  };

  onExit = () => {
    this.toggleChoose();
    this.saveChanges(this.state.games[this.state.activeGame]._id);
  };

  handleLogin = e => {
    e.preventDefault();
    // console.dir(e.target[0].value);
    if (this.state.password === e.target[0].value) {
      this.setState({ logged: true });
    }
  };

  render() {
    if (this.state.chooseToggle === true) {
      return (
        <React.Fragment>
          {(() => {
            if (!this.state.logged)
              return <Login handleLogin={this.handleLogin} />;
          })()}
          {(() => {
            if (this.state.logged)
              return (
                <Choose
                  games={this.state.games}
                  toggleChoose={this.toggleChoose}
                  chooseGame={this.chooseGame}
                />
              );
          })()}
        </React.Fragment>
      );
    } else if (this.state.chooseToggle === false) {
      return (
        <div className="container wrapper">
          <div className="save-quit-wrapper hv-c">
            <div
              className="w50-wrapper hv-c"
              onClick={() =>
                this.saveChanges(this.state.games[this.state.activeGame]._id)
              }
            >
              <div className="save hv-c"> zapisz</div>
            </div>
            <div className="w50-wrapper hv-c" onClick={this.onExit}>
              <div className="quit hv-c">X</div>
            </div>
          </div>
          <BoxScore
            data={this.state.games[this.state.activeGame].teams}
            statsToggle={this.state.statsToggle}
            toggleStats={this.toggleStats}
          />
          <div className="score-bar hv-c">
            <Scores
              id={this.state.games[this.state.activeGame]._id}
              saveChanges={this.saveChanges}
              data={this.state.games[this.state.activeGame].teams}
              toggleStats={this.toggleStats}
              resetFouls={this.resetFouls}
            />
          </div>
          <div className="main-bar wrapper">
            <Main
              data={this.state.games[this.state.activeGame].teams}
              id={this.state.games[this.state.activeGame]._id}
              saveChanges={this.saveChanges}
              updateHistory={this.updateHistory}
              updateScore={this.updateScore}
              updatePlayer={this.updatePlayer}
              updateFouls={this.updateFouls}
            />
          </div>
          <div className="logs-bar">
            <Logs
              data={this.state.games[this.state.activeGame].teams}
              updateScore={this.updateScore}
              updatePlayer={this.updatePlayer}
              popHistory={this.popHistory}
              displayReversed={this.displayReversed}
              id={this.state.games[this.state.activeGame]._id}
              saveChanges={this.saveChanges}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
