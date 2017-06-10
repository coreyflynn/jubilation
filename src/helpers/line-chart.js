// @flow
export function sortByX(data: Array<Object>): Array<Object> {
  if (data === []) { return []; }

  return data.sort((a, b) => (a.x - b.x));
}

function pairwise(arr, callback) {
  const result = [];
  arr.reduce((prev, current) => {
    result.push(callback(prev, current));
    return current;
  });
  return result;
}

export function toPairs(baseArray: Array<any>): Array<Array<any>> {
  return pairwise(baseArray, (a, b) => [a, b]);
}

