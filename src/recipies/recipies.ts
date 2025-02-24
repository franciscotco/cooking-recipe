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
