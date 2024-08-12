document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let isValid = true;

  // Clear previous error messages
  document.getElementById("name-error").style.visibility = "hidden";
  document.getElementById("email-error").style.visibility = "hidden";
  document.getElementById("message-error").style.visibility = "hidden";

  if (name.value.trim() === "") {
    document.getElementById("name-error").textContent =
      "Please enter your name";
    document.getElementById("name-error").style.visibility = "visible";
    isValid = false;
  }

  if (email.value.trim() === "" || !email.validity.valid) {
    document.getElementById("email-error").textContent =
      "Please enter a valid email address";
    document.getElementById("email-error").style.visibility = "visible";
    isValid = false;
  }

  if (message.value.trim() === "") {
    document.getElementById("message-error").textContent =
      "Please enter your message";
    document.getElementById("message-error").style.visibility = "visible";
    isValid = false;
  }

  if (isValid) {
    // Show alert on successful form validation
    alert("Form submitted successfully!");
    // Optionally reset the form
    document.getElementById("myForm").reset();
  }
});
