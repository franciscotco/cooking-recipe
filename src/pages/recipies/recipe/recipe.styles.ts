import styled from "styled-components";

export const RecipeLink = styled.a`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  gap: ${({ theme }): string => theme.spacing.s};
  padding: 8px;

  width: 240px;
  height: 240px;
  box-sizing: border-box;

  border: 1px solid gray;

  background-color: ${({ theme }): string => theme.color.grayLightest};
  &:hover {
    background-color: ${({ theme }): string => theme.color.grayLighter};
  }
`;

export const RecipeIngredientButton = styled.button``;

export const RecipeImageContainer = styled.div`
  height: 160px;
`;

export const RecipeImage = styled.div<{ bgImage?: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url(${({ bgImage }): string => bgImage ?? ""});
`;

export const RecipeName = styled.p`
  margin: 0;
  text-align: center;
  flex: 1;
`;

export const RecipeButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
