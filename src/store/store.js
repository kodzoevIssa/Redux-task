import { createStore } from "redux";

let countId = 0;

const defaultState = [
  {
    id: countId++,
    text: "Помыть кота",
    done: false,
  },
];

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: countId++,
          text: action.text,
          done: false,
        },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export const store = createStore(todoReducer);
