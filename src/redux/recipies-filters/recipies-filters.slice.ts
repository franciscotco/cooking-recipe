import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { RECIPIES } from "@src/constants/recipies/recipies";
import {
  Cereal,
  CEREAL_TAG,
  Diet,
  DIET_TAG,
  Difficulty,
  DIFFICULTY_TAG,
  Season,
  SEASON_TAG,
  Service,
  SERVICE_TAG
} from "@src/constants/recipies-tags";

export type CerealFilter = Record<Cereal, boolean>;
export type DietFilter = Record<Diet, boolean>;
export type DifficultyFilter = Record<Difficulty, boolean>;
export type SeasonFilter = Record<Season, boolean>;
export type ServiceFilter = Record<Service, boolean>;

export interface RecipiesFiltersState {
  filter: {
    cereal: CerealFilter;
    diet: DietFilter;
    difficulty: DifficultyFilter;
    season: SeasonFilter;
    service: ServiceFilter;
  };
  recipies: typeof RECIPIES;
}

const initialState: RecipiesFiltersState = {
  filter: {
    cereal: CEREAL_TAG.reduce((acc, out) => ({ ...acc, [out]: false }), {} as CerealFilter),
    diet: DIET_TAG.reduce((acc, out) => ({ ...acc, [out]: false }), {} as DietFilter),
    difficulty: DIFFICULTY_TAG.reduce((acc, out) => ({ ...acc, [out]: false }), {} as DifficultyFilter),
    season: SEASON_TAG.reduce((acc, out) => ({ ...acc, [out]: false }), {} as SeasonFilter),
    service: SERVICE_TAG.reduce((acc, out) => ({ ...acc, [out]: false }), {} as ServiceFilter)
  },
  recipies: RECIPIES
};

const slice = createSlice({
  name: "recipiesFilters",
  initialState,
  reducers: {
    setCereal(state, action: PayloadAction<Partial<CerealFilter>>) {
      state.filter.cereal = { ...state.filter.cereal, ...action.payload };
    },
    setDiet(state, action: PayloadAction<Partial<DietFilter>>) {
      state.filter.diet = { ...state.filter.diet, ...action.payload };
    },
    setDifficulty(state, action: PayloadAction<Partial<DifficultyFilter>>) {
      state.filter.difficulty = { ...state.filter.difficulty, ...action.payload };
    },
    setSeasons(state, action: PayloadAction<Partial<SeasonFilter>>) {
      state.filter.season = { ...state.filter.season, ...action.payload };
    },
    setService(state, action: PayloadAction<Partial<ServiceFilter>>) {
      state.filter.service = { ...state.filter.service, ...action.payload };
    }
  }
});

export const { setCereal, setDiet, setDifficulty, setSeasons, setService } = slice.actions;
export default slice.reducer;
