import { combineReducers } from "redux";

import languages from "./languages";
import recipiesFilters from "./recipies-filters";

const reducer = combineReducers({
  languages,
  recipiesFilters
});

export default reducer;
