//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n === 0) return [];

  if (n === 1) return [[1]];

  const triangle = rows(n - 1);
  const lastRow = triangle[triangle.length - 1];
  const newRow = generateNextRow(lastRow);
  return [...triangle, newRow];
};

export function generateNextRow(prev, i = 1, result = [1]) {
  if (i === prev.length) {
    result.push(1);
    return result;
  }

  result.push(prev[i - 1] + prev[i]);
  return generateNextRow(prev, i + 1, result);
}
