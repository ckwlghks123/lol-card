import { createStore } from "redux";

const ADD_TEAM = "ADD_TEAM";
const DELETE_TEAM = "DELETE_TEAM";
const GET_TEAM = "GET_TEAM";
const PUT_TEAM = "PUT_TEAM";

const contents = [
  {
    id: 0,
    name: "Fnatic",
    year: "2011",
    roster: [
      {
        id: 1,
        position: "TOP",
        name: "xPeke",
        country: "Spain",
      },
      {
        id: 2,
        position: "JGL",
        name: "CyanideFI",
        country: "Finland",
      },
      {
        id: 3,
        position: "MID",
        name: "Shushei",
        country: "Poland",
      },
      {
        id: 4,
        position: "BOT",
        name: "LamiaZealot",
        country: "Germany",
      },
      {
        id: 5,
        position: "SPT",
        name: "Mellisan",
        country: "Germany",
      },
      {
        id: 6,
        position: "SUB",
        name: "wewillfailer",
        country: "Belgium",
      },
    ],
    teamColor: "#ff5900",
  },
  {
    id: 1,
    name: "TPA",
    year: "2012",
    roster: [
      {
        id: 1,
        position: "TOP",
        name: "Stanley",
        country: "Taiwan",
      },
      {
        id: 2,
        position: "JGL",
        name: "Lilballz",
        country: "Taiwan",
      },
      {
        id: 3,
        position: "MID",
        name: "Toyz",
        country: "Hongkong",
      },
      {
        id: 4,
        position: "BOT",
        name: "bebe",
        country: "Taiwan",
      },
      {
        id: 5,
        position: "SPT",
        name: "MiSTakE",
        country: "Taiwan",
      },
    ],
    teamColor: "#a7b0b2",
  },
  {
    id: 2,
    name: "SKT",
    year: "2013",
    roster: [
      {
        id: 1,
        position: "TOP",
        name: "Impact",
        country: "Korea",
      },
      {
        id: 2,
        position: "JGL",
        name: "Bengi",
        country: "Korea",
      },
      {
        id: 3,
        position: "MID",
        name: "Faker",
        country: "Korea",
      },
      {
        id: 4,
        position: "BOT",
        name: "Piglet",
        country: "Korea",
      },
      {
        id: 5,
        position: "SPT",
        name: "PoohManDu",
        country: "Korea",
      },
    ],
    teamColor: "#e12239",
  },
  {
    id: 3,
    name: "SAMSUNG",
    year: "2014",
    roster: [
      {
        id: 1,
        position: "TOP",
        name: "Looper",
        country: "Korea",
      },
      {
        id: 2,
        position: "JGL",
        name: "DanDy",
        country: "Korea",
      },
      {
        id: 3,
        position: "MID",
        name: "PawN",
        country: "Korea",
      },
      {
        id: 4,
        position: "BOT",
        name: "imp",
        country: "Korea",
      },
      {
        id: 5,
        position: "SPT",
        name: "Mata",
        country: "Korea",
      },
      {
        id: 6,
        position: "SUB",
        name: "Skatch",
        country: "Korea",
      },
    ],
    teamColor: "#074ca1",
  },
  {
    id: 4,
    name: "SKT",
    year: "2015",
    roster: [
      {
        id: 1,
        position: "TOP",
        name: "MaRin",
        country: "Korea",
      },
      {
        id: 2,
        position: "JGL",
        name: "Bengi",
        country: "Korea",
      },
      {
        id: 3,
        position: "MID",
        name: "Faker",
        country: "Korea",
      },
      {
        id: 4,
        position: "BOT",
        name: "Bang",
        country: "Korea",
      },
      {
        id: 5,
        position: "SPT",
        name: "Wolf",
        country: "Korea",
      },
      {
        id: 6,
        position: "SUB",
        name: "Easyhoon",
        country: "Korea",
      },
    ],
    teamColor: "#e4002b",
  },
  {
    id: 5,
    name: "SKT",
    year: "2016",
    roster: [
      {
        id: 1,
        position: "TOP",
        name: "Duke",
        country: "Korea",
      },
      {
        id: 2,
        position: "JGL",
        name: "Bengi",
        country: "Korea",
      },
      {
        id: 3,
        position: "MID",
        name: "Faker",
        country: "Korea",
      },
      {
        id: 4,
        position: "BOT",
        name: "Bang",
        country: "Korea",
      },
      {
        id: 5,
        position: "SPT",
        name: "Wolf",
        country: "Korea",
      },
      {
        id: 6,
        position: "SUB",
        name: "Blank",
        country: "Korea",
      },
    ],
    teamColor: "#e4002b",
  },
  {
    id: 6,
    name: "SAMSUNG",
    year: "2017",
    roster: [
      {
        id: 1,
        position: "TOP",
        name: "CuVee",
        country: "Korea",
      },
      {
        id: 2,
        position: "JGL",
        name: "Ambition",
        country: "Korea",
      },
      {
        id: 3,
        position: "MID",
        name: "Crown",
        country: "Korea",
      },
      {
        id: 4,
        position: "BOT",
        name: "Ruler",
        country: "Korea",
      },
      {
        id: 5,
        position: "SPT",
        name: "CoreJJ",
        country: "Korea",
      },
      {
        id: 6,
        position: "SUB",
        name: "Haru",
        country: "Korea",
      },
    ],
    teamColor: "#074ca1",
  },
  {
    id: 7,
    name: "IG",
    year: "2018",
    roster: [
      {
        id: 1,
        position: "TOP",
        name: "TheShy",
        country: "Korea",
      },
      {
        id: 2,
        position: "JGL",
        name: "Ning",
        country: "China",
      },
      {
        id: 3,
        position: "MID",
        name: "Rookie",
        country: "Korea",
      },
      {
        id: 4,
        position: "BOT",
        name: "JackeyLove",
        country: "China",
      },
      {
        id: 5,
        position: "SPT",
        name: "Baolan",
        country: "China",
      },
      {
        id: 6,
        position: "SUB",
        name: "Duke",
        country: "Korea",
      },
    ],
    teamColor: "#808080",
  },
];

function reducer(state = contents, action) {
  switch (action.type) {
    case ADD_TEAM: {
      return [
        ...state,
        {
          id: action.data.id,
          name: action.data.name,
          year: action.data.year,
          roster: action.data.roster,
        },
      ];
    }
    case DELETE_TEAM: {
      return state.filter((team) => action.id !== team.id);
    }
    case GET_TEAM: {
      return state.filter((team) => team.id === action.id);
    }
    case PUT_TEAM: {
      return state.map((team) => {
        if (team.id === action.id) {
          return {
            ...team,
            [action.key]: action.value,
          };
        }
      });
    }
    default:
      return state;
  }
}

export const store = createStore(reducer);

export const addTeam = (id, name, year, roster) => ({
  type: ADD_TEAM,
  payload: {
    id,
    name,
    year,
    roster,
  },
});

export const deleteTeam = (id) => ({ type: DELETE_TEAM, id });
export const getTeam = (id) => ({ type: GET_TEAM, id });
