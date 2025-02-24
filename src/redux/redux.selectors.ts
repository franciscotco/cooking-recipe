import { languagesSelectors } from "./languages";
import { recipiesFiltersSelectors } from "./recipies-filters";

export const selectors = {
  languages: languagesSelectors(({ languages }) => languages),
  recipiesFilters: recipiesFiltersSelectors(({ recipiesFilters }) => recipiesFilters)
};
