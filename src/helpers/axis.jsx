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
    const x = (axisType === 'x') ? val : position;
    const y = (axisType === 'y') ? val : position;
    const textAnchor = (axisType === 'x') ? 'middle' : 'end';
    const dy = (axisType === 'x') ? context.theme.labelStyle.fontSize : 0;
    const dx = (axisType === 'y') ? -5 : 0;
    ticks.push({ key: i, x, y, dy, dx, textAnchor, val });
  }
  return ticks;
}
