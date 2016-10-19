// @flow
export default function getDomainMap(id: string, data: Array<*>) {
  const xMin = data.map(datum => datum.x).reduce((a, b) => { if (a < b) return a; return b; }, 0);
  const yMin = data.map(datum => datum.y).reduce((a, b) => { if (a < b) return a; return b; }, 0);
  const xMax = data.map(datum => datum.x).reduce((a, b) => { if (a > b) return a; return b; }, 0);
  const yMax = data.map(datum => datum.y).reduce((a, b) => { if (a > b) return a; return b; }, 0);
  return { [id]: { x: [xMin, xMax], y: [yMax, yMin] } };
}
