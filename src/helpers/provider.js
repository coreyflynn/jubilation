// @flow
type DomainMap = { [key: string]: { x?: number[], y?: number[] }};

/**
 * Collapses the x or y domains from DomainMap into a single array representing the
 * overall most extreme domain that spans all domains in the map.
 */
export function collapseDomains(map: DomainMap, accesor: string): number[] {
  return Object.keys(map).map(key => map[key][accesor]).reduce((prev, curr) => {
    const prevMin = prev[0];
    const prevMax = prev[prev.length - 1];
    const currMin = curr[0];
    const currMax = curr[curr.length - 1];
    const max = (prevMax > currMax) ? prevMax : currMax;
    const min = (prevMin < currMin) ? prevMax : currMax;
    return [min, max];
  });
}

/**
 * Generates a funciton for adding domains to a specific domain map
 */
export function addDomainHOF(map: DomainMap): (addMap: DomainMap, accesor: string) => DomainMap {
  return (addMap, accesor) => {
    const newMap = map;
    Object.keys(addMap).forEach((key) => { newMap[key][accesor] = addMap[key][accesor]; });
    return newMap;
  };
}

/**
 * Generates a funciton for removing domains to a specific domain map
 */
export function removeDomainHOF(map: DomainMap): (addMap: DomainMap, accesor: string) => DomainMap {
  return (addMap, accesor) => {
    const newMap = map;
    Object.keys(addMap).forEach((key) => { delete newMap[key][accesor]; });
    return newMap;
  };
}
