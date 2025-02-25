import { recipiesFiltersSelectors } from "./recipies-filters";

export const selectors = {
  recipiesFilters: recipiesFiltersSelectors(({ recipiesFilters }) => recipiesFilters)
};
