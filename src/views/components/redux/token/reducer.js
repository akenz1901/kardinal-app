import { Storage } from "../../utils/storage";

const defaultState = Storage.getItem("token");
export const tokenReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return action.token;
    default:
      return state;
  }
};
