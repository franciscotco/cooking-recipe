import React, { ChangeEvent, memo, useCallback, type ReactElement } from "react";

import Checkbox from "@src/components/controls/checkbox";
import Fieldset from "@src/components/controls/fieldset";
import Label from "@src/components/controls/label";
import { Tag } from "@src/constants/recipies-tags";
import { useAppDispatch, useAppSelector } from "@src/redux/redux.hooks";
import { AppDispatch, AppSelector } from "@src/redux/redux.types";

import { RecipiesFilterTag } from "./recipies-filters.styles";

export interface RecipeFilterProps<T extends Tag> {
  tags: Readonly<T[]>;
  isTag: (name: string) => name is T;
  legend: string;
  updateFilter: (key: T, _: boolean) => (dispatch: AppDispatch) => void;
  selector: AppSelector<Record<T, boolean>>;
}

function RecipeFilter<T extends Tag>({
  tags,
  isTag,
  legend,
  updateFilter,
  selector
}: RecipeFilterProps<T>): ReactElement {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selector);

  const handleChangeFilter = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target;

      if (isTag(name)) {
        dispatch(updateFilter(name, checked));
      }
    },
    [dispatch, isTag, updateFilter]
  );

  return (
    <Fieldset legend={legend}>
      {tags.map((dietTag) => (
        <RecipiesFilterTag key={dietTag}>
          <Checkbox value={filter[dietTag]} name={dietTag} onChange={handleChangeFilter} />
          <Label htmlFor={dietTag}>{dietTag}</Label>
        </RecipiesFilterTag>
      ))}
    </Fieldset>
  );
}

export default memo(RecipeFilter) as <T extends Tag>(props: RecipeFilterProps<T>) => ReactElement;
