import styled from "styled-components";

export const Recipies = styled.section`
  display: flex;
  flex-direction: row;
`;

export const RecipiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${({ theme }): string => theme.spacing.m};
  justify-content: center;
`;
