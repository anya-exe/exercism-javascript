//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.grades = new Map(); // Map<grade, Set<student>>
    this.students = new Set(); // Set<student> to prevent duplicates across grades
  }

  roster() {
    let sortedGrades = [...this.grades.entries()].sort((a, b) => a[0] - b[0]);
    let roster = [];
    for (const [grade, students] of sortedGrades) {
      roster.push(...[...students].sort());
    }

    return roster;
  }

  add(name, grade) {
    if (this.students.has(name)) return false;

    if (!this.grades.has(grade)) {
      this.grades.set(grade, new Set());
    }

    const gradeSet = this.grades.get(grade);
    gradeSet.add(name);
    this.students.add(name);
    return true;
  }

  grade(grade) {
    if (!this.grades.get(grade)) return [];
    return [...this.grades.get(grade)].sort();
  }
}
