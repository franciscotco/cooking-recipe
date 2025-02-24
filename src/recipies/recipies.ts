import { Recipe } from "../interfaces/recipies.interfaces";

import { ONE_POT_LENTILLES_EPINARDS } from "./one-pot-lentilles-epinards";

export const RECIPIES: Recipe[] = [
  ONE_POT_LENTILLES_EPINARDS,
  {
    name: "Soupe de lentilles corail",
    url: "https://vegan-pratique.fr/recettes/soupe-aux-lentilles-corail/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2018/04/soupe-lentilles-corail-1240x827.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile", "rapide"],
      season: ["hiver", "automne"],
      service: ["plat", "soupe"]
    },
    ingredient: `225 g d’oignon haché (1 oignon et demi)
1 càs d’huile
1 carotte en rondelles
1 litre d’eau
1 cube de bouillon de légumes
225 g de lentilles corail`,
    preparation: `
Dans une casserole, faire cuire les oignons avec les carottes dans l’huile jusqu’à ce qu’ils soient tendres.

Pendant ce temps, bien rincer les lentilles (pas besoin de trempage).

Ajouter l’eau, les cubes de bouillon et les lentilles, cuire jusqu’à ce que les lentilles soient tendres (environ 20 minutes).

Mixer (optionnel).`
  },
  {
    name: "Curry patates douces pois chiches",
    url: "https://vegan-pratique.fr/recettes/curry-de-patates-douces-et-pois-chiches/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2019/08/curry-patates-douces-pois-chiches-vegan.jpeg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["hiver", "automne"],
      service: ["plat"]
    },
    ingredient: `2 oignons
2 gousses d’ail
1 morceau de gingembre
1 càs de graines de cumin, ou cumin en poudre
1 ou 2 càs de curry
Piment en poudre au goût
750 g de patates douces pelées et coupées en petits morceaux
1 grosse boîte de pois chiches
1 boîte de dés de tomates ou de chair de tomates
½ briquette de lait de coco
Coriandre fraîche ou, si vous n’aimez pas, du persil frais`,
    preparation: `Couper les oignons en petits morceaux et les faire revenir dans de l’huile d’olive, dans une cocotte à fond épais, jusqu’à ce qu’ils soient bien dorés.

Émincer le gingembre et l’ail, puis les ajouter dans la cocotte. Faire dorer à feu doux.

Ajouter le cumin et le faire dorer jusqu’à ce qu’il sente bon.

Mettre dans la cocotte l’ensemble des autres ingrédients, à l’exception de la coriandre et du lait de coco. Laisser mijoter à feu très doux 45 min.

En fin de cuisson, ajouter le lait de coco. Bien mélanger.

 Avant de servir, ajouter la coriandre ciselée.`
  },
  {
    name: "Boulgour aux lentilles corail et courge",
    url: "https://menu-vegetarien.com/boulgour-lentilles-corail-courge/",
    image:
      "https://menu-vegetarien.com/wp-content/uploads/2018/09/recette-vegetarienne-boulgour-lentilles-corail-courge.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["hiver", "automne"],
      service: ["plat"]
    },
    ingredient: `30 ml huile d'olive
1 oignon, émincé
1 gousse d'ail, écrasée
400 g courge musquée, coupée en dés
1/2 càc cumin
1/2 càs coriandre
1/2 càc curcuma
400 g tomates concassées
150 g lentilles corail
200 g boulgour
3 càs menthe fraiche, hachée`,
    preparation: `Faire chauffer l’huile d’olive dans une sauteuse, ajouter l’oignon, l’ail et la courge butternut et cuire environ 2 minutes, en remuant.
Ajouter le cumin, la coriandre, le curcuma, les tomates concassées, mélanger, ajouter les lentilles et le boulgour, mélanger.
Mouiller à hauteur, mélanger et saler. Couvrir et laisser cuire à feu moyen pendant 20 minutes ou jusqu'à ce que la courge soit cuite. Ajouter la menthe et cuire encore 5 minutes puis servir.`
  },
  {
    name: "Purée de pois cassés",
    url: "https://vegan-pratique.fr/recettes/puree-de-pois-casses/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2017/03/Purée-pois-cassés-1240x827.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile", "rapide"],
      season: ["hiver", "automne", "printemps"],
      service: ["plat", "soupe"]
    },
    ingredient: `300 g de pois cassés crus
1 oignon
2 carottes
Sel, poivre
1 càc de bouillon de légumes en poudre
1 càs d’huile
1 bouquet garni`,
    preparation: `Faire revenir dans une cocotte les oignons émincés et les carottes coupées en rondelle pendant 10 mn.

Ajouter les pois cassés, l’oignon et le bouillon de légumes en poudre.

Poivrer, recouvrir d’eau froide et ajouter le bouquet garni.

Cuire à couvert 1h.

Enlever le bouquet garni puis passer au mixeur.`
  },
  {
    name: "Velouté de pois cassés et poireaux",
    url: "https://vegan-pratique.fr/recettes/veloute-de-pois-casses-poireaux/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2018/03/veloute-pois-casses-poireaux.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["hiver", "automne"],
      service: ["plat", "soupe"]
    },
    ingredient: `le vert de 3 poireaux
100 g de pois cassés
2 carottes blanches (ou oranges)
1 bouquet garni
1 pointe de curcuma
quelques graines
un peu de crème végétale
sel, poivre
noix de muscade`,
    preparation: `Environ 4 heures avant la réalisation de la soupe, faire tremper les pois cassés dans de l’eau.

Laver les verts de poireaux et les émincer très finement.
Laver les carottes et les couper en tronçons.

Rincer les pois-cassés et égoutter.

Mettre tous les légumes dans une casserole et couvrir d’eau bouillante.
Ajouter le bouquet garnis et laisser mijoter sous couvert à feu moyen pendant 40 min.

Retirer le bouquet et mixer la soupe.

Ajouter le curcuma, de la noix de muscade (selon convenance), du sel, poivre.
Servir avec de la crème végétale et saupoudrer de graines.`
  },
  {
    name: "Haricots blancs d’hiver",
    url: "https://menu-vegetarien.com/haricots-blancs-hiver/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2021/01/recette-vegetarienne-haricots-blancs-hiver.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["hiver"],
      service: ["plat"]
    },
    ingredient: `30 ml huile d’olive
1 oignon, émincé
2 gousse d'ail, écrasées
1 càs Thym
800 g haricots blancs cuits, égouttés et rincés
25 cl bouillon de légumes
150 g épinards, hachés
150 g chou kale, haché
0,5 càc fumée liquide
1 càs vinaigre de cidre
4 tranches pain de campagne`,
    preparation: `Faire chauffer l'huile dans une poêle. Ajouter l'oignon, l'ail et le thym, cuire 5 minutes.
Ajouter les haricots blancs, le bouillon de légumes, saler, porter à ébullition. Réduire le feu, couvrir la casserole et laisser mijoter 5 minutes. Retirer le couvercle et cuire encore 5 minutes. Ecraser certains haricots pour une texture crémeuse. Ajouter la fumée liquide..
Ajouter le chou kale et les épinards, jusqu'à ce qu'ils flétrissent. Ajouter le vinaigre de cidre, du sel et du poivre.
Pendant ce temps, faire griller les tranches de pain.
Servir chaud.`
  },
  {
    name: "Ragoût de pois cassés",
    url: "https://menu-vegetarien.com/ragout-pois-casses/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2024/12/recette-vegan-ragout-pois-casses.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["hiver", "automne"],
      service: ["plat"]
    },
    ingredient: `15 ml huile d’olive
1 oignon, émincé
150 g carotte, coupée en dés
1 branche de céleri, coupée en dés
2 gousse d'ail, hachées
1 feuille de laurier
1 càc paprika
1 càc cumin
200 g pois cassés, rincés
400 g tomates concassées
1/2 citron, (le jus)
1 l bouillon de légumes`,
    preparation: `Faire chauffer l'huile d'olive dans une cocotte minute, ajouter l'oignon, la carotte et le céleri et laisser cuire pendant 4 minutes en remuant régulièrement.
Ajouter le reste des ingrédients, mélanger, fermer la cocotte et cuire 30 minutes.
`
  },
  {
    name: "Marmite de betteraves et champignons, façon bourguignon",
    url: "https://menu-vegetarien.com/marmite-betteraves-champignons-facon-bourguignon/",
    image:
      "https://menu-vegetarien.com/wp-content/uploads/2018/11/recette-vegetarienne-marmite-betteraves-champignons-facon-bourguignon.jpg",
    tag: {
      cereal: [],
      diet: ["végan"],
      difficulty: ["difficile"],
      season: ["hiver", "automne"],
      service: ["plat"]
    },
    ingredient: `Le ragoût
30 ml huile d’olive
1 oignon jaune, haché
3 gousse d'ail, émincées
2 betterave, pelées et coupées en quartiers
250 g carotte, coupées en gros morceaux
2 brin de thym
2 càs concentré de tomates
25 cl vin rouge
50 cl bouillon de légumes
3 feuille de laurier
Les champignons
30 ml huile d’olive
250 g champignons de Paris, coupés en tranches épaisses
3 champignon Portobello, coupés en tranches épaisses
100 g oignon grelot, pelés
Les lentilles
200 g lentilles vertes`,
    preparation: `Faire chauffer l'huile d'olive dans une cocotte en fonte. Ajouter l'oignon et l'ail, faire sauter jusqu'à tendreté. Ajouter les betteraves, les carottes, le thym, saler, poivrer et cuire pendant 5 minutes. Incorporer le concentré de tomates, le vin rouage, le bouillon de légumes et les feuilles de laurier, et laisser mijoter 40 minutes.
Pendant ce temps, cuire les lentilles selon les indications du paquet ou 20 minutes.
Faire chauffer l'huile d'olive des champignons dans une casserole. Ajouter les portobellos, les champignons de Paris et les oignons, en remuant de temps en temps, jusqu'à ce qu'ils soient tendres et dorés. Assaisonner.
Ajouter les lentilles, les champignons et les oignons dans la cocotte en fonte et laisser mijoter encore 10 minutes. Servir très chaud.
`
  },
  {
    name: "Ragoût lentilles pommes de terre",
    url: "https://menu-vegetarien.com/ragout-lentilles-pommes-terre/",
    image:
      "https://menu-vegetarien.com/wp-content/uploads/2020/01/recette-vegetarienne-ragout-lentilles-pommes-terre.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["hiver"],
      service: ["plat"]
    },
    ingredient: `15 ml huile d’olive
1 oignon, émincé
500 g pomme de terre, coupées en morceaux
250 g carotte, coupées en rondelles
2 gousse d'ail, émincées
1 càs romarin
0,5 càc paprika
0,25 càc piment de Cayenne
2 càs vinaigre de cidre
750 ml bouillon de légumes
200 g lentillons de France
1 càs sirop d'agave
0,5 càs Moutarde
1 càs thym
100 g épinards`,
    preparation: `Faire chauffer l'huile à feu moyen dans une grande casserole. Ajouter l'oignon, cuire 3 minutes, ajouter les pommes de terre et les carottes, cuire 5 minutes jusqu'à ce qu'elles soient légèrement dorées. Ajouter l'ail, le romarin et les épices, cuire 1 minute. Ajouter le vinaigre de cidre, et mélanger.
Ajouter le bouillon de légumes, les lentilles, cuire 20 minutes, jusqu'à ce que tout soit cuit. 2 minutes avant la fin, ajouter le sirop d'agave, la moutarde, le thym et les épinards. Bien mélanger, rectifier l'assaisonnement et servir.`
  },
  {
    name: "Lentilles à la marocaine",
    url: "https://vegan-pratique.fr/recettes/lentilles-a-la-marocaine",
    image: "https://vegan-pratique.fr/wp-content/uploads/2022/12/Lentiles_Marocaine_Image.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile", "rapide"],
      season: ["automne", "hiver", "printemps", "été"],
      service: ["plat"]
    },
    ingredient: ``,
    preparation: ``
  },
  {
    name: "Soupe épicée aux légumes racines d’hiver",
    url: "https://menu-vegetarien.com/soupe-epicee-aux-legumes-racines-dhiver/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2017/11/soupe-epicee-legumes-racines.jpg",
    tag: {
      cereal: [],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["hiver", "automne"],
      service: ["plat", "soupe"]
    },
    ingredient: `1 oignon, haché grossièrement
2 gousse d'ail, hachées grossièrement
15 ml huile d’olive
400 g courge
250 g patate douce
300 g carotte
1,25 l bouillon de légumes
1 càc cumin
1/2 càc cannelle
1/2 càc muscade
250 ml lait d'amande`,
    preparation: `Peler les légumes et les couper en petits morceaux.
Faire chauffer l'huile dans une casserole. Ajouter l'oignon et l'ail. Faire revenir 2 minutes. Ajouter le reste des ingrédients (légumes, épices, lait) et laisser mijoter pendant 30 minutes.
Mixer jusqu'à obtenir une consistance lisse, assaisonner.`
  },
  {
    name: "Velouté de chou fleur au cumin",
    url: "https://vegan-pratique.fr/recettes/veloute-de-chou-fleur-cumin/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2017/09/veloute-chou-fleur.jpg",
    tag: {
      cereal: [],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `Un bel oignon
Une pomme de terre
Une ou deux cuillères à café de graines de cumin ou de cumin en poudre
Un chou-fleur
De l’huile d’olive
200 millilitres de crème végétale (type soja cuisine)
600ml d’eau (ou plus en fonction de votre casserole et de l’épaisseur désirée pour le velouté)`,
    preparation: `Émincer l’oignon et le faire revenir dans une cocotte à fond épais, dans de l’huile d’olive, à feu doux, jusqu’à ce qu’il soit translucide.

Pendant ce temps, préparer le chou-fleur, en ôtant les feuilles et en séparant les fleurettes du tronc (conserver les fleurettes pour une autre recette).

Hacher les feuilles et le tronc finement, et rajouter les morceaux dans la cocotte.

Peler et couper en petits morceaux la pomme de terre et ajouter dans la cocotte.

Rajouter de l’eau, environ 600 millilitres (ou plus, l’idée c’est de recouvrir les légumes) et faire cuire à petit bouillon pendant 30 minutes.

Ajouter la crème végétale puis mixer afin d’obtenir un joli velouté. Rajouter de l’eau au besoin, si vous voulez un velouté plus liquide.

Servir le velouté parsemé de graines de cumin.`
  },
  {
    name: "Velouté au potimarron, châtaignes et romarin",
    url: "https://vegan-pratique.fr/recettes/veloute-potimarron-chataignes-romarin/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2018/02/veloute-potimarron.jpg",
    tag: {
      cereal: [],
      diet: ["végan"],
      difficulty: ["facile", "rapide"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `½ potimarron (500 g)
150 g de châtaignes
1 tige de romarin frais ou séché
½ cube de bouillon de légumes
Crème végétale
Noix de muscade et 4 épices
Sel, poivre`,
    preparation: `Peler le potimarron, retirer les graines et le couper en cubes.
Mettre le potimarron avec le romarin, le bouillon et les châtaignes dans une casserole (garder quelques châtaignes pour la décoration).
Recouvrir d’eau et laisser mijoter sous couvert pendant 20 min.

Mixer le tout finement, assaisonner d’épices, sel et poivre.
Ajouter un généreux filet de crème végétale.
Servir de suite avec davantage de crème végétale et les quelques châtaignes restantes concassées.`
  },
  {
    name: "Tarte tatin aux carottes",
    url: "https://menu-vegetarien.com/tarte-tatin-carottes/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2018/03/recette-vegetarienne-tatin-carottes.jpg",
    tag: {
      cereal: [],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["hiver", "printemps", "été", "automne"],
      service: ["plat", "tarte"]
    },
    ingredient: `45 ml huile d’olive
350 g carotte
2 càs eau
1 càc cannelle
1 brin Thym, émietté
1 càs miel
2 càs vinaigre balsamique
1 pâte feuilletée`,
    preparation: `Pré-chauffer le four à 180°C.
Laver et éplucher les carottes, les couper en tranches en diagonale.
Faire chauffer l'huile dans une poêle. Mettre les carottes avec l'eau, la cannelle, le thym, le miel et le vinaigre balsamique et cuire à feu doux jusqu'à ce que que les carottes soient légèrement molles et l'eau évaporée. Environ 5 minutes.
Mettre une feuille de papier cuisson au fond d'un plat à tarte. Déposer les carottes et couvrir avec la pâte feuilletée en rentrant bien les bords. Piquer la pâte et faire cuire 30 minutes.
Retirer le plat du four, le laisser refroidir quelques minutes puis retourner la tarte sur un plat de service.
Servir chaud ou tiède avec quelques brins de thym frais.`
  },
  {
    name: "Quiche fondante aux poireaux",
    url: "https://vegan-pratique.fr/recettes/quiche-fondante-aux-poireaux/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2018/10/quiche-fondante-aux-poireaux-1100x733.jpg",
    tag: {
      cereal: [],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "tarte"]
    },
    ingredient: `1 pâte feuilletée vegan
500 g de poireaux (surgelés ou frais)
40 cl (2 briques) de crème végétale au choix (soja, amande ou autre)
3 càs de fécule de maïs (type Maïzena)
Huile végétale
Sel`,
    preparation: `Laver et couper en morceaux les poireaux. Les faire revenir 15 minutes avec du sel et une peu d’huile dans une poêle.

Délayer la fécule dans un peu de crème végétale, puis ajouter la totalité de la crème et du sel. On peut aussi utiliser un mixeur.

Étaler la pâte feuilletée dans un moule à tarte, ajouter les poireaux puis recouvrir avec le mélange fécule/crème végétale.

Cuire au four à 180°C entre 30 et 45 min.`
  },
  {
    name: "Velouté de carottes au cumin et à l’ail",
    url: "https://vegan-pratique.fr/recettes/veloute-de-carottes-cumin-a-lail/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2017/03/Velout%C3%A9-de-carottes-cumin-ail-2-1240x827.jpg",
    tag: {
      cereal: [],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `1 kg de carottes
2 càc d’ail coupé surgelé
2 càc de cumin en poudre
2 cubes de bouillon de légumes
2 càs à soupe de crème de soja
Poivre`,
    preparation: `Mettre à chauffer l’eau, le cube de bouillon, les carottes coupées en morceaux.

Ajouter, l’ail, le cumin et le poivre au goût.

Laisser cuire environ 50 min (il faut que les carottes soient tendres) ou 30 min dans un autocuiseur.

Ajouter la crème.

Mixer le tout, et déguster !`
  },
  {
    name: "Potimarron farci aux champignons et marrons",
    url: "https://vegan-pratique.fr/recettes/potimarron-farci-aux-champignons-marrons/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2016/12/potimarron-farci.jpg",
    tag: {
      cereal: [],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `4 petits potimarrons
4 gousses d’ail, pelées et hachées finement
4 échalotes, pelées et hachées finement
4 c. à soupe d’huile d’olive
800 g de champignons (de Paris ou de cèpes), lavés et séchés
200 g de marrons entiers (châtaignes) en bocal
8 c. à soupe de crème végétale, au choix
1 belle poignée de noisettes, préalablement concassées
Quelques graines germées
Un petit bouquet de persil, lavé et ciselé`,
    preparation: `Préchauffer votre four à 180 °C (th. 6).

Pendant ce temps, laver les potimarrons puis les couper en deux, dans le sens de la hauteur. Enlever les graines (à l’aide d’une grande cuillère par exemple).

Mettre les moitiés de potimarrons dans un plat (ou sur la plaque du four préalablement recouverte de papier cuisson), faire cuire pendant 30 minutes.

Faire chauffer l’huile d’olive dans une sauteuse et faire revenir l’ail et les échalotes pendant 3 minutes environ, à feu moyen.

Ajouter les champignons coupés en lamelles. Mettre un couvercle et cuire encore 5 minutes.

Hacher les marrons et les ajouter aux autres légumes. Continuer de cuire, sans couvercle, jusqu’à ce que toute l’eau rendue par les champignons se soit évaporée (3 à 4 minutes environ).

Verser finalement la crème végétale. Remuer pour répartir sur l’ensemble de la garniture. Cuire encore quelques brèves minutes.

Utiliser cette farce pour garnir les potimarrons sortis du four. Répartir ensuite dessus les noisettes concassées.

Remettre les potimarrons farcis au four et cuire 15 à 20 minutes.

Servir aussitôt et décorer de quelques graines germées et de persil haché.`
  },
  {
    name: "Pâtes au chou-fleur, sauce citron-amande",
    url: "https://menu-vegetarien.com/pates-chou-fleur-sauce-citron-amande/",
    image:
      "https://menu-vegetarien.com/wp-content/uploads/2018/09/recette-vegetarienne-pates-chou-fleur-sauce-citron-amandes.jpg",
    tag: {
      cereal: ["blé"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `600 g chou-fleur, (les fleurettes)
60 ml huile d’olive
280 g fettuccini
1 échalote, émincée
30 cl lait d'amande
1 càs fécule de maïs
1/2 citron, (zeste et jus)
40 g amandes, concassées`,
    preparation: `Préchauffer le four à 200°C. Mettre le chou-fleur dans un saladier, arroser de la moitié de l'huile d'olive, saler, poivrer et bien mélanger. Déposer sur la plaque du four recouverte de papier cuisson et cuire 25 minutes.
Pendant ce temps, cuire les pâtes selon les indications du paquet. Égoutter et remettre dans la casserole.
Dans un bol, mélanger la fécule avec un peu de lait d'amandes jusqu'à ce qu'elle soit dissoute. Dans une casserole, faire chauffer le reste d'huile d'olive. Ajouter l'échalote et cuire 3 minutes. Ajouter le lait d'amande. Verser la fécule dissoute dans la casserole avec les échalotes et bien fouetter jusqu'à ce que le mélange commence à épaissir. Retirer du feu et ajouter le jus de citron, le zeste, saler, poivrer.
Ajouter le chou-fleur rôti aux pâtes et verser la sauce, mélanger. Servir avec les amandes.`
  },
  {
    name: "Soupe de pâtes aux pois chiches",
    url: "https://menu-vegetarien.com/soupe-pates-pois-chiches/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2018/11/recette-vegetarienne-soupe-pates-pois-chiches.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végétarien"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `15 ml huile d’olive
1/2 oignon, émincé
2 branche de céleri, coupées en morceaux
250 g carotte, coupées en dés
200 g pâtes
300 g pois chiches cuits
1 l bouillon de légumes
60 g parmesan
2 càs persil, haché`,
    preparation: `Faire chauffer l'huile d'olive dans une casserole. Ajouter l'oignon, cuire 3 minutes, ajouter le céleri, les carottes, cuire 5 minutes. Ajouter le bouillon et les pois chiches, cuire 5 minutes.
Enlever la moitié des pois chiches et réduire en purée ce qui reste dans un casserole. Remettre les autres, ajoutes les pâtes et cuire 10 minutes. Assaisonner. Servir avec le parmesan et le persil.`
  },
  {
    name: "Nouilles udon aux épices",
    url: "https://menu-vegetarien.com/nouilles-udon-epices/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2018/07/recette-vegan-nouilles-udon-epices.jpg",
    tag: {
      cereal: ["blé"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `400 g nouilles udon
30 ml huile d’olive
1 oignon, émincé
400 g carotte, coupées en bâtonnets
2 oignon vert, coupés en diagonale (le vert)
300 g épinards
2 càs graines de sésame
Sauce
1 càs vinaigre de riz
10 cl sauce soja
1 càs huile de sésame
4 càs sucre brun
2 gousse d'ail, hachées
1 càc gingembre, haché`,
    preparation: `Cuire les nouilles udon selon les indications du paquet ou 10 minutes. Fouetter ensemble les ingrédients de la sauce.
Pendant ce temps, Faire chauffer l'huile dans une poêle ou un wok. Ajouter les carottes et cuire, en remuant, pendant une minute ou deux. Ajouter l'oignon et cuire, en remuant, environ 5 minutes. Ajouter l'oignon vert et cuire, en remuant, pendant 30 secondes.
Ajouter les nouilles égouttées puis la sauce et cuire encore 30 secondes, en remuant bien pour bien mélanger. Ajouter les épinards sur le dessus et cuire en remuant constamment jusqu'à ce qu'ils soient flétris.
Servir avec les graines de sésame.`
  },
  {
    name: "Lasagne végé au tofu et aux épinards",
    url: "https://www.ricardocuisine.com/recettes/9389-lasagne-vege-au-tofu-et-aux-epinards",
    image: "https://images.ricardocuisine.com/services/recipes/992x1340_9389.jpg",
    tag: {
      cereal: ["blé"],
      diet: ["végétarien"],
      difficulty: ["intermediaire"],
      season: ["hiver", "printemps", "été", "automne"],
      service: ["plat"]
    },
    ingredient: `Sauce

1 oignon, haché finement

2 gousses d’ail, hachées

45 ml (3 c. à soupe) d’huile d’olive

2 bouteilles de 680 ml de coulis de tomates

250 ml (1 tasse) de bouillon de légumes

2,5 ml (1/2 c. à thé) d’origan séché

1 ml (1/4 c. à thé) de flocons de piment broyé
Garniture

225 g (1/2 lb) de tofu mi-ferme, épongé

1 paquet de 500 g d’épinards surgelés, décongelés et pressés

1 contenant de 300 g de fromage ricotta

20 g (1/4 tasse) de fromage parmesan frais, râpé finement
Lasagne

12 pâtes à lasagne, cuites al dente

400 g (14 oz) de fromage caciocavallo, râpé

20 g (1/4 tasse) de fromage parmesan frais, râpé finement`,
    preparation: `Sauce

Dans une casserole à feu moyen, attendrir l’oignon et l’ail dans l’huile 5 minutes. Ajouter le reste des ingrédients. Porter à ébullition et laisser mijoter 15 minutes en remuant fréquemment. Saler et poivrer. Réserver au chaud.
Garniture

Entre-temps, dans un bol, écraser grossièrement le tofu à l’aide d’une fourchette. Ajouter le reste des ingrédients. Saler, poivrer et bien mélanger.
Lasagne

Placer la grille au centre du four. Préchauffer le four à 190 °C (375 °F).

Dans un plat de cuisson de 33 x 23 cm (13 x 9 po), étaler 250 ml (1 tasse) de la sauce. Couvrir d’un rang de pâtes. Répartir la moitié de la garniture aux épinards et étaler 250 ml (1 tasse) de la sauce. Parsemer de 50 g (1/2 tasse) de caciocavallo. Couvrir d’un rang de pâtes. Étaler 500 ml (2 tasses) de la sauce. Parsemer de 50 g (1/2 tasse) de caciocavallo. Couvrir d’un rang de pâtes. Répartir le reste de la garniture aux épinards et étaler 250 ml (1 tasse) de la sauce. Parsemer de 50 g (1/2 tasse) de caciocavallo. Couvrir d’un dernier rang de pâtes et étaler le reste de la sauce. Répartir le parmesan et le reste du caciocavallo. Congeler à cette étape, si désiré. Déposer le plat sur une plaque de cuisson.

Cuire au four 35 minutes. Laisser reposer 10 minutes avant de servir la lasagne.`
  },
  {
    name: "Minestrone à l’italienne",
    url: "https://vegan-pratique.fr/recettes/minestrone-a-litalienne/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2016/06/Minestrone-1100x733.jpg",
    tag: {
      cereal: ["blé"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `160 g de céleri branche (environ 3 branches)
2 belles carottes
40 g de pousses d’épinard
2 gousses d’ail
1 petit oignon rouge
1 boîte de haricots rouges
400 g de tomates concassées
1 càs de concentré de tomate
150 g de petites pâtes de votre choix
3 branches de thym
4 belles feuilles de sauge
1 l de bouillon de légumes
2 pains ciabatta + 2 gousses d’ail
1 sachet de pâtes
`,
    preparation: `Lavez vos céleris branches et vos carottes, puis coupez-les en petits morceaux. Coupez vos oignons en lamelles et hachez les deux gousses d’ail. Versez un peu d’huile d’olive dans une casserole en fonte (ou une cocotte) et faites revenir légumes, oignons et ail en remuant fréquemment jusqu’à ce qu’ils soient tendres mais encore croquants.

Ajoutez ensuite les tomates concassées, le bouillon de légumes, les aromates, salez, poivrez, puis couvrez et laissez mijoter à feux doux pendant environ 10 bonnes minutes.

Coupez vos deux pains ciabatta en tranches. Dans une coupelle, versez un fond d’huile d’olive et les gousses d’ail hachées. Trempez-y vos tranches de pain. Préchauffez votre four à 200 °C.

Ajoutez les pâtes à votre minestrone, les haricots, les pousses d’épinard et faites cuire à découvert pendant 7-10 minutes jusqu’à ce que les pâtes soient al dente. 5 minutes avant la fin de cuisson de votre minestrone, enfournez vos petits pains pendant 5 petites minutes jusqu’à ce qu’ils soient bien dorés et croustillants.

Les petites pâtes ont tendance à absorber le bouillon, c’est donc mieux de les ajouter au dernier moment, lorsque vous êtes prêt à déjeuner.`
  },
  {
    name: "Sauce bolognaise vegan",
    url: "https://vegan-pratique.fr/recettes/sauce-bolognaise-vegan/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2017/07/bolognaise2-1240x1860.jpg",
    tag: {
      cereal: ["blé"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["hiver", "printemps", "été", "automne"],
      service: ["plat"]
    },
    ingredient: `125g de protéines de soja texturées de petite taille (poids sec)
2 oignons
2 gousses d’ail
2 cuillères à soupe d’huile d’olive
800 ml de coulis de tomates
400 ml d’eau
2 càs d’origan ou d’herbes de Provence
1 càc de sel
Poivre du moulin
1 petit pot de caviar de tomates (optionnel)
1 càc de coriandre moulue (optionnel)`,
    preparation: `Hacher les oignons et émincer l’ail.

Dans une cocotte à fond épais, les faire revenir dans l’huile d’olive, à feu doux, jusqu’à ce que les oignons soient translucides.

Ajouter l’origan (ou les herbes de Provence), le sel, la coriandre, le poivre, et bien mélanger.

Ajouter les protéines de soja et l’eau. Les protéines vont « boire » l’eau et gonfler.

Quand l’eau est absorbée, ajouter le coulis de tomates (et le caviar de tomates si vous le souhaitez).

Faire cuire à feu très doux, à couvert, en remuant régulièrement, au moins 30 min pour une bonne diffusion des arômes, en rajoutant un peu d’eau en cours de cuisson au besoin.

Goûter et rectifier éventuellement l’assaisonnement.

`
  },
  {
    name: "Gnocchi et légumes poêlés",
    url: "https://vegan-pratique.fr/recettes/gnocchi-et-legumes-poeles/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2019/08/gnocchi-legumes-poeles.jpg",
    tag: {
      cereal: [],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["hiver", "automne"],
      service: ["plat"]
    },
    ingredient: `500 g de champignons frais au choix
150 d’épinards surgelés
1 tasse de petits pois surgelés
1 gousse d’ail ou ail en poudre
8 tomates séchées
1 càs de persil haché
1 cube de bouillon de légumes
2 càs d’huile d’olive
500 g de gnocchi de pomme de terre
Sel et poivre
Graines de sésame (facultatif)`,
    preparation: `Laver et trancher les champignons.

Faire chauffer une poêle avec un peu d’huile d’olive. Ajouter le persil, l’ail et les tomates séchées coupées en lamelles.

Ajouter les champignons tranchés avec un cube de bouillon de légumes et faire cuire une dizaine de minutes à feu moyen.

Quand les champignons seront devenus tendres, ajouter les épinards et les petits pois. Saler si nécessaire et poivrer, bien mélanger et prolonger la cuisson une dizaine de minutes.

Pendant ce temps, faire chauffer une casserole d’eau salée. Quand l’eau bout, plonger les gnocchi. Leur cuisson est rapide, quelques minutes suffisent.

Égoutter et mélanger avec les légumes.

Saupoudrer de graines de sésame et servir.`
  },
  {
    name: "Riz et haricots rouges à l’espagnole",
    url: "https://menu-vegetarien.com/riz-haricots-rouges-espagnol/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2022/04/recette-vegan-riz-haricots-rouges-espagnole.jpg",
    tag: {
      cereal: ["riz"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["hiver", "automne"],
      service: ["plat"]
    },
    ingredient: `15 ml huile d'olive
1 oignon jaune, émincé
2 gousse d'ail, écrasées
1 càs paprika
1 càs chili
200 g riz basmati
400 g tomates concassées
600 g haricots rouges cuits, égouttés et rincés
60 cl bouillon de légumes
60 g olives vertes, tranchées
La vinaigrette
3 càs persil, ciselé
15 ml jus de citron
30 ml huile d'olive`,
    preparation: `Faire chauffer l'huile d'olive dans une sauteuse. Ajouter l'oignon, cuire 2 minutes, ajouter l'ail, le paprika, le chili, saler poivrer, cuire 2 minutes.
Ajouter le riz, cuire 2 minutes, ajouter les tomates, les haricots rouges, le bouillon de légumes, porter à ébullition, puis réduire à feu moyen et laisser mijoter jusqu'à ce que le bouillon ait été absorbé, 15 à 20 minutes.
Pendant ce temps, préparer la vinaigrette, en mélangeant les ingrédients.
Servir le riz aux haricots rouges, avec les olives verts et arroser de vinaigrette.`
  },
  {
    name: "Velouté de riz noir",
    url: "https://menu-vegetarien.com/veloute-riz-noir/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2018/11/recette-vegetarienne-veloute-riz-noir.jpg",
    tag: {
      cereal: ["riz"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `250 g riz noir, ou sauvage
15 ml huile d'olive
1 oignon, émincé
1 branche de céleri, coupée en dés
150 g carotte, coupée en dés
250 g champignons de Paris
2 gousse d'ail, hachées
2 càs farine
1 l bouillon de légumes
10 cl crème fraîche
2 càs persil, ciselé`,
    preparation: `Cuire le riz selon les indications du paquet.
Pendant ce temps, faire chauffer l’huile d’olive dans une casserole à feu moyen. Ajouter l’oignon, le céleri, la carotte, saler, poivrer et cuire 5 minutes. Incorporer les champignons et cuire 10 minutes. Ajouter l’ail et cuire 1 minute. Incorporer la farine, mélanger, et cuire 2 minutes.
Ajouter le bouillon de légumes et le riz sauvage, mélanger. Porter à ébullition puis réduire et laisser mijoter jusqu’à ce que la soupe épaississe, environ 15 à 20 minutes.
Ajouter la crème fraîche, un peu de persil, rectifier l’assaisonnement et servir.`
  },
  {
    name: "Pad thaï",
    url: "https://vegan-pratique.fr/recettes/pad-thai/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2022/03/pad-thai-1240x930.jpg",
    tag: {
      cereal: ["riz"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `400 g de nouilles de riz
2 petits poireaux
1 cébette (avec ses fanes)
Des pousses de haricots mungo
250 g de tofu nature/fumé
50 g de noix de cajou
2 càs de graines de sésame
Huile d’olive
6 càs de sauce soja
4 càs de sirop d’érable
Piment moulu`,
    preparation: `Laver et émincer finement les poireaux et la cébette – aussi appelée oignon nouveau – avec ses fanes. Laver les pousses de haricots mungo. Couper le tofu en petits dés. Piler grossièrement les noix de cajou.

Tout verser dans une grande poêle ou un wok avec les graines de sésame et faire revenir dans un filet d’huile d’olive, la sauce soja et le sirop d’érable. Dès que ça commence à caraméliser, réduire le feu et couvrir, en remuant de temps en temps.

Cuire les nouilles de riz selon les instructions figurant sur l’emballage.

Une fois égouttées, les verser dans la poêle ou le wok et tout mélanger. Servir avec un morceau de citron, un peu de piment moulu et de coriandre fraîche. C’est prêt !`
  },
  {
    name: "Nasi goreng",
    url: "https://vegan-pratique.fr/recettes/nasi-goreng/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2022/03/nasi-goreng-1240x930.jpg",
    tag: {
      cereal: ["riz"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    350 g de haché végétal
    2 belles échalotes
    3 carottes
    1 poireau ou 1 chou chinois
    400 g de riz basmati
    50 g d’huile d’olive
    3 càs de sauce soja
    2 càs de sumac (épice)
    100 g de concentré de tomate
    `,
    preparation: `
    Cuire le riz basmati dans deux fois son volume d’eau, à la vapeur ou dans une casserole. Réserver au chaud.
    Laver/éplucher et couper les échalotes, les carottes et le poireau ou le chou chinois. Faire revenir dans une grande poêle ou un wok avec le haché végétal, le sumac, l’huile d’olive et la sauce soja.
    Après 10-15 minutes, ajouter le riz cuit et le concentré de tomate dilué dans 2 dl d’eau tiède. Bien mélanger.
    Servir avec un peu de persil frisé.
    `
  },
  {
    name: "Bol épicé au riz, tofu, brocoli et pois chiches grillés",
    url: "https://vegan-pratique.fr/recettes/bol-epice-au-riz-tofu-brocoli-et-pois-chiches-grilles/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2019/12/Bol_epice_riz_brocoli_tofu_pois_chiche_2.jpg",
    tag: {
      cereal: ["riz", "légumineuse"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver", "printemps", "été"],
      service: ["plat"]
    },
    ingredient: `
    100 g de riz (ici riz jasmin)
    500 g de brocoli
    200 g de pois chiches cuits
    100 g de tofu lactofermenté
    2 càs de concentré de tomates
    1 càc de curry
    1 càc de levure maltée
    ½ càc de cumin moulu
    ½ càc de thym
    1 pincée de paprika fumé
    Huile de coco
    Sel & poivre
`,
    preparation: `
Environ 8 à 10 h avant faire tremper le riz dans de l’eau claire (facultatif).
Rincer et le faire cuire environ 15-20 min dans de l’eau bouillante.

Couper le tofu en dés.

Pendant ce temps, laver le brocoli et couper les fleurettes.
Le faire cuire à la vapeur jusqu’à ce qu’il soit tendre.

Faire chauffer l’huile de coco dans une poêle.
Y ajouter les pois chiches, le tofu et le brocoli.
Faire griller quelques instants.

Diluer le concentré de tomates dans environ ½ verre d’eau.
Y ajouter les épices et le thym.
Verser le mélange dans la poêle et bien mélanger afin que tout soit enrobé.

Réduire le feu et laisser la sauce réduire et les légumes caraméliser légèrement.

Servir de suite avec le riz et un peu de crème végétale (coco, riz, soja…).
    `
  },
  {
    name: "Tempeh tandoori et épinards",
    url: "https://vegan-pratique.fr/recettes/tempeh-tandoori-epinards/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2016/06/rosenoisettes-tempeh-tandoori-epinards-1240x1653.jpg",
    tag: {
      cereal: ["riz"],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `


    Pour le tandoori :

    200 g de tempeh nature (en boutique bio)
    125 g de yaourt de soja
    1 càc de jus de citron
    1 càc d’huile d’olive
    1 càs de coriandre émincée
    1/2 oignon émincé
    1 pincée d’ail en poudre
    1 càc de piment doux
    1 càc de cumin moulu
    1/2 càc de sel
    1/4 de càc de cannelle moulue
    1/4 de càc de gingembre moulue
    1 càc de concentré de tomates (facultatif)

Pour la garniture :

    500 g d’épinards
    10 cl de crème de soja
    riz vapeur ou pain pita
    sel, poivre


    `,
    preparation: `


    Couper le tempeh en cubes.

    Dans un bol mélanger le yaourt avec les épices et le reste des ingrédients.

    Bien enrober le tempeh et laisser mariner 1 h.

    Pendant ce temps nettoyer les épinards, les hacher finement.

    Dans une poêle faire cuire les épinards à feu doux puis ajouter la crème et l’assaisonnement.

    Faire chauffer une poêle et y faire dorer le tempeh.

    Servir le tempeh avec les épinards et du riz ou du pain.

  `
  },
  {
    name: "Risotto de millet aux blettes et champignons",
    url: "https://menu-vegetarien.com/risotto-millet-blettes-champignons/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2020/10/recette-vegetarienne-risotto-millet-blettes-1.jpg",
    tag: {
      cereal: ["millet"],
      diet: ["végétarien"],
      difficulty: ["facile", "rapide"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
      350 g blettes
    30 ml huile d’olive
    1 oignon, émincé
    300 g millet
    10 cl vin blanc
    1 l bouillon de légumes
    200 g champignons de Paris, tranchés
    50 g parmesan râpé
  `,
    preparation: `
    Laver les blettes. Séparer les feuilles des côtes. Briser les côtes en deux puis tirer sur la peau d’un côté, puis de l’autre, pour enlever les fibres. Hacher grossièrement les feuilles. Faire blanchir les côtes 10 minutes et les feuilles 3 minutes.
    Faire chauffer la moitié de l'huile d'olive dans une sauteuse, ajouter l'oignon, cuire 2 minutes. Ajouter le millet et mélanger jusqu'à ce qu'il devienne translucide. Déglacer avec le vin blanc jusqu'à évaporation. Ajouter le bouillon, une louche à la fois, jusqu'à ce que le liquide ait été à chaque fois absorbé. Renouveler jusqu'à ce que le millet soit cuit, environ 20 minutes.
    Pendant ce temps, faire chauffer le reste d'huile d'olive dans une poêle. Ajouter les champignons, cuire 5 minutes. Ajouter les côtes et les feuilles de blettes, saler, mélanger, cuire 5 minutes supplémentaire.
    3 minutes avant la fin de la cuisson du millet, ajouter les légumes, mélanger et terminer la cuisson.
    Retirer du feu, ajouter le parmesan, mélanger et servir immédiatement.
    `
  },
  {
    name: "Millet au curry et chou-fleur épicé",
    url: "https://menu-vegetarien.com/millet-curry-chou-fleur-epice/",
    image:
      "https://menu-vegetarien.com/wp-content/uploads/2019/04/recette-vegetarienne-millet-curry-chou-fleur-epice.jpg",
    tag: {
      cereal: ["millet"],
      diet: ["végan"],
      difficulty: ["facile", "rapide"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
Le millet

    200 g millet
    0,25 càc curcuma
    0,25 càs curry
    0,25 càc paprika fumé

Le chou-fleur

    30 ml huile d’olive
    0,5 oignon, émincé
    2 cébette, (blanc et vert séparés) émincées
    250 g chou-fleur, (les fleurettes)
    1 branche de céleri, émincée
    1 gousse d'ail, émincée
    15 cl lait végétal
    50 g noix de cajou
    50 g raisins secs
    0,5 càs sriracha, (à doser selon votre goût)
    `,
    preparation: `
    Cuire le millet selon les indications du paquet ou 20 minutes. Puis ajouter les épices et mélanger.
    Pendant ce temps, faire chauffer l'huile d'olive à feu doux dans une sauteuse. Ajouter l'oignon, le blanc des cébettes, le chou-fleur, le céleri et l'ail. Cuire 5 à 7 minutes.
    Ajouter le lait végétal, les noix de cajou, les raisins secs et la sriracha. Mélange et cuire jusqu'à ce que le chou-fleur soit tendre, environ 5 minutes.
    Servir le millet avec le mélange de chou-fleur et terminer par le vert de cébette.
    `
  },
  {
    name: "Bowl de quinoa aux légumes rôtis",
    url: "https://menu-vegetarien.com/bowl-quinoa-legumes-rotis/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2022/01/recette-vegan-bowl-quinoa-legumes-rotis.jpg",
    tag: {
      cereal: ["quinoa"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    500 g chou-fleur, les fleurettes
    450 g carotte, pelées, coupées en morceaux de 2cm
    30 ml huile d'olive
    1 càc paprika fumé
    1 càc ail en poudre
    0,5 càs cumin
    200 g quinoa
    50 cl bouillon de légumes
    50 g chou kale, tiges enlevées, déchiré
    30 g graines de courge

La sauce

    3 càs tahin
    1 càs vinaigre de cidre
    1 càs sirop d'agave
    1 càs curry
    1 càs curcuma
    `,
    preparation: `
    Préchauffer le four à 210°C.
    Mettre le chou-fleur et la carotte dans un saladier, ajouter l'huile d'olive le paprika fumé, l'ail, le cumin, saler, poivrer, bien mélanger. Les déposer sur la plaque du four recouverte de papier cuisson, cuire 20 à 25 minutes jusqu'à ce qu'ils soient caramélisés.
    Pendant ce temps, cuire le quinoa dans le bouillon de légumes 12 minutes. Ajouter le chou kale 2 minutes avant la fin, mélanger.
    Préparer la sauce. Pour cela, mélanger tous les ingrédients ensemble et ajouter de l'eau petit à petit jusqu'à la consistance désirée. (elle doit être un peu liquide, voir la photo)
    Servir le quinoa avec les légumes rôtis, arroser de sauce et terminer par les graines de courge.
    `
  },
  {
    name: "Quinoa aux légumes d’hiver rôtis",
    url: "https://menu-vegetarien.com/quinoa-legumes-hiver-rotis/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2022/10/recette-vegan-quinoa-legumes-hiver.png",
    tag: {
      cereal: ["quinoa"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    200 trio de quinoa
    30 ml huile d’olive
    150 g carotte, pelée et râpée
    200 g panais, pelé et coupé en morceaux
    250 g patate douce, pelée et coupée en morceaux
    200 g courge musquée, pelée et coupée en morceaux
    2 càs persil, haché
    30 g noix, hachées

La vinaigrette

    60 ml huile d’olive
    3 càs vinaigre de cidre
    1 càs sirop d'érable
    1 càc cannelle
    `,
    preparation: `
    Préchauffez le four à 200°C. Mettre les légumes dans un saladier, arroser d'huile d'olive, saler et bien mélanger. Les placer sur la plaque du four recouverte de papier cuisson et cuire 30 minutes.
    Pendant ce temps, cuire le quinoa selon les indications du paquet. Fouetter ensemble les ingrédients de la vinaigrette avec du sel.
    Servir le quinoa avec les légumes rôtis, le persil, les noix et arroser de vinaigrette.
    `
  },
  {
    name: "Risotto d’orge au chou-fleur",
    url: "https://menu-vegetarien.com/risotto-orge-chou-fleur/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2020/11/recette-vegetarienne-risotto-orge-chou-fleur.jpg",
    tag: {
      cereal: ["orge"],
      diet: ["végétarien"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
Le chou-fleur

    30 ml huile d’olive
    450 g chou-fleur, les fleurettes

L'orge

    15 ml huile d’olive
    1 oignon
    350 g orge mondé
    5 cl vin blanc
    1 l bouillon de légumes
    40 g parmesan râpé
    1 càs ciboulette, ciselée
    `,
    preparation: `
    Faire chauffer l'huile d'olive dans une sauteuse. Ajouter l'oignon jusqu’à ce qu’il soit translucide. Ajouter l’orge et l'enrober d’huile. Ajouter le vin blanc et laisser évaporer complètement.
    Verser une louche de bouillon et cuire en remuant souvent jusqu’à évaporation complète. Recommencer en ajoutant une louche à chaque fois jusqu’à ce que l’orge soit tendre et cuit, environ 45 minutes, vérifier la cuisson.
    Pendant ce temps, préchauffer le four à 200 °C. Mettre les fleurettes de chou-fleur dans un saladier, arroser d'huile d'olive, saler, poivrer puis les déposer sur la plaque du four recouverte de papier cuisson. Cuire 35 minutes.
    Lorsque l'orge est cuit, ajouter le parmesan, bien mélanger. Ajouter le chou-fleur et terminer par la ciboulette.
    `
  },
  {
    name: "Ragoût à l’orge et ail rôti",
    url: "https://menu-vegetarien.com/ragout-orge-ail-roti/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2024/01/recette-vegan-ragout-orge-ail.jpg",
    tag: {
      cereal: ["orge"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    1 tête d’ail
    45 ml huile d’olive
    500 g champignons, tranchés
    300 g carotte, coupées en fines rondelles
    200 g orge perlé
    1 l bouillon de légumes
    15 ml sauce soja
    1 càs vinaigre de cidre
    1 càc Thym
    1 càc romarin
    `,
    preparation: `
    Préchauffer le four à 200°C.
    Couper le dessus de la tête d’ail ainsi que le haut des gousses. La déposer sur la plaque du four recouverte de papier cuisson, arroser d’un peu d’huile d’olive, saler, poivrer et cuire 30 minutes.
    Lorsque l’ail est sur le point d’être prêt, faire chauffer un peu d’huile d’olive dans une sauteuse. Ajouter les champignons et les carottes, cuire 10 minutes où jusqu’à ce que les champignons aient perdu toute leur eau.
    Peler l’ail, presser les gousses et les ajouter dans la sauteuse.
    Ajouter le bouillon de légumes, la sauce soja, le vinaigre de cidre, le thym et le romarin. Mélanger. Ajouter l’orge, assaisonner et cuire 30 minutes.
    `
  },
  {
    name: "Orge et navets rôtis au sésame",
    url: "https://menu-vegetarien.com/orge-navets-rotis-sesame/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2018/10/recette-vegetarienne-navet-rotis-orge.jpg",
    tag: {
      cereal: ["orge"],
      diet: ["végétarien"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    400 g navet, coupés en dés
    1 gousse d'ail, émincé
    15 ml huile d’olive
    2 càs graines de sésame
    2 càs miel, ou sirop d'agave
    30 ml sauce soja
    1 càs coriandre fraîche, hachée
    250 g orge mondé précuit
    `,
    preparation: `
    Préchauffer le four à 180°C. Mettre les navet dans un saladier, ajouter l'ail, l'huile d'olive, les graines de sésame, le miel, saler, poivrer et mélanger. Les déposer sur la plaque du four recouverte de papier cuisson et cuire au four pendant 25-30 minutes.
    Pendant ce temps, cuire l'orge mondé selon les indications du paquet ou 30 minutes.
    Retirer les navets du four et ajouter la sauce soja et la coriandre, servir avec l'orge.
    `
  },
  {
    name: "Orge au potimarron et champignons",
    url: "https://menu-vegetarien.com/orge-potimarron-champignons/",
    image:
      "https://menu-vegetarien.com/wp-content/uploads/2018/09/recette-vegetarienne-orge-perle-potimarron-champignons.jpg",
    tag: {
      cereal: ["orge"],
      diet: ["végan"],
      difficulty: ["facile", "rapide"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    30 ml huile d’olive
    1 oignon, émincé
    250 g orge mondé précuit
    75 cl bouillon de légumes
    1/2 potimarron, coupé en dés
    250 g champignons de Paris
    `,
    preparation: `
    Dans une casserole, fair chauffer la moitié de l'huile d'olive. Ajouter l'oignon et faire revenir 2 minutes. Ajouter l'orge puis le bouillon de légumes, couvrir et cuire pendant 25 minutes.
    Pendant ce temps, faire chauffer à feu doux le reste d'huile d'olive dans une sauteuse. Ajouter le potimarron, saler, cuire 10 minutes, ajouter les champignons, cuire 10 minutes supplémentaires.
    Ajouter l'orge à la sauteuse, mélanger, rectifier l'assaisonnement et servir.
    `
  },
  {
    name: "Berkoukes de légumes",
    url: "https://vegan-pratique.fr/recettes/soupe-berkoukes/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2018/08/berkoukes.jpg",
    tag: {
      cereal: ["blé"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    1 gros oignon
    2 tomates fraîches ou tomates pelées en boîte
    1 pomme de terre
    1 carotte
    2 petits navets
    1 branche de céleri
    1 poignée de petits pois
    1 poignée de pois chiches
    2 l d’eau
    3 gousses d’ail
    persil
    1 càc bombée de concentré de tomate
    1 càc de ras-el-hanout
    1 cc de cumin
    sel, poivre
    250 g de berkoukes (petits plombs, ce sont de gros grains de semoules de blé, on peut aussi prendre des perles, ces petites pâtes rondes)
    huile d’olive
    `,
    preparation: `


La veille, faire tremper les pois chiches toute la nuit puis le lendemain, les faire cuire à l’eau pendant 2 h. Ou utiliser une boîte de pois chiches déjà cuits.

Le jour même, peler, détailler les pommes de terre, navets et carottes en petits cubes. Couper également la branche de céleri en petits morceaux. Réserver.

Dans une cocotte, faire revenir l’oignon et les tomates émincés finement, dans l’huile d’olive, pendant quelques minutes.

Incorporer les épices, l’ail écrasé et tous les légumes.

Ajouter l’eau, le concentré de tomate et mélanger. Saler, poivrer.

Laisser cuire 40 minutes.

Ajouter les perles et laisser cuire encore 10 minutes.

Ajuster le sel au besoin et ajouter une belle poignée de persil au dernier moment.
    `
  },
  {
    name: "Tajine de légumes d’automne aux fruits secs",
    url: "https://vegan-pratique.fr/recettes/tajine-de-legumes-dautomne-aux-fruits-secs/",
    image: "https://vegan-pratique.fr/wp-content/uploads/2018/08/tajine-legumes-automne.jpeg",
    tag: {
      cereal: ["blé"],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    4 carottes
    2 navets
    2 pommes de terre d’une variété ferme
    2 oignons
    1 gousse d’ail
    2 poignées d’abricots secs
    2 poignées de raisins secs
    3 poignées d’amandes
    200 g de pois chiches cuits
    2 càs de chermoula (si vous n’en avez pas, pas de panique, remplacez par ⅓ de paprika, ⅓ de cumin en poudre et ⅓ de coriandre en poudre)
    4 càs d’huile d’olive
    200 g (ou plus !) de semoule à couscous à grain moyen
    Sel et poivre au goût
    Facultatif : piment ou harissa
    `,
    preparation: `
Préparer les légumes : peler et détailler en cubes les navets et les pommes de terre, peler et tailler en rondelles les carottes. Réserver.

Émincer l’oignon.

Faire chauffer à feu doux un plat à tajine (ou une cocotte à fond épais). Faire revenir l’oignon dans 2 cuillères à soupe d’huile d’olive.

Remuer régulièrement.

Égermer et émincer l’ail. Ajouter aux oignons quand ils sont translucides, ainsi que la chermoula.

Laisser torréfier une minute ou deux, puis ajouter les légumes, les pois chiches, de l’eau (assez pour recouvrir les légumes), le sel, le poivre et le piment. Couvrir.

Laisser cuire à tout petit bouillon, 20 min. Ajouter les amandes et les fruits secs (vous pouvez couper les abricots en 4).

Laisser cuire 10 min.

Pendant ce temps, préparer la semoule : faire bouillir 500 ml d’eau.

Dans un saladier, verser la semoule. Ajouter 2 càs d’huile d’olive, saler.

Récupérer à la louche du jus de cuisson des légumes pour parfumer votre semoule (en laisser un peu pour le plat). Verser sur la semoule.

Compléter avec l’eau que vous avez fait bouillir, jusqu’à arriver juste au-dessus de la semoule.
Mélanger à la fourchette et laisser gonfler.
    `
  },
  {
    name: "Curry Vegan Automnal",
    url: "https://freethepickle.fr/2018/11/19/curry-vegan-automnal/",
    image: "https://i0.wp.com/freethepickle.fr/wp-content/uploads/2018/11/curry-automne-6-of-6-scaled.jpg?w=2560&ssl=1",
    tag: {
      cereal: ["riz"],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    800 g de la courge de votre choix ici ½ citrouille verte
    5 c-à-s d’huile végétale de votre choix
    1 c-à-c de graines de moutarde
    3 anis étoilées
    5 clous de girofle
    1 oignon
    6 gousses d’ail
    1 c-à-s de gingembre frais
    ½ c-à-c + 1 c-à-c de cumin
    ½ c-à-c + 1 c-à-c de curcuma
    1 c-à-c cannelle
    1 c-à-c de paprika
    piment au goût
    2 conserves de lait de coco 800ml environ
    300 g pois chiches en conserve ou cuits au préalable
    2 poignées d’épinards optionnel
    1 poignée de noix de cajou crue grossièrement concassée puis grillée par vos soins
    `,
    preparation: `
    Eplucher et couper la citrouille en cubes d’environ 1cmx1cm.
    Les mettre dans un saladier et ajouter 3 c-à-s d’huile, ½ c-à-c de cumin, ½ c-à-c de curcuma, sel et poivre. Bien mélanger, puis les disposer sur une plaque (préalablement recouverte de papier cuisson).
    Enfourner à 210 degrés pour 25 min.
    Eplucher et mixer l’oignon, l’ail et le gingembre pour obtenir une sorte de pâte.
    Dans une grande sauteuse ou une cocotte, verser les 2 c-à-s d’huile restante, et faire chauffer à feu moyen. Quand l’huile est chaude, ajouter les graines de moutarde, les anis étoilées et les clous de girofle.
    Laisser chauffer 2-3 min (les graines de moutarde vont commencer à “poper”) puis ajouter la pâte oignon/gingembre/ail, ainsi que le reste des épices. Faire revenir 5 min en remuant souvent jusqu’à ce que le mélange soit bien odorant.
    Ajouter le lait de coco, couvrir et laisser mijoter 10 min pour que toutes les saveurs se mélangent.
    Ajouter les pois chiches et laisser mijoter encore 10 min. Ajuster l'assaisonnement. Éteindre le feu, ajouter les épinards et les cubes de citrouille rôtis.
    Servir avec du riz et saupoudrer de noix de cajou concassée.
    `
  },
  {
    name: "Nuggets de chou-fleur au miel et à l’ail",
    url: "https://freethepickle.fr/2024/03/28/nuggets-de-chou-fleur-au-miel-et-a-lail/",
    image: "https://i0.wp.com/freethepickle.fr/wp-content/uploads/2024/03/chou-fleur-miel-ail-2-of-7.jpg?w=800&ssl=1",
    tag: {
      cereal: ["riz"],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
Pour le chou-fleur

    1 chou-fleur env 800g

Pour la pâte

    120 g de farine
    40 g de fécule de maïs
    1 càc de sel
    1 càc de paprika fumé
    1 càc d’ail semoule
    190 ml de lait végétal ou animal

Pour la sauce

    3 gousses d’ail
    1 càs d’huile de tournesol
    6 càs de sauce soja tamari
    1 càc de vinaigre de riz
    1 càc d’huile de sésame
    piment au goût
    100 ml d’eau
    2 càs de fécule de maïs
    60 ml de miel
    `,
    preparation: `
    Préchauffez le four à 220 degrés.
    Cassez le chou fleurs en petites fleurettes (avec les mains).
    Préparez une plaque de cuisson en y mettant un papier cuisson.

Pour la pâte

    Mélanger tous les ingrédients dans un bol. Y tremper tous les morceaux de chou-fleur et les répartir uniformément sur la plaque de cuisson.
    Enfournez à mi-hauteur pour 20min.

Pour la sauce

    Pendant ce temps, faire chauffer lui dans un wok.
    Y faire revenir 2 gousses d’ail pressées.
    Quand elles commencent à dorer, ajouter la sauce soja, le vinaigre, l’huile de sésame et le piment.
    Laisser cuire à petits bouillons 2-3min.
    Dans le verre, mélanger l’eau froide et la fécule. Verser ce mélange dans le wok avec la gousse d’ail pressée restante. Mélanger bien, le mélange va rapidement épaissir.
    Hors du feu, ajouter le miel et bien mélanger.
    Ajouter le chou-fleur cuit et bien mélanger.
    Servir avec du riz !
    `
  },
  {
    name: "Chow Mein",
    url: "https://freethepickle.fr/2021/03/17/chow-mein-recette-facile-de-nouilles-sautees-aux-legumes/",
    image: "https://i0.wp.com/freethepickle.fr/wp-content/uploads/2021/03/chow-mein-vegetarien-1-of-3.jpg?w=800&ssl=1",
    tag: {
      cereal: ["riz"],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
Pour les nouilles

    200 g de nouilles aux oeufs ou nouilles de riz
    100 g de champignons shiitaké
    1 carotte env 100g
    100 g de chou blanc
    100 g de pousses de soja
    2 oignons nouveaux
    4 gousses d’ail pressées
    1 càs d’huile de tournesol
    graines de sésame

Pour la sauce

    4 càs de sauce soja
    2 càs d’huile de sésame
    1 càs de sucre
    4 càs de vinaigre de riz
    piment au goût
    `,
    preparation: `
Faites cuire les nouilles en suivant les indications du paquet. Puis, réservez dans de l’eau froide.
Préparez les légumes :
Nettoyez puis émincez les champignons en fines lamelles. Réservez.
Épluchez puis coupez la carotte en julienne. Coupez le chou blanc en julienne. Réservez.
Émincez les oignons nouveaux, tiges incluses. Réservez.
Mélangez tous les ingrédients de la sauce dans un bol. Réservez.
Faites chauffer un wok à feu moyen-fort et versez-y l’huile. Faites revenir l’ail pressé pendant 1 ou 2 min, sans le faire brûler. Ajoutez les champignons et faites-les revenir 3-4min en remuant constamment.
Ajoutez la carotte et le chou blanc et wokez encore 2min.
Ajoutez les nouilles, et la sauce en même temps et wokez encore 4-5min.
Éteignez le feu et ajoutez les oignons et le sésame.
    `
  },
  {
    name: "Soupe crémeuse chou-fleur, pommes de terre, croûtons",
    url: "https://menu-vegetarien.com/soupe-cremeuse-chou-fleur-pommes-terre-croutons/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2023/01/recette-vegetarienne-soupe-cremeuse-croutons.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végétarien"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `
    30 ml huile d'olive
    1 oignon jaune, émincé
    2 gousse d'ail, écrasées
    1 càs romarin
    1 l bouillon de légumes
    500 g pomme de terre, pelées, coupées en moceaux
    300 g chou-fleur, coupé en morceaux
    180 g haricots blancs cuits, égouttés
    40 g emmental râpé

Croûtons

    2 tranches pain de campagne, coupé en morceaux
    15 ml huile d'olive
    `,
    preparation: `
    Faire chauffer l'huile d'olive dans une grande casserole, ajouter l'oignon, cuire 2 minutes, ajouter l'ail, le romarin, saler, poivrer, cuire 1 minute.
    Ajouter le bouillon de légumes, les pommes de terre, le chou-fleur, les haricots blancs, mélanger, porter à ébullition puis réduire à feu doux, cuire à couvert 20 minutes, ou jusqu'à ce que les légumes soient tendres.
    Pendant ce temps, huiler les tranches de pain, les saler, puis les faire griller légèrement dans une poêle ou au toaster.
    Réduire la soupe en purée avec un mixeur plongeant. Vérifier l'assaisonnement
    Servir avec les croûtons et l'emmental râpé.
    `
  },
  {
    name: "Soupe de pois chiches",
    url: "https://menu-vegetarien.com/soupe-pois-chiches",
    image: "https://menu-vegetarien.com/wp-content/uploads/2020/02/recette-vegetarienne-soupe-pois-chiches.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile", "rapide"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `
    15 ml huile d’olive
    1/4 oignon, haché
    2 gousse d'ail, émincées
    500 g pois chiches cuits, égouttés
    1 càs curry
    1 càc curcuma
    75 cl bouillon de légumes
    10 cl crème de coco
    1/2 citron vert, (le jus)
    20 g graines de courge
    `,
    preparation: `
    Faire chauffer l'huile d'olive dans une casserole. Ajouter l'oignon, l'ail, cuire 2 minutes. Ajouter les pois chiches, les épices, saler, poivrer, cuire 5 minutes. Ajouter le bouillon de légumes, laisser mijoter 5 minutes.
    Mixer jusqu'à obtenir une consistance onctueuse. Rajouter de l'eau si besoin.
    Servir avec la crème de coco, un peu de jus de citron vert et des graines de courges.
    `
  },
  {
    name: "Soupe marocaine et pois chiches croustillants",
    url: "https://menu-vegetarien.com/soupe-marocaine-pois-chiches-croustillants/",
    image:
      "https://menu-vegetarien.com/wp-content/uploads/2019/10/recette-vegetarienne-soupe-marocaine-pois-chiches.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `
    800 g carotte, coupées en morceaux
    1 oignon jaune, émincé
    2 gousse d'ail, écrasées
    15 ml huile d'olive
    1 càc cumin
    1 càc curcuma
    2 càc coriandre
    1/2 càc paprika
    1/4 càc cannelle
    1,25 l bouillon de légumes
    1 yaourt à la grecque

Les pois chiches

    150 g pois chiches cuits
    1 càs garam masala
    `,
    preparation: `
    Préchauffer le four à 200°C. Mettre les poi chiches dans un saladier, ajouter le garam masala, saler, poivron et bien mélanger. Les déposer sur la plaque du four recouverte de papier cuisson et cuire 20 minutes en mélangeant régulièrement.
    Pendant ce temps, faire chauffer l'huile d'olive dans une casserole. Ajouter l'oignon, cuire 1 minute, ajouter l'ail, cuire 1 minute, ajouter les épices, cuire 3 minutes, ajouter les carottes et le bouillon, porter à ébullition, puis réduire le feu et laisser mijoter environ 30 minutes, jusqu'à ce que les carottes soient tendres. Puis les mixer. Rectifier l'assaisonnement.
    Servir la soupe avec les pois chiches croustillants et un peu de yaourt à la grecque.
    `
  },
  {
    name: "Riz indien aux carottes",
    url: "https://menu-vegetarien.com/riz-indien-carottes/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2018/02/riz-indien-carotte.jpg",
    tag: {
      cereal: ["riz"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
250g riz basmati
4 cuillère à soupe d’huile
1 oignon émincé
20 noix de cajou
60g de raisins secs
1 càc graines de moutarde
2 feuilles de laurier
1/2 càc cannelle
2 clous de girofle
10 feuilles de curry
4 carottes râpées
2 càs de coriandre hachée
    `,
    preparation: `
Faire cuire le riz le temps indiqué sur le paquet ou 12 minutes.
Faire chauffer l’huile d’olive dans une poêle. Ajouter l’oignon. Les faire cuire 10 minutes ou jusqu’à ce qu’ils commencent à dorer. Assaisonner. Ajoutez les noix de cajou, les raisins secs et continuer pendant 5 minutes. Réserver.
Dans la même poêle, mettre les graines de moutarde, le laurier, la cannelle, les clous de girofle, faire sauter jusqu’à ce que la moutarde crépite. Ajouter les feuilles de curry et faire sauter pendant 30 secondes. Ajouter les carottes râpées. Bien mélanger. Faire pendant environ 3 minutes à feu moyen. Ajouter le riz, assaisonner, mélanger.
Ajouter enfin les oignons frits, les noix de cajou et les raisins secs et terminer par la coriandre.
Vous pouvez le servir avec un yaourt ou de la raita.
    `
  },
  {
    name: "Soupe de chou fleur et pois chiches grillés",
    url: "https://menu-vegetarien.com/soupe-choufleur-pois-chiches/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2017/10/veloute-choufleur-poischiches.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `
    400 g chou-fleur
    200 g pois chiches cuits
    300 g pomme de terre
    3 gousse d'ail, (entières)
    45 ml huile d’olive
    1 càc paprika
    1 càc cumin
    1 l bouillon de légumes
    `,
    preparation: `
    Couper les fleurettes du chou-fleur et les laver. Préchauffez votre four à 200°C.
    Mélanger le chou-fleur, les pois chiches et les gousses d'ail dans un saladier. Ajouter de l'huile d'olive, le cumin, le paprika et saler. Les déposer sur la plaque du four recouverte de papier cuisson et cuir pendant 30 minutes, en remuant une fois à mi-cuisson. Retirer du four et mettre de côté. Prélever un peu du mélange pour la décoration au moment de servir.
    Pendant ce temps, faire chauffer le reste d'huile d'olive dans une grande casserole à feu moyen. Ajouter les pommes de terre coupées en cubes, saler, poivrer. Cuire environ 2 minutes en remuant fréquemment. Ajouter le bouillon de légumes et porter le mélange à ébullition. Laisser mijoter, à découvert, jusqu'à ce que les pommes de terre soient très tendres, environ 15-20 minutes. Retirer le pot de la chaleur.
    Ajouter le mélange chou-fleur/pois chiches aux pommes de terre, puis réduire en purée. Assaisonner puis servir en parsemant un peu du mélange mis de côté.
    `
  },
  {
    name: "Velouté de champignons",
    url: "https://menu-vegetarien.com/veloute-de-champignons/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2023/11/recette-vegetarienne-veloute-champignons.jpg",
    tag: {
      cereal: [],
      diet: ["végan"],
      difficulty: ["facile", "rapide"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `
    500 g champignons de Paris
    1/2 oignon
    1 gousse d'ail, émincée
    3 càs farine
    1 l bouillon de légumes
    10 cl soja cuisine
    30 ml huile d’olive
    `,
    preparation: `
    Nettoyer et couper le pied des champignons
    Faire revenir l'oignon dans une poêle chaude avec de l'huile d'olive.
    Ajouter les champignons et l'ail. Quand les champignons sont dorés, ajouter la farine et un peu de bouillon et mélanger.
    Ajouter le reste du bouillon et cuire 20 minutes.
    Mixer jusqu'à obtenir une consistance lisse et crémeuse.
    Ajouter le soja cuisine, assaisonner, réchauffer un peu si besoin et servir immédiatement.
    `
  },
  {
    name: "Soupe de lentilles blondes",
    url: "https://menu-vegetarien.com/soupe-de-lentilles-blondes/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2022/11/recette-vegan-soupe-lentilles-blondes.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `
    30 ml huile d’olive
    1 oignon
    1 gousse d'ail
    150 g carotte, coupées en rondelles
    250 g lentilles blondes, rincées
    1 l bouillon de légumes
    30 g noisettes, concassées
    2 càc paprika
    10 cl lait de coco
    2 càs graines de sésame noir
    `,
    preparation: `
    Dans une cocotte, faire revenir l’oignon, l’ail et la carotte dans un peu d’huile d’olive pendant 5 minutes.
    Ajouter les lentilles, le bouillon de légumes, le paprika, et cuire pendant 30 minutes.
    Ajouter le lait de coco et laisser cuire encore 5 minutes. Mixer et ajouter un peu d’eau jusqu’à obtenir la consistance désirée. Assaisonner. Parsemer de quelques noisettes concassées, de graines de sésame et servir chaud.
    `
  },
  {
    name: "Soupe d’hiver aux pois cassés et légumes",
    url: "https://menu-vegetarien.com/soupe-dhiver-pois-casses-legumes/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2023/11/recette-vegetarienne-soupe-pois-casses.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végétarien"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `
    30 ml huile d’olive
    1 oignon, émincé
    1 gousse d'ail, écrasée
    250 g pois cassés
    400 g tomates concassées
    300 g carotte, coupées en rondelles
    1 branche de céleri, coupée en rondelles
    200 g chou kale, émincé
    1 càc cumin
    2 feuille de laurier
    1,5 l bouillon de légumes
    40 g parmesan en copeaux
    `,
    preparation: `
    Faire chauffer l’huile d’olive dans une grande casserole. Ajouter l’oignon, les carottes et le céleri et cuire, en mélangeant, pendant 4 minutes. Ajouter l'ail, le cumin, les feuilles de laurier, cuire pendant 30 secondes puis verser les tomates concassées égouttées. Cuire encore quelques minutes.
    Ajouter le bouillon de légumes chaud et les pois cassés. Porter à ébullition et cuire 40 minutes.
    Ajouter le chou kale et cuire encore 5 minutes. Servir avec les copeaux de parmesan.
    `
  },
  {
    name: "Crémeux de chou-fleur au curcuma et noix de cajou",
    url: "https://menu-vegetarien.com/cremeux-chou-fleur-curcuma-noix-cajou/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2017/12/Cremeux-chou-fleur-curcuma-cajou.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `
    300 g chou-fleur
    300 g pomme de terre
    1 l bouillon de légumes
    1 càc curcuma
    30 ml huile d’olive
    40 g noix de cajou
    `,
    preparation: `
    Laver et découper les têtes de chou-fleur, éplucher et découper les pommes de terre et plonger le tout dans le bouillon.
    Ajouter le curcuma et l'huile d'olive et laisser cuire à petits bouillons pendant 20/30 minutes. La pinte d'un couteau doit pouvoir s'enfoncer facilement dans les légumes.
    Mixer le tout et ajuster si nécessaire l'assaisonnement. Au moment de servir, poêler pendant 2 minutes des noix de cajou et les concasser. Puis les saupoudrer généreusement sur les assiettes de velouté.
    `
  },
  {
    name: "Dahl de lentilles corail, millet et courge",
    url: "https://menu-vegetarien.com/dahl-lentilles-corail-millet-courge/",
    image:
      "https://menu-vegetarien.com/wp-content/uploads/2020/12/recette-vegetarienne-dahl-lentilles-corail-millet.jpg",
    tag: {
      cereal: ["légumineuse", "millet"],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    15 ml huile d’olive
    1 oignon, émincé
    2 gousse d'ail, émincée
    1 càs curry
    200 g lentilles corail
    200 g millet
    300 g courge musquée, coupée en morceaux de 2cm
    2 l bouillon de légumes
    5 cl lait de coco
    100 g maïs
    2 càs coriandre fraîche

Yaourt aux herbes

    2 yaourt à la grecque
    2 càs coriandre fraîche, hachée
    2 càs Menthe fraîche, hachée
    `,
    preparation: `
    Faire chauffer l'huile dans une grande casserole. Ajouter l'oignon, cuire jusqu'à ce qu'il devienne translucide, ajouter l'ail, cuire 2 minutes. Ajouter le curry, mélanger. Ajouter les lentilles, le millet, la courge, le bouillon de légumes. Porter à ébullition, cuire 30 minutes
    Pendant ce temps, mélanger tous les ingrédients du yaourt avec du sel, réserver au frais.
    5 minutes avant la fin de la cuisson du dahl, ajouter le lait de coco et le maïs. Mélanger.
    Servir le dahl avec le yaourt.
    `
  },
  {
    name: "Tofu frit et riz thai",
    url: "https://menu-vegetarien.com/tofu-frit-riz-thai/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2018/01/tofu-frit-poivre-riz-thai.jpg",
    tag: {
      cereal: ["riz"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["printemps", "été"],
      service: ["plat"]
    },
    ingredient: `
    90 ml huile d’olive
    400 g tofu ferme, coupé en morceaux de 2cm
    20 g fécule de maïs
    5 échalote, émincées
    3 gousse d'ail, écrasées
    3 càs gingembre
    3 càs sauce soja sucrée
    60 ml sauce soja
    2 càs sucre
    5 càs poivre noir en grains, concassé
    2 oignon vert, coupées en tronçons de 4cm
    `,
    preparation: `
    Faire chauffer la moitié de l'huile d'olive dans une poêle ou un wok. Mélanger les cubes de tofu dans la fécule de maïs puis les faire frire, à feu moyen, jusqu'à ce qu'ils soient dorés. Déposer sur du papier absorbant.
    Nettoyer la poêle, faire chauffer le reste d'huile d'olive, ajouter les échalotes, l'ail et le gingembre. Faire revenir à feu doux à moyen pendant environ 15 minutes, en remuant de temps en temps. Ajouter la sauces soja, le sucre et mélanger, puis ajouter le poivre noir concassé.
    Pendant ce temps, cuire le riz dans une casserole, le temps indiqué sur le paquet ou 10 minutes.
    Mettre le tofu dans la poêle pour le réchauffer dans la sauce pendant environ une minute. Enfin, incorporer les oignons verts. Servir chaud, avec le riz.
    `
  },
  {
    name: "Marmite crémeuse de Noël aux champignons et pommes de terre",
    url: "https://menu-vegetarien.com/marmite-cremeuse-de-noel-aux-champignons-pommes-de-terre/",
    image: "https://menu-vegetarien.com/wp-content/uploads/2023/11/recette-vegan-marmite-noel.jpg",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    200 g tofu ferme
    15 ml huile d’olive
    3 gousse d'ail, hachées
    10 oignon grelot, épluchés
    1 càs romarin, frais finement haché
    350 g champignons de Paris
    10 cl vin rouge
    20 cl crème liquide, ou soja cuisine
    10 cl crème fraîche
    30 ml sauce soja
    5 càs ciboulette

Pour les pommes de terre

    400 g pomme de terre
    30 ml huile d’olive
    `,
    preparation: `
    Préchauffer le four à 225°C. Presser le tofu. Pour cela, l'enrouler dans une serviette ou dans du papier absorbant et déposer un objet lourd dessus. Le laisser 10 minutes ainsi.
    Laver les pommes de terre, les mettre dans un saladier et arroser d'huile d'olive. Saler et bien mélanger pour les imprégner. Les déposer sur une plaque à pâtisserie recouverte de papier cuisson et faire griller au four pendant environ 30 minutes ou jusqu'à ce que les pommes de terre soient tendres et aient une belle croûte croustillante.
    Pendant ce temps, mettre de l'huile d'olive à chauffer dans une cocotte. Faire venir l'ail et les oignons pendant environ 10 minutes à feu moyen en mélangeant sans arrêt. Ajouter le romarin haché, les champignons, les dés de tofu, et assaisonner. Faire frire environ 5 minutes puis ajouter le vin rouge et laisser cuire encore 5 minutes. Ajouter enfin la crème liquide, la crème fraîche, la sauce soja et laisser mijoter pendant environ 5 minutes.
    Ajouter les pommes de terre dans la cocotte. Mélanger. Saupoudrer de romarin frais, de ciboulette et servir.
    `
  },
  {
    name: "Ragoût à la Cacahuète, Pois Chiches et Epinards",
    url: "https://freethepickle.fr/2020/03/30/ragout-a-la-cacahuete-pois-chiches-et-epinards/",
    image: "https://i0.wp.com/freethepickle.fr/wp-content/uploads/2020/01/IMG_0243-scaled.jpg?w=1920&ssl=1",
    tag: {
      cereal: ["riz", "légumineuse"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    1 oignon
    4 gousses d'ail
    1 c-à-s de gingembre frais
    2 c-à-s d'huile végétale
    1 c-à-c de cumin
    1 c-à-c de garam massala
    1/2 c-à-c de curcuma
    1/2 c-à-c de paprika fumé
    1/2 c-à-c de fenugrec en poudre
    1 c-à-c de chili en poudre (optionnel)
    1 conserve de tomates (400g)
    1 petite conserve de concentré de tomate (70g)
    2 c-à-s de beurre de cacahuète
    150 ml d'eau
    400 g de pois chiche cuits
    200 g d'épinards surgelés
    sel, poivre
    `,
    preparation: `
    Épluchez puis mixez l'oignon, l'ail et le gingembre pour obtenir une sorte de pâte.
    Faire chauffer l'huile à feu moyen dans une poêle à bords hauts, et y faire revenir l'oignon, ail et gingembre quelques minutes, jusqu'à ce que le mélange soit bien parfumé.
    Ajouter les épices, mélanger et laisser cuire encore quelques minutes.
    Verser la tomate, le concentré, le beurre de cacahuète et l'eau. Bien mélanger pour que le beurre de cacahuète se dilue bien. Monter le feu. Le mélange doit commencer à bouillonner.
    Ajouter les pois chiches et les épinards. Laisser cuire à feu doux encore une vingtaine de minutes.
    Gouter et ajuster l'assaisonnement.
    Servir avec du riz, ou tel quel !
    `
  },
  {
    name: "Tagliatelles à la Crème de Courge Butternut",
    url: "https://freethepickle.fr/2020/11/12/tagliatelles-a-la-creme-de-courge-butternut-vegan-et-sans-gluten/",
    image: "https://i0.wp.com/freethepickle.fr/wp-content/uploads/2020/11/sauce-butternut-3.jpg?w=1000&ssl=1",
    tag: {
      cereal: ["blé"],
      diet: ["végan"],
      difficulty: ["facile", "rapide"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    1 c-à-s d’huile d’olive
    3 gousses d’ail pressés
    2 branches de thym
    450 g de courge butternut coupée en morceaux de 2cm env
    4-5 c-à-s d’eau à ajuster
    1 pincée de noix de muscade
    2 c-à-s de crème de soja
    450 g de tagliatelles ou les pâtes de votre choix
    `,
    preparation: `
    Commencez par faire chauffer une poêle à feu moyen avec l’huile. Ajoutez-y l’ail pressé et faites revenir 1 ou 2 minutes. Ajoutez le thym, puis la courge butternut coupées en morceaux (plus les morceaux sont gros, et plus la cuisson sera longue). Ajoutez un fond d’eau dans la poêle, et couvrez. Laissez cuire 20-25min en remuant de temps en temps.
    Faites cuire vos pâtes en suivant les instructions du paquet.
    Vous pouvez garder un peu d’eau de cuisson et l’ajouter dans la sauce !
    Une fois que les morceaux de courge sont bien tendres et commencent à se défaire, transférez la préparation dans un mixeur. Ajoutez la muscade et la crème et mixez pour obtenir une belle consistance lisse et crémeuse.
    Servez avec un peu de parmesan (option végétale ici) ou simplement avec un peu de levure de bière !
    `
  },
  {
    name: "Brochettes de Champignons",
    url: "https://freethepickle.fr/2021/08/02/brochettes-de-champignons-a-la-sauce-soja/",
    image: "https://i0.wp.com/freethepickle.fr/wp-content/uploads/2021/08/Yakitoris-Vege-4-of-6.jpg?w=800&ssl=1",
    tag: {
      cereal: ["riz"],
      diet: ["végan"],
      difficulty: ["facile", "rapide"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    18 petits champignons de paris
    8 càs de sauce soja sucrée
    2 càs d’huile de sésame
    1 càs de vinaigre de riz
    2 cébettes ou un oignon nouveau à défaut
    6 pics à brochettes
    graines de sésame
    `,
    preparation: `
    Nettoyer les champignons et enlever les pieds.
Dans un plat, mélanger la sauce soja, l’huile de sésame et le vinaigre de riz.
Verser les champignons dans le plat et mélanger pour qu’ils soient tous recouverts de sauce.
Laisser mariner quelques minutes.
Pendant ce temps, couper les cébettes en tronçons d’environ 4cm. Les ajouter à la marinade.
Faire chauffer une poêle à feu moyen.
Verser tout le contenu du plat dans la poêle et faire revenir en remuant régulièrement pendant 15min.
Faire les brochettes en alternant un champignon avec un tronçon de cébette. Saupoudrez de graines de sésame.
    `
  },
  {
    name: "Soupe de Betteraves et petit épeautre",
    url: "https://freethepickle.fr/2025/02/15/soupe-de-betteraves-et-petit-epeautre-facon-borscht",
    image:
      "https://i0.wp.com/freethepickle.fr/wp-content/uploads/2025/02/soupe-de-betteraves-et-petit-epeautre-facon-borscht.jpg?w=800&ssl=1",
    tag: {
      cereal: ["épeautre"],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `
    3 échalotes
    1 branche de céleri
    2 feuilles de laurier
    3 càs d’huile d’olive
    3 gousses d’ail
    500 g de betteraves crues
    70 g de concentré de tomates
    2 càc de bouillon en poudre ou 1 cube de bouillon de légumes
    100 g de petit épeautre
    1,5 L d’eau à ajuster
    200 g de haricots blancs cuits ou en conserve
    1 bouquet d’aneth
    Le jus d’1/2 citron jaune
    Yaourt grec ou crème fraîche
    `,
    preparation: `
    Émincez les échalotes et le céleri branche. Faites-les revenir 5min dans un faitout avec l’huile d’olive et les feuilles de laurier.
    Hachez grossièrement l’ail. Coupez les betteraves en petits dés. Ajoutez-les dans le faitout avec l’ail et faites revenir encore 5min.
    Incorporez le concentré de tomates, le bouillon, le petit épeautre et l’eau. Couvrez et laissez mijoter à feu doux jusqu’à ce que l’épeautre soit tendre, environ 30 min.
    Ajoutez les haricots blancs, l’aneth haché et le jus de citron. Mélangez bien et laissez cuire encore 5min.
    Servez chaud avec un filet d’huile d’olive, une généreuse cuillère de yaourt grec ou de crème fraîche sur le dessus.

    Petite astuce pour sublimer votre plat : ajoutez un œuf coupé en deux sur le dessus !
    `
  },
  {
    name: "Soupe de courge, lentilles corail & quinoa",
    url: "https://freethepickle.fr/2025/02/07/soupe-de-courge-lentilles-corail-quinoa-au-dukkah/",
    image:
      "https://i0.wp.com/freethepickle.fr/wp-content/uploads/2025/03/soupe-de-courge-lentilles-corail-et-quinoa-au-dukkah-free-the-pickle.jpg?w=800&ssl=1",
    tag: {
      cereal: ["légumineuse"],
      diet: ["végan"],
      difficulty: ["intermediaire"],
      season: ["automne", "hiver"],
      service: ["plat", "soupe"]
    },
    ingredient: `
    1 oignon
    5 gousses d’ail
    1/2 càc de graines de cumin
    1/2 càc de graines de fenugrec
    1 càc de cumin en poudre
    1 càc de paprika fumé
    500 g de courge butternut
    4 càs d’huile d’olive
    200 g de lentilles corail
    1 bouillon cube
    2 l d’eau
    100 g de quinoa
    Le jus d’un citron
    du dukkah
    Sel
    `,
    preparation: `
Émincez finement l’oignon et hachez grossièrement l’ail.
Coupez la courge butternut en petits dés.
Dans une grande casserole, faites chauffer l’huile d’olive, puis ajoutez l’oignon et l’ail. Faites revenir à feu moyen pendant 5 minutes avec les épices.
Ajoutez les dés de butternut et faites revenir encore 5 minutes, en remuant régulièrement. Rincez les lentilles corail, puis ajoutez-les à la casserole avec l’eau et le bouillon cube. Mélangez bien, couvrez, et laissez mijoter à petits bouillons pendant environ 25 min, jusqu’à ce que les lentilles corail et la courge commencent à se défaire.
Ajustez la quantité d’eau si nécessaire, puis utilisez un mixeur plongeant pour mixer légèrement la soupe par à-coups. Le but est d’épaissir un peu le bouillon tout en gardant une texture avec des morceaux.
Rincez le quinoa pour retirer la saponine, puis ajoutez-le à la soupe. Laissez cuire 8 à 10 min, jusqu’à ce que le quinoa soit tout juste cuit.
Ajoutez le jus d’un citron, salez à votre goût.
Servez la soupe bien chaude avec un généreux filet d’huile d’olive et saupoudrez chaque assiette de 2 càc de dukkah pour un supplément de saveurs et de croquant.
    `
  },
  {
    name: "Nouilles express sauce miso cacahuète",
    url: "https://freethepickle.fr/2025/01/25/nouilles-express-sauce-miso-cacahuete/",
    image:
      "https://i0.wp.com/freethepickle.fr/wp-content/uploads/2025/01/Nouilles-express-cacahuete-miso-2-of-4.jpg?w=800&ssl=1",
    tag: {
      cereal: ["blé"],
      diet: ["végan"],
      difficulty: ["facile"],
      season: ["automne", "hiver"],
      service: ["plat"]
    },
    ingredient: `
    200 g de nouilles ici des udons
    2 càc de pâte de miso blanc
    2 càc de beurre de cacahuète
    2 càc d’huile de sésame
    2 càc de sirop d’érable
    2 càc de vinaigre de riz
    2 càs de sauce soja
    1 gousse d’ail pressée
    2 oignon vert émincé
    flocons de piment
    Quelques branches de coriandre hachées
    `,
    preparation: `
    Faites cuire les nouilles en suivant les instructions du paquet.
    Mélangez tous les autres ingrédients, puis répartissez dans 2 assiettes creuses.
    Egouttez les nouilles et melangez-les dans la sauce. Dégustez !
    Dégustez !
    On peut ajouter des carottes, du chou ou du concombre en juliennes ou d’autres légumes en fonction de la saison.
    `
  }
];

/**
 * TEMPLATE
  ,
  {
    name: "",
    url: "",
    image: "",
    tag: {
      cereal: [],
      diet: [],
      difficulty: [],
      season: [],
      service: []
    },
    ingredient: ``,
    preparation: ``
  }

 */
