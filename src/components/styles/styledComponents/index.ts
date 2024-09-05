import styled from "@emotion/styled";

export interface StyledComponentProps {
  width?: string;
  height?: string;
  display?: "flex" | "grid";
  flexDirection?: "column" | "row";
  justifyContent?:
    | "center"
    | "space-between"
    | "space-around"
    | "flex-start"
    | "flex-end";
  alignItems?: "center" | "flex-start" | "flex-end";
  gap?: number;
}

export const BaseContainer = styled.div<StyledComponentProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.gap || 0}rem;
`;
