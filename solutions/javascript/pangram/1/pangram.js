//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let arr = String(sentence).toLowerCase().match(/[a-z]/g);
  const charSet = new Set(arr);
  return charSet.size === 26;
};
