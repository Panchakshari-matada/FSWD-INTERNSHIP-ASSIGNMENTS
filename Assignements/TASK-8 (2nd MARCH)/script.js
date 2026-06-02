document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let successMessage = document.getElementById("successMessage");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required";
    valid = false;
  }

  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
  }
});
