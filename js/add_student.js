import { students } from "./student.js";

export function add_student(studentNumber, name, age, email, course) {
  const student = {
    studentNumber: studentNumber,
    name: name,
    age: age,
    email: email,
    course: course,
  };
  students.push(student);
  //confirm in console
  console.log("Student added:", student);
  console.log("All students:", students);
  return student;
}
