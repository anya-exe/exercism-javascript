// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''))
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let valueString = String(value)
  let isPalindrome = true;
  let start = 0
  let end = valueString.length - 1
  while (start < end){
  valueString[start] !== valueString[end] 
      ? (isPalindrome = false, start = end) // force exit
      : null;

    start ++
    end --
  }

  return isPalindrome

}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === "" || input === null || input === undefined){
    return "Required field"
  }

const num = Number(input);

  if (Number.isNaN(num) || num === 0) {
    return "Must be a number besides 0";
  }

  return "";
}
