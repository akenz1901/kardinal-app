import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { tokenReducer } from "./token/reducer";

export default createStore(
    combineReducers({
        token: tokenReducer,
    }),
    applyMiddleware(thunk),
);
