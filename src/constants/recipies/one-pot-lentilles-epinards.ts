import { Recipe } from "@src/interfaces/recipies.interfaces";

export const ONE_POT_LENTILLES_EPINARDS = {
  name: "One pot lentilles et épinards",
  url: "https://menu-vegetarien.com/one-pot-lentilles-epinards/",
  image: "https://menu-vegetarien.com/wp-content/uploads/2019/01/recette-vegetarienne-one-pot-lentilles-epinards.jpg",
  tag: {
    cereal: ["légumineuse"],
    diet: ["végétarien"],
    difficulty: ["facile"],
    season: ["hiver", "automne"],
    service: ["plat"]
  },
  ingredient: `30 ml huile d’olive
1/2 oignon, haché
300 g carotte, pelées et coupées en dés
2 branche de céleri, coupées en morceaux
20 cl vin blanc
250 g lentilles vertes, rincées
300 g pomme de terre, coupées en morceaux
1 l bouillon de légumes
1 feuille laurier
2 brin de thym
2 càs persil
20 cl crème liquide
300 g épinards, hachés`,
  preparation: `Faire chauffer l’huile d’olive dans une sauteuse. Ajouter l’oignon, les carottes et le céleri. Cuire 10 minutes. Ajouter le vin et laisser évaporer.
Ajouter les lentilles, les pommes de terre et le bouillon. Ajouter le laurier, le persil et le thym. Laisser mijoter à couvert environ 30 minutes, en remuant de temps en temps, en ajoutant plus de bouillon si nécessaire pour que les lentilles soient à peine recouvertes de liquide.
Lorsque les lentilles et les pommes de terre sont tendres, les écraser légèrement pour obtenir un mélange crémeux.
Enlever les herbes, ajouter la crème liquide et les épinards. Mélanger, assaisonner et servir.
`,
  metadata: {
    preparation: {
      time: 50,
      unit: "minute"
    },
    ingredients: [
      {
        name: "huile d’olive",
        unit: "ml",
        amount: 30
      },
      {
        name: "oignon",
        amount: 0.5,
        description: "haché"
      },
      {
        name: "carotte",
        amount: 300,
        unit: "g",
        description: "pelées et coupées en dés"
      },
      {
        name: "vin blanc",
        amount: 200,
        unit: "ml"
      },
      {
        name: "lentilles vertes",
        amount: 250,
        unit: "g",
        description: "rincées"
      },
      {
        name: "pomme de terre",
        amount: 300,
        unit: "g",
        description: "coupées en morceaux"
      },
      {
        name: "bouillon de légumes",
        amount: 1,
        unit: "l"
      },
      {
        name: "feuille de laurier",
        amount: 1
      },
      {
        name: "brin de thym",
        amount: 2
      },
      {
        name: "persil",
        amount: 2,
        unit: "càs"
      },
      {
        name: "crème liquide",
        amount: 200,
        unit: "ml"
      },
      {
        name: "épinards",
        amount: 300,
        unit: "g"
      }
    ],
    steps: [
      "Faire chauffer l’huile d’olive dans une sauteuse. Ajouter l’oignon, les carottes et le céleri. Cuire 10 minutes. Ajouter le vin et laisser évaporer.",
      "Ajouter les lentilles, les pommes de terre et le bouillon. Ajouter le laurier, le persil et le thym. Laisser mijoter à couvert environ 30 minutes, en remuant de temps en temps, en ajoutant plus de bouillon si nécessaire pour que les lentilles soient à peine recouvertes de liquide.",
      "Lorsque les lentilles et les pommes de terre sont tendres, les écraser légèrement pour obtenir un mélange crémeux.",
      "Enlever les herbes, ajouter la crème liquide et les épinards. Mélanger, assaisonner et servir."
    ]
  }
} as const satisfies Recipe;
