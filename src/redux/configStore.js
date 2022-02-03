import { createStore, combineReducers, applyMiddleware } from "redux";
import dictionaryList from "./modules/dictionaryList";
import thunk from "redux-thunk";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  // localStorage에 저장
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장
  whitelist: ["dictionaryList"],
  // blacklist -> 그것만 제외합니다
};

const middlewares = [thunk];

const rootReducer = combineReducers({
  dictionaryList,
});

//optional 한 것들의 모임
const enhancer = applyMiddleware(...middlewares);
// persisConfig가 추가된 reducer 반환
const enhancedReducer = persistReducer(persistConfig, rootReducer);
// persistConfig가 추가된 rootReducer로 store를 생성
const store = createStore(enhancedReducer, enhancer);

export default store;
