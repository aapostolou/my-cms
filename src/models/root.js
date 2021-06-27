import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

import {
  rootReducer as generalReducer,
  rootEpic as generalEpic
} from "./general";

export const rootEpic = combineEpics(generalEpic);

export const rootReducer = combineReducers({ general: generalReducer });
