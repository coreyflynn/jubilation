// @flow
/**
 * Collapses the x or y domains from DomainMap into a single array representing the
 * overall most extreme domain that spans all domains in the map.
 */
export function collapseDomains(map: DomainMap, accesor: string): number[] {
  const domains = Object.keys(map).map(key => map[key][accesor]);
  return domains.reduce((prev, curr) => {
    const prevMin = prev[0];
    const prevMax = prev[prev.length - 1];
    const currMin = curr[0];
    const currMax = curr[curr.length - 1];

    let min;
    let max;
    if (accesor === 'x') {
      max = (prevMax > currMax) ? prevMax : currMax;
      min = (prevMin < currMin) ? prevMin : currMin;
    } else {
      max = (prevMax < currMax) ? prevMax : currMax;
      min = (prevMin > currMin) ? prevMin : currMin;
    }
    return [min, max];
  });
}

/**
 * Generates a funciton for adding domains to a specific domain map
 */
export function addDomainHOF(map: DomainMap): (addMap: DomainMap) => DomainMap {
  return (addMap) => {
    const newMap = map;
    Object.keys(addMap).forEach((key) => { newMap[key] = addMap[key]; });
    return newMap;
  };
}

/**
 * Generates a funciton for removing domains to a specific domain map
 */
export function removeDomainHOF(map: DomainMap): (removeMap: DomainMap) => DomainMap {
  return (removeMap) => {
    const newMap = map;
    Object.keys(removeMap).forEach((key) => { delete newMap[key]; });
    return newMap;
  };
}
