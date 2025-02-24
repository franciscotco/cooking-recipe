import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 0;

  cursor: pointer;

  border: 1px solid black;
  width: 120px;
  height: 24px;

  &:hover {
    background-color: ${({ theme }): string => theme.color.grayLighter};
  }
`;
