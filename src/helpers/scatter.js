// @flow
export default function getDomainMap(id: string, data: Array<*>) {
  const xMin = data.map(datum => datum.x).reduce((a, b) => { if (a < b) return a; return b; });
  const yMin = data.map(datum => datum.y).reduce((a, b) => { if (a < b) return a; return b; });
  const xMax = data.map(datum => datum.x).reduce((a, b) => { if (a > b) return a; return b; });
  const yMax = data.map(datum => datum.y).reduce((a, b) => { if (a > b) return a; return b; });
  return { [id]: { x: [xMin, xMax], y: [yMax, yMin] } };
}
