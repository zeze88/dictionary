import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import dictionaryList from "./modules/dictionaryList";
import targetDic from "./modules/targetDic";
import thunk from "redux-thunk";

const middlewares = [thunk];

const rootReducer = combineReducers({ dictionaryList, targetDic });

//optional 한 것들의 모임
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;
