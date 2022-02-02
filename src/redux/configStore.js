import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dictionaryList from "./modules/dictionaryList";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({ dictionaryList });

//optional 한 것들의 모임
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
