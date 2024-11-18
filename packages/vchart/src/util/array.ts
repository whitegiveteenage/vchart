import { array, last as peek, maxInArray as maxInArr, minInArray as minInArr } from '@visactor/vutils';

export function shallowCompare<T, U>(arrA: T | T[], arrB: U | U[]): boolean {
  const setA = new Set<T | U>(array(arrA));
  const setB = new Set<T | U>(array(arrB));
  if (setA.size !== setB.size) {
    return false;
  }
  for (const v of setA.values()) {
    if (!setB.has(v)) {
      return false;
    }
  }
  return true;
}

export function combineDomains(domains: number[][]): number[] {
  const result = [];
  for (let index = 0; index < domains.length; index++) {
    const domain = domains[index];
    if (index === 0 || domain[0] !== result[result.length - 1]) {
      result.push(domain[0]);
    }

    result.push(domain[1]);
  }

  return result;
}

export { array, peek, maxInArr, minInArr };
