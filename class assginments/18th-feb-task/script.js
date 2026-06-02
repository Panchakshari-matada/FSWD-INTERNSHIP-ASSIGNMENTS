document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");
    let confirmError = document.getElementById("confirmError");
    let successMsg = document.getElementById("successMsg");

    // Clear old messages
    nameError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    confirmError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name cannot be empty";
        isValid = false;
    }

    // Email validation
    if (!email.includes("@")) {
        emailError.textContent = "Email must contain @";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        passError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    }

    // Success
    if (isValid) {
        successMsg.textContent = "Form submitted successfully!";
    }
});