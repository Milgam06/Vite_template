import styled from "@emotion/styled";

export interface TextElementStyleProps {
  size: number;
  weight: number;
  fontColor?: string;
  letterSpacing?: number;
  lineHeight?: number;
  wordBreak?: "break-all" | "break-word" | "keep-all" | "normal";
}

export const TextElement = styled.span<TextElementStyleProps>`
  font-size: ${(props) => props.size}rem;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.fontColor || "#000"};
  letter-spacing: ${(props) => props.letterSpacing || 0}rem;
  line-height: ${(props) => props.lineHeight || 1};
  word-break: ${(props) => props.wordBreak || "normal"};
`;
