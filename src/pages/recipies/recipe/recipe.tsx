import React, { memo, ReactElement, useCallback, useRef } from "react";

import Anchor from "@src/components/anchor";
import Button from "@src/components/button";
import Dialog from "@src/components/dialog";
import Li from "@src/components/li";

import {
  RecipeImageContainer,
  RecipeImage,
  RecipeLink,
  RecipeName,
  RecipeIngredientButton,
  RecipeButtons
} from "./recipe.styles";

interface RecipeProps {
  image?: string;
  name: string;
  url: string;
  ingredient: string;
  preparation: string;
}

function Recipe({ image, url, name, ingredient, preparation }: RecipeProps): ReactElement {
  const dialogPreparationRef = useRef<HTMLDialogElement>(null);
  const dialogIngredientsRef = useRef<HTMLDialogElement>(null);

  const handleShowPreparation = useCallback(() => {
    dialogPreparationRef.current?.showModal();
  }, []);

  const handleHidePreparation = useCallback(() => {
    dialogPreparationRef.current?.close();
  }, []);

  const handleShowIngredients = useCallback(() => {
    dialogIngredientsRef.current?.showModal();
  }, []);

  const handleHideIngredients = useCallback(() => {
    dialogIngredientsRef.current?.close();
  }, []);

  return (
    <Li>
      <RecipeLink as={Anchor} href={url} target="_blank" rel="noreferrer">
        <RecipeImageContainer>
          <RecipeImage bgImage={image} />
        </RecipeImageContainer>
        <RecipeName>{name}</RecipeName>
      </RecipeLink>
      <Dialog ref={dialogIngredientsRef}>
        <div>{name}</div>
        <div>
          {ingredient.split("\n").map((ingredient, index) => (
            <React.Fragment key={index}>
              {ingredient}
              <br />
            </React.Fragment>
          ))}
        </div>
        <Button onClick={handleHideIngredients}>Fermer</Button>
      </Dialog>
      <Dialog ref={dialogPreparationRef}>
        <div>{name}</div>
        <div>
          {preparation.split("\n").map((preparation, index) => (
            <React.Fragment key={index}>
              {preparation}
              <br />
            </React.Fragment>
          ))}
        </div>
        <Button onClick={handleHidePreparation}>Fermer</Button>
      </Dialog>
      <RecipeButtons>
        <RecipeIngredientButton as={Button} onClick={handleShowIngredients}>
          Ingrédients
        </RecipeIngredientButton>
        <RecipeIngredientButton as={Button} onClick={handleShowPreparation}>
          Préparation
        </RecipeIngredientButton>
      </RecipeButtons>
    </Li>
  );
}

export default memo(Recipe);
