import React, { memo, ReactElement, useCallback, useRef } from "react";

import Anchor from "@src/components/anchor";
import Button from "@src/components/button";
import Dialog from "@src/components/dialogs/dialog";
import DialogContent from "@src/components/dialogs/dialog-content";
import DialogFooter from "@src/components/dialogs/dialog-footer";
import DialogHeader from "@src/components/dialogs/dialog-header";
import Li from "@src/components/li";
import Ul from "@src/components/ul";

import {
  RecipeImageContainer,
  RecipeImage,
  RecipeLink,
  RecipeName,
  RecipeIngredientButton,
  RecipeButtons,
  RecipeBanner,
  IngredientList,
  PreparationList,
  RecipeDialogContent
} from "./recipe.styles";
import { formatIngredient, formatPreparation } from "./recipe.utils";

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
        <DialogHeader>{name}</DialogHeader>
        <DialogContent>
          <RecipeDialogContent>
            <RecipeBanner>Ingrédients</RecipeBanner>
            <IngredientList as={Ul} type="disc">
              {formatIngredient(ingredient).map((ingredient, index) => (
                <Li key={index}>{ingredient}</Li>
              ))}
            </IngredientList>
          </RecipeDialogContent>
        </DialogContent>
        <DialogFooter>
          <Button onClick={handleHideIngredients}>Fermer</Button>
        </DialogFooter>
      </Dialog>
      <Dialog ref={dialogPreparationRef}>
        <DialogHeader>{name}</DialogHeader>
        <DialogContent>
          <RecipeDialogContent>
            <RecipeBanner>Ingrédients</RecipeBanner>
            <IngredientList as={Ul} type="disc">
              {formatIngredient(ingredient).map((ingredient, index) => (
                <Li key={index}>{ingredient}</Li>
              ))}
            </IngredientList>
            <RecipeBanner>Préparation</RecipeBanner>
            <PreparationList as={Ul} type="decimal">
              {formatPreparation(preparation).map((preparation, index) => (
                <Li key={index}>{preparation}</Li>
              ))}
            </PreparationList>
          </RecipeDialogContent>
        </DialogContent>
        <DialogFooter>
          <Button onClick={handleHidePreparation}>Fermer</Button>
        </DialogFooter>
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
