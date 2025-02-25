import styled from "styled-components";

export const RecipeLink = styled.a`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
  gap: ${({ theme }): string => theme.spacing.s};
  padding: 8px;

  width: 260px;
  height: 260px;
  box-sizing: border-box;

  border: 1px solid ${({ theme }): string => theme.color.black};
  border-bottom: 0px;

  background-color: ${({ theme }): string => theme.color.grayLightest};
  &:hover {
    background-color: ${({ theme }): string => theme.color.grayLighter};
    text-decoration: underline;
  }
`;

export const RecipeIngredientButton = styled.button`
  width: 130px;
  height: 32px;
`;

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

export const RecipeBanner = styled.h4`
  background-color: ${({ theme }): string => theme.color.grayLight};
  text-transform: uppercase;
  padding: ${({ theme }): string => theme.spacing.s};
  margin: 0;
`;

export const IngredientList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): string => theme.spacing.xs};
`;

export const PreparationList = IngredientList;

export const RecipeDialogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): string => theme.spacing.s};

  @media (${({ theme }): string => theme.media.tablet}) {
    width: 620px;
  }
`;
