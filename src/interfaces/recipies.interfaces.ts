import { Cereal, Diet, Difficulty, Season, Service } from "../constants/recipies-tags";

type LiquidUnit = "ml" | "l";
type SolideUnit = "g";
type DosageUnit = "càs";
type IngredientUnit = LiquidUnit | SolideUnit | DosageUnit;

interface Ingredient {
  amount: number;
  name: string;
  unit?: IngredientUnit;
  description?: string;
}

export interface Recipe {
  name: string;
  url: string;
  image?: string;
  tag: {
    cereal: Readonly<Cereal[]>;
    diet: Readonly<Diet[]>;
    difficulty: Readonly<Difficulty[]>;
    season: Readonly<Season[]>;
    service: Readonly<Service[]>;
  };
  ingredient: string;
  preparation: string;
  metadata?: {
    preparation: {
      time: number;
      unit: "minute" | "hour";
    };
    ingredients: Readonly<Ingredient[]>;
    steps: Readonly<string[]>;
  };
}
