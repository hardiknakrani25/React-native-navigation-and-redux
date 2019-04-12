import { combineReducers } from "redux";

const INITIAL_STATE = {
  current: [],
  possible: ["Harshit", "Hardik", "Harshil"]
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  friends: friendReducer
});
