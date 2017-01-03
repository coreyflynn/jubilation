// @flow
import theme from '../jubilation-theme';

export default function getTextWidth(
  text: string,
  fontSize: number = theme.labelStyle.fontSize,
  fontFamily: string = 'Gill Sans',
  ): number {
  const can = document.createElement('canvas');
  const ctx = can.getContext('2d');
  // if we can get a canvas context, use it to measure the text
  if (!ctx) {
    // otherwise, fudge it by assuming all characters are the width of the fontSize. At least this
    // way we won't be too narrow 😜
    return text.length * fontSize;
  }
  ctx.font = `${fontSize}px ${fontFamily}`;
  return ctx.measureText(text).width;
}
