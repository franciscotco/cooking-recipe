import { createSelector } from "@reduxjs/toolkit";

import { Recipe } from "@src/interfaces/recipies.interfaces";
import { type AppSelector } from "@src/redux/redux.types";

import {
  type RecipiesFiltersState,
  type CerealFilter,
  SeasonFilter,
  DietFilter,
  DifficultyFilter,
  ServiceFilter
} from "./recipies-filters.slice";

const filterCereal = (cerealFilter: CerealFilter) => {
  return function (recipe: Recipe): boolean {
    if (Object.values(cerealFilter).some(Boolean)) {
      return recipe.tag.cereal.some((cerealTag) => cerealFilter[cerealTag]);
    } else {
      return true;
    }
  };
};

const filterDiet = (dietFilter: DietFilter) => {
  return function (recipe: Recipe): boolean {
    if (Object.values(dietFilter).some(Boolean)) {
      return recipe.tag.diet.some((dietTag) => dietFilter[dietTag]);
    } else {
      return true;
    }
  };
};

const filterDifficulty = (difficultyFilter: DifficultyFilter) => {
  return function (recipe: Recipe): boolean {
    if (Object.values(difficultyFilter).some(Boolean)) {
      return recipe.tag.difficulty.some((difficultyTag) => difficultyFilter[difficultyTag]);
    } else {
      return true;
    }
  };
};

const filterSeason = (seasonFilter: SeasonFilter) => {
  return function (recipe: Recipe): boolean {
    if (Object.values(seasonFilter).some(Boolean)) {
      return recipe.tag.season.some((seasonTag) => seasonFilter[seasonTag]);
    } else {
      return true;
    }
  };
};

const filterService = (serviceFilter: ServiceFilter) => {
  return function (recipe: Recipe): boolean {
    if (Object.values(serviceFilter).some(Boolean)) {
      return recipe.tag.service.some((serviceTag) => serviceFilter[serviceTag]);
    } else {
      return true;
    }
  };
};

const filterRecipies = ({ recipies, filter }: RecipiesFiltersState): Recipe[] => {
  return recipies
    .filter(filterCereal(filter.cereal))
    .filter(filterSeason(filter.season))
    .filter(filterDiet(filter.diet))
    .filter(filterDifficulty(filter.difficulty))
    .filter(filterService(filter.service));
};

export interface RecipiesFilterSelectors {
  selectCereal: AppSelector<CerealFilter>;
  selectDiet: AppSelector<DietFilter>;
  selectDifficulty: AppSelector<DifficultyFilter>;
  selectSeason: AppSelector<SeasonFilter>;
  selectService: AppSelector<ServiceFilter>;
  selectFilteredRecipies: AppSelector<Recipe[]>;
}

export const recipiesFiltersSelectors = (slicer: AppSelector<RecipiesFiltersState>): RecipiesFilterSelectors => ({
  selectCereal: createSelector(slicer, ({ filter }) => filter.cereal),
  selectDiet: createSelector(slicer, ({ filter }) => filter.diet),
  selectDifficulty: createSelector(slicer, ({ filter }) => filter.difficulty),
  selectSeason: createSelector(slicer, ({ filter }) => filter.season),
  selectService: createSelector(slicer, ({ filter }) => filter.service),
  selectFilteredRecipies: createSelector(slicer, filterRecipies)
});
