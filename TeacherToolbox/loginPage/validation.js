const form = document.getElementById("form");
const email = document.getElementById("email-input");
const username = document.getElementById("user-input");
const password = document.getElementById("pass-input");
const passwordRep = document.getElementById("pass-repeat-input");
const error_message = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  console.log("DID THIS WORK");
  let errors = [];

  if (email) {
    //if there is an email input, we are at the signup page
    errors = getSignupErrors(
      email.value,
      username.value,
      password.value,
      passwordRep.value
    );
  } else {
    // if there is no email input, we are in the loginscreen
    errors = getLoginErrors(username.value, password.value);
  }

  if (errors.length > 0) {
    // If there are any errors
    e.preventDefault();
    error_message.innerText = errors.join(". ");
  } else {
    window.location.pathname = "/src/dashboard/dashboard.html";
    return false;
  }
});

function getSignupErrors(email, username, password, passwordRep) {
  let errors = [];

  if (email == "" || email == null) {
    errors.push("Email is required");
  }
  if (username == "" || username == null) {
    errors.push("Username is required");
  }
  if (password == "" || password == null) {
    errors.push("Password is required");
  }
  if (passwordRep != password) {
    errors.push("Passwords do not match");
  }

  return errors;
}

function getLoginErrors(username, password) {
  let errors = [];

  if (username == "" || username == null) {
    errors.push("Username is required");
  }
  if (password == "" || password == null) {
    errors.push("Password is required");
  }

  return errors;
}

const allInputs = [email, username, password, passwordRep].filter(
  (input) => input != null
);

allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      error_message.innerText = "";
    }
  });
});
