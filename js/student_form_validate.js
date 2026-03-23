// Store used student numbers to check for duplicates
var usedStudentNumbers = [];

export function generateStudentNumber() {
  var studentNumber;
  do {
    var randomDigits = Math.floor(10000 + Math.random() * 90000); 
    studentNumber = "2024" + randomDigits;
  } while (usedStudentNumbers.indexOf(studentNumber) !== -1); //while no unique student number is generated

  usedStudentNumbers.push(studentNumber);
  return studentNumber;
}



export function initStudentForm() {
  // Generate student number on page load
  document.getElementById("studentNumber").textContent = generateStudentNumber();

  // Attach validation to form submission
  const form = document.getElementById("registrationForm");
  form?.addEventListener("submit", (event) => {
    event.preventDefault(); // stop default HTML submission
    if (validateForm()) {
      // form is valid — you can handle submission here later
      console.log("Form submitted successfully!");
    }
  });
}

export function validateForm() { 
  var isValid = true;

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("ageError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("courseError").textContent = "";

  // --- Name validation ---
  var name = document.getElementById("name").value.trim();
  if (name.length <= 5) {
    document.getElementById("nameError").textContent = "Name must be more than 5 characters.";
    isValid = false;
  } else if (!/^[A-Za-z]+\s[A-Za-z]+$/.test(name)) {
    document.getElementById("nameError").textContent = "Name must contain at least one whitespace between words and must only contain letters.";
    isValid = false;
  }

  // --- Age validation ---
  var ageValue = document.getElementById("age").value.trim();
  if (!/^\d+$/.test(ageValue)) {
    document.getElementById("ageError").textContent = "Age must be a number only.";
    isValid = false;
  } else {
    var age = parseInt(ageValue);
    if (age <= 18 || age >= 99) {
      document.getElementById("ageError").textContent = "Age must be greater than 18 and less than 99.";
      isValid = false;
    }
  }

  // --- Email validation ---
  var email = document.getElementById("email").value.trim();
  if (!email.endsWith("@up.edu.ph")) {
    document.getElementById("emailError").textContent = "Email must end with @up.edu.ph.";
    isValid = false;
  }

  // --- Course validation ---
  var courseSelected = document.querySelector('input[name="course"]:checked');
  if (!courseSelected) {
    document.getElementById("courseError").textContent = "Please select a course.";
    isValid = false;
  }

  return isValid;
}