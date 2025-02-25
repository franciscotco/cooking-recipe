import styled from "styled-components";

export const Root = styled.div`
  width: 100%;
  min-height: 6rem;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 6rem;
  box-sizing: border-box;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 0 0.75rem 0 rgba(0, 0, 0, 0.05);
  background: ${({ theme }): string => theme.color.white};
  font-size: ${({ theme }): string => theme.font.size.large};

  padding: ${({ theme }): string => `${theme.spacing.l} ${theme.spacing.xl}`};
`;

export const RouteLink = styled.a`
  color: ${({ theme }): string => theme.color.black};

  &[aria-current] {
    color: ${({ theme }): string => theme.color.blue};
  }
`;
