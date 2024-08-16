import { createStore } from "redux";
import reducer from "../Reducer/Reducer";
import { combineReducers } from 'redux';
import reducer2 from "../Reducer/Reducer2";
const routeReducer=combineReducers({reducer,reducer2});
const store = createStore(routeReducer);

export default store;