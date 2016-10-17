// @flow
type Tick = {
  key: number,
  x: number,
  y: number,
  dx: number,
  dy: number,
  textAnchor: string,
  val: number,
}

export default function getTicks(
  min: number,
  max: number,
  numTicks: number,
  axisType: string,
  position: number,
  context: JubilationContext): Tick[] {
  const ticks = [];

  for (let i = 0; i < numTicks; i += 1) {
    const val = (((max - min) / (numTicks + 1)) * (i + 1)) + min;
    const x = (axisType === 'x') ? val : context.theme.labelStyle.fontSize / 2;
    const y = (axisType === 'y') ? val : position;
    const textAnchor = (axisType === 'x') ? 'middle' : 'end';
    const dx = (axisType === 'x') ? 0 : context.theme.labelStyle.fontSize * 5;
    const dy = (axisType === 'x') ? -context.theme.labelStyle.fontSize / 2 : 0;
    ticks.push({ key: i, x, y, dx, dy, textAnchor, val });
  }
  return ticks;
}
