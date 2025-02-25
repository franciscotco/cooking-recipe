import styled from "styled-components";

export const RecipiesFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): string => theme.spacing.s};
  padding: 0 0 ${({ theme }): string => theme.spacing.l} 0;
  min-width: 160px;
`;

export const RecipiesFilterTag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
