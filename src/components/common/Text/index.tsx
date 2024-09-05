import * as S from "./styled";

interface TextElementProps extends S.TextElementStyleProps {
  children: React.ReactNode;
}

export const Text: React.FC<TextElementProps> = ({
  size,
  weight,
  fontColor,
  letterSpacing,
  lineHeight,
  wordBreak,
  children,
}) => {
  return (
    <>
      <S.TextElement
        size={size}
        weight={weight}
        fontColor={fontColor}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        wordBreak={wordBreak}
      >
        {children}
      </S.TextElement>
    </>
  );
};
