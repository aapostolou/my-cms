import { combineReducers } from "redux";

import { CHANGE_LANGUAGE, CHANGE_AVAILABLE_LANGUAGES } from "./actions";

/* LANGUAGE */
const initialLanguageState = {
  current: "EN",
  available: ["EN", "GR", "IT"]
};
const languageReducer = (state = initialLanguageState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return { ...state, current: action.payload };
    case CHANGE_AVAILABLE_LANGUAGES:
      return { ...state, available: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  language: languageReducer
});
