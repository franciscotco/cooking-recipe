export const formatIngredient = (ingredient: string): string[] => {
  return ingredient.trim().replaceAll("\n\n", "\n").split("\n");
};

export const formatPreparation = (preparation: string): string[] => {
  return preparation.trim().replaceAll("\n\n", "\n").split("\n");
};
