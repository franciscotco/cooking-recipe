import { memo, type ReactElement } from "react";

import {
  CEREAL_TAG,
  DIET_TAG,
  DIFFICULTY_TAG,
  isCereal,
  isDiet,
  isDifficulty,
  isSeason,
  isService,
  SEASON_TAG,
  SERVICE_TAG
} from "@src/constants/recipies-tags";
import {
  updateCerealFilter,
  updateDietFilter,
  updateDifficultyFilter,
  updateSeasonFilter,
  updateServiceFilter
} from "@src/redux/recipies-filters";
import { selectors } from "@src/redux/redux.selectors";

import RecipeFilter from "./recipe-filter";
import { RecipiesFilters as Root } from "./recipies-filters.styles";

function RecipiesFilters(): ReactElement {
  return (
    <Root>
      <RecipeFilter
        tags={CEREAL_TAG}
        isTag={isCereal}
        legend="Céréals"
        updateFilter={updateCerealFilter}
        selector={selectors.recipiesFilters.selectCereal}
      />
      <RecipeFilter
        tags={DIET_TAG}
        isTag={isDiet}
        legend="Régime"
        updateFilter={updateDietFilter}
        selector={selectors.recipiesFilters.selectDiet}
      />
      <RecipeFilter
        tags={DIFFICULTY_TAG}
        isTag={isDifficulty}
        legend="Difficulté"
        updateFilter={updateDifficultyFilter}
        selector={selectors.recipiesFilters.selectDifficulty}
      />
      <RecipeFilter
        tags={SEASON_TAG}
        isTag={isSeason}
        legend="Saison"
        updateFilter={updateSeasonFilter}
        selector={selectors.recipiesFilters.selectSeason}
      />
      <RecipeFilter
        tags={SERVICE_TAG}
        isTag={isService}
        legend="Service"
        updateFilter={updateServiceFilter}
        selector={selectors.recipiesFilters.selectService}
      />
    </Root>
  );
}

export default memo(RecipiesFilters);
