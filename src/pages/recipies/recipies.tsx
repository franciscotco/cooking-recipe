import React, { memo, type ReactElement } from "react";

import Ul from "@src/components/ul";
import { useAppSelector } from "@src/redux/redux.hooks";
import { selectors } from "@src/redux/redux.selectors";

import Recipe from "./recipe";
import RecipiesFilters from "./recipies-filters";
import { Recipies as Root, RecipiesList } from "./recipies.styles";

const Recipies = (): ReactElement => {
  const recipies = useAppSelector(selectors.recipiesFilters.selectFilteredRecipies);

  return (
    <Root>
      <RecipiesFilters />
      <RecipiesList as={Ul}>
        {recipies.map(({ image, name, url, ingredient, preparation }) => (
          <Recipe key={url} name={name} url={url} image={image} ingredient={ingredient} preparation={preparation} />
        ))}
      </RecipiesList>
    </Root>
  );
};

export default memo(Recipies);
