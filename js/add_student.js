

import { Student } from "./student.js";

// Empty array to store Student objects
export const students = [];

export function add_student(studentNumber, name, age, email, course) {
  const student = new Student(studentNumber, name, age, email, course);
  students.push(student);
  //confirm in console
  console.log("Student added:", student);
  console.log("All students:", students);
  return student;
}