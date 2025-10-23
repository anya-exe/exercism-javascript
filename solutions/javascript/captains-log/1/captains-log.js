// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return 'NCC-' + Math.floor(9000 * Math.random() + 1000);
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return 1000.0 * Math.random() + 41000.0;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetClasses = [ 'D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']
  return planetClasses[Math.floor(Math.random() * (planetClasses.length))];
}
