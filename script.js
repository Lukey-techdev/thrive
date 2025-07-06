const checkbox = document.getElementById("bg-toggle");
const body = document.body;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Form validation
const loginForm = document.querySelector("form");
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

// Create error message element
const errorMessage = document.createElement("div");
errorMessage.className = "error-message";
errorMessage.textContent = "Incorrect username or password.";
errorMessage.style.display = "none";
loginForm.appendChild(errorMessage);

// Handle form submission
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // For demo, credentials = admin + password,
  // In a real application, this would be validated against a backend
  if (username === "admin" && password === "password") {
    hideError();
    alert("Login successful!"); // To be replaced with actual login logic
  } else {
    showError("Incorrect username or password.");
  }
});

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  errorMessage.style.color = "#ff3333";
  errorMessage.style.fontSize = "14px";
  errorMessage.style.marginTop = "10px";
  errorMessage.style.textAlign = "center";
}

function hideError() {
  errorMessage.style.display = "none";
}

// Clear error when user starts typing
usernameInput.addEventListener("input", hideError);
passwordInput.addEventListener("input", hideError);

checkbox.addEventListener("change", () => {
  body.classList.toggle("light-bg", checkbox.checked);
});
