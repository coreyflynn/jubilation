import { collapseDomains, addDomainHOF, removeDomainHOF } from '../../src/helpers/provider';

function getMap(doThird = false) {
  const base = {
    first: { x: [Math.random(), Math.random()], y: [Math.random(), Math.random()] },
    second: { x: [Math.random(), Math.random()], y: [Math.random(), Math.random()] },
  };
  if (doThird) {
    base.third = { x: [Math.random(), Math.random()], y: [Math.random(), Math.random()] };
  }
  return base;
}

describe('Helpers:Provider', () => {
  describe('collapseDomains', () => {
    it('should return a domain with the right min for a x accesor', () => {
      const map = getMap();
      expect(collapseDomains(map, 'x')[0])
        .toBe(map.first.x[0] < map.second.x[0] ? map.first.x[0] : map.second.x[0]);
    });

    it('should return a domain with the right max for a x accesor', () => {
      const map = getMap();
      expect(collapseDomains(map, 'x')[1])
        .toBe(map.first.x[1] > map.second.x[1] ? map.first.x[1] : map.second.x[1]);
    });

    it('should return a domain with the right min for a y accesor', () => {
      const map = getMap();
      expect(collapseDomains(map, 'y')[0])
        .toBe(map.first.y[0] > map.second.y[0] ? map.first.y[0] : map.second.y[0]);
    });

    it('should return a domain with the right max for a x accesor', () => {
      const map = getMap();
      expect(collapseDomains(map, 'y')[1])
        .toBe(map.first.y[1] < map.second.y[1] ? map.first.y[1] : map.second.y[1]);
    });
  });

  describe('addDomainHOF', () => {
    it('should produce a function that adds a domain to an existing map', () => {
      const existingMap = getMap();
      const newMap = getMap(true);
      const addDomain = addDomainHOF(existingMap);
      expect(addDomain(newMap).third).toEqual(existingMap.third);
    });

    it('should produce a function that overites an existing domain to an existing map', () => {
      const existingMap = getMap();
      const newMap = getMap(true);
      const addDomain = addDomainHOF(existingMap);
      expect(addDomain(newMap)).toEqual(existingMap);
    });
  });

  describe('removeDomainHOF', () => {
    it('should produce a function that removes a domain to an existing map', () => {
      const existingMap = getMap();
      const newMap = { first: {} };
      const removeDomain = removeDomainHOF(existingMap);
      expect(removeDomain(newMap).first).toEqual(undefined);
    });
  });
});
