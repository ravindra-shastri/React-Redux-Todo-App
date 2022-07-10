import { createStore } from 'redux';

const reducer = (state = [], { type, value }) => {
  switch (type) {
    case "add":
      return [...state, value];
    case "delete":
      return state.filter((e, i) => i !== value);

    case "isDone":
      return state.map((e, i) =>
        value === i
          ? { ...e, isDone: !e.isDone }
          : e);

    default:
      return state;
  }
}

export let store = createStore(reducer);