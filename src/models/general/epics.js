import { map } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import { CHANGE_LANGUAGE, HANDLE_CHANGE_LANGUAGE } from "./actions";

/* LANGUAGE */
const handleChangeLanguageEpic = (action$) =>
  action$.pipe(
    ofType(HANDLE_CHANGE_LANGUAGE),
    map((action) => {
      const { payload } = action;

      return {
        type: CHANGE_LANGUAGE,
        payload
      };
    })
  );

export const rootEpic = combineEpics(handleChangeLanguageEpic);
