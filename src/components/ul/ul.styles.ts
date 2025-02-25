import styled from "styled-components";

export type ListType = "decimal" | "disc" | "none";

export const Ul = styled.ul<{ type?: ListType }>`
  list-style-type: ${({ type = "none" }): string => type};
  padding: 0 ${({ type = "none" }): string => (type === "none" ? "0" : "40px")};
  margin: 0;
`;
