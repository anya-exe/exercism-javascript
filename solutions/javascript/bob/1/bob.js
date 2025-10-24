//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmed = message.trim();

  if (trimmed === "") {
    return "Fine. Be that way!";
  }

  const isQuestion = trimmed.endsWith("?");
  const isShouting = trimmed === trimmed.toUpperCase() && /[A-Z]/.test(trimmed);

  if (isQuestion && isShouting) {
    return "Calm down, I know what I'm doing!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  if (isShouting) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
};
