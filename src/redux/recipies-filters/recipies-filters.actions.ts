import { type AppDispatch } from "@src/redux/redux.types";

import {
  CerealFilter,
  DietFilter,
  DifficultyFilter,
  SeasonFilter,
  ServiceFilter,
  setCereal,
  setDiet,
  setDifficulty,
  setSeasons,
  setService
} from "./recipies-filters.slice";

export const updateCerealFilter =
  <K extends keyof CerealFilter>(key: K, value: CerealFilter[K]) =>
  (dispatch: AppDispatch): void => {
    dispatch(setCereal({ [key]: value }));
  };

export const updateDietFilter =
  <K extends keyof DietFilter>(key: K, value: DietFilter[K]) =>
  (dispatch: AppDispatch): void => {
    dispatch(setDiet({ [key]: value }));
  };

export const updateDifficultyFilter =
  <K extends keyof DifficultyFilter>(key: K, value: DifficultyFilter[K]) =>
  (dispatch: AppDispatch): void => {
    dispatch(setDifficulty({ [key]: value }));
  };

export const updateSeasonFilter =
  <K extends keyof SeasonFilter>(key: K, value: SeasonFilter[K]) =>
  (dispatch: AppDispatch): void => {
    dispatch(setSeasons({ [key]: value }));
  };

export const updateServiceFilter =
  <K extends keyof ServiceFilter>(key: K, value: ServiceFilter[K]) =>
  (dispatch: AppDispatch): void => {
    dispatch(setService({ [key]: value }));
  };
