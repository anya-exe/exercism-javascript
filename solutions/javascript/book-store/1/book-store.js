//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.

export const DISCOUNTS = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
};

export const cost = (books) => {
  const countArr = count(books);
  return minCost(countArr);
};

export function count(books) {
  const arr = [0, 0, 0, 0, 0];
  books.forEach((book) => {
    arr[book - 1] += 1; // Normalize to 0-based index
  });
  return arr;
}

function getCombinations(arr, size) {
  if (size === 0) return [[]];
  if (arr.length < size) return [];

  const [first, ...rest] = arr;
  const withFirst = getCombinations(rest, size - 1).map((combo) => [
    first,
    ...combo,
  ]);
  const withoutFirst = getCombinations(rest, size);

  return [...withFirst, ...withoutFirst];
}

export function minCost(countArr, memo = {}) {
  const key = countArr.join(",");
  if (memo[key]) return memo[key];
  if (countArr.every((c) => c === 0)) return 0;

  let min = Infinity;

  const available = countArr
    .map((c, i) => (c > 0 ? i : null))
    .filter((i) => i !== null);

  for (let size = 1; size <= 5; size++) {
    const combos = getCombinations(available, size);

    for (const group of combos) {
      const newCount = [...countArr];
      group.forEach((i) => newCount[i]--);

      const groupCost = size * 800 * (1 - DISCOUNTS[size]);
      const totalCost = groupCost + minCost(newCount, memo);

      min = Math.min(min, totalCost);
    }
  }

  memo[key] = min;
  return min;
}

console.log(cost([1, 1, 2, 3, 4, 4, 5, 5]));
