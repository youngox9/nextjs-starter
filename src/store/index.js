import { createStore, combineReducers } from "redux";
// state
const initState = {
  otherState: "otherState",
  todoList: ["first"],
};

// reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODOLIST": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

const combine = combineReducers({
  reducer,
});

const store = createStore(combine);

export default store;
