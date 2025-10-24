//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(numbers) {
    this.numbers = numbers;
  }

  get rows() {
    return this.numbers
      .trim()
      .split("\n")
      .map((line) => line.trim().split(" ").map(Number));
  }

  get columns() {
    const rows = this.rows;
    const numCols = rows[0].length;
    return Array.from({ length: numCols }, (_, colIndex) =>
      rows.map((row) => row[colIndex])
    );
  }
}
