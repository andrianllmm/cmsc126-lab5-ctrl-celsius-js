/**
 * Feature module for adding students with form validation.
 */
import { students } from "./student.js";

/**
 * Adds a student to the student array.
 */
export function add_student(studentNumber, name, age, email, course) {
  const student = {
    studentNumber: studentNumber,
    name: name,
    age: age,
    email: email,
    course: course,
  };

  students.push(student);

  return student;
}

const usedStudentNumbers = new Set();

/**
 * Generates a random student number (ID)
 */
export function generateStudentNumber() {
  let studentNumber;

  do {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    // Math.random() generates a decimal in [0, 1)
    // Multiply by 90000 -> scales it to [0, 90000)
    // Add 10000 -> shifts range to [10000, 100000)
    studentNumber = "2024" + randomDigits;
  } while (usedStudentNumbers.has(studentNumber));

  usedStudentNumbers.add(studentNumber);
  return studentNumber;
}

/**
 * Initializes the student form
 */
export function initStudentForm() {
  // Generate and display student number on page load
  const studentNumber = generateStudentNumber();

  document.getElementById("studentNumber").textContent = studentNumber;

  const form = document.getElementById("registrationForm");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Collect values from the form
      const name = document.getElementById("name").value.trim();
      const age = parseInt(document.getElementById("age").value.trim());
      const email = document.getElementById("email").value.trim();
      const course = document.querySelector(
        'input[name="course"]:checked',
      ).value;

      // Create the Student object and add it to student array
      add_student(studentNumber, name, age, email, course);

      // Reset form and generate new student number for next entry
      form.reset();

      const newStudentNumber = generateStudentNumber();
      document.getElementById("studentNumber").textContent = newStudentNumber;
    }
  });
}

/**
 * Validates the student form
 */
export function validateForm() {
  let isValid = true;

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("ageError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("courseError").textContent = "";

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length <= 5) {
    document.getElementById("nameError").textContent =
      "Name must be more than 5 characters.";
    isValid = false;
  } else if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(name)) {
    document.getElementById("nameError").textContent =
      "Name must contain at least one whitespace between words and must only contain letters.";
    isValid = false;
  }

  // Age validation
  const ageValue = document.getElementById("age").value.trim();
  if (!/^\d+$/.test(ageValue)) {
    document.getElementById("ageError").textContent =
      "Age must be a number only.";
    isValid = false;
  } else {
    const age = parseInt(ageValue);

    if (age <= 18 || age >= 99) {
      document.getElementById("ageError").textContent =
        "Age must be greater than 18 and less than 99.";
      isValid = false;
    }
  }

  // Email validation
  let email = document.getElementById("email").value.trim();
  if (!email.endsWith("@up.edu.ph")) {
    document.getElementById("emailError").textContent =
      "Email must end with @up.edu.ph.";
    isValid = false;
  }

  // Course validation
  let courseSelected = document.querySelector('input[name="course"]:checked');
  if (!courseSelected) {
    document.getElementById("courseError").textContent =
      "Please select a course.";
    isValid = false;
  }

  return isValid;
}
