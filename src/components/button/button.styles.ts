import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 6px 12px;

  cursor: pointer;

  border: 1px solid ${({ theme }): string => theme.color.black};

  background-color: ${({ theme }): string => theme.color.white};
  color: ${({ theme }): string => theme.color.black};
  &:hover {
    background-color: ${({ theme }): string => theme.color.black};
    color: ${({ theme }): string => theme.color.white};
  }
`;
