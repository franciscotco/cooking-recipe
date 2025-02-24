export const CEREAL_TAG = ["riz", "légumineuse", "blé", "millet", "quinoa", "orge", "épeautre"] as const;
export type Cereal = (typeof CEREAL_TAG)[number];
export const isCereal = (cereal: string): cereal is Cereal => CEREAL_TAG.some((cerealTag) => cerealTag === cereal);

export const DIET_TAG = ["végétarien", "végan"] as const;
export type Diet = (typeof DIET_TAG)[number];
export const isDiet = (diet: string): diet is Diet => DIET_TAG.some((dietTag) => dietTag === diet);

export const DIFFICULTY_TAG = ["facile", "intermediaire", "difficile", "rapide"] as const;
export type Difficulty = (typeof DIFFICULTY_TAG)[number];
export const isDifficulty = (difficulty: string): difficulty is Difficulty =>
  DIFFICULTY_TAG.some((difficultyTag) => difficultyTag === difficulty);

export const SEASON_TAG = ["automne", "hiver", "été", "printemps"] as const;
export type Season = (typeof SEASON_TAG)[number];
export const isSeason = (season: string): season is Season => SEASON_TAG.some((seansonTag) => seansonTag === season);

export const SERVICE_TAG = ["entrée", "plat", "dessert", "soupe", "tarte"] as const;
export type Service = (typeof SERVICE_TAG)[number];
export const isService = (service: string): service is Service =>
  SERVICE_TAG.some((serviceTag) => serviceTag === service);

export type Tag = Cereal | Diet | Difficulty | Season | Service;
