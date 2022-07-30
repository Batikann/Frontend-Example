const form = document.getElementById("form-group");
let firstName = document.querySelector("#surName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let card_collepse = document.querySelector("#card-collepse");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    card_collepse.classList.remove("card-sizee");
    card_collepse.classList.add("card-sizee3");
    let firstNameText = document.getElementById("firstName-text");
    let surName = document.getElementById("surName");
    surName.classList.add("test");
    firstNameText.classList.remove("text-visibility");
  }

  if (lastNameValue === "") {
    card_collepse.classList.remove("card-sizee");
    card_collepse.classList.add("card-sizee3");
    let lastName_text = document.getElementById("lastName-text");
    let lastName = document.getElementById("lastName");
    lastName.classList.add("test");
    lastName_text.classList.remove("text-visibility");
  }
  if (emailValue === "") {
    card_collepse.classList.remove("card-sizee");
    card_collepse.classList.add("card-sizee3");
    let email_blank = document.getElementById("email-blank");
    let email = document.getElementById("email");
    email.classList.add("test");
    email_blank.classList.remove("text-visibility");
  } else if (!isEmail(emailValue)) {
    card_collepse.classList.remove("card-sizee");
    card_collepse.classList.add("card-sizee3");
    let email_valid = document.getElementById("email-valid");
    let email = document.getElementById("email");
    email.classList.add("test");
    email_valid.classList.remove("text-visibility");
  }
  if (passwordValue === "") {
    card_collepse.classList.remove("card-sizee");
    card_collepse.classList.add("card-sizee3");
    let password_text = document.getElementById("password-text");
    let password = document.getElementById("password");
    password.classList.add("test");
    password_text.classList.remove("text-visibility");
  }

  if (passwordValue === "") {
    card_collepse.classList.remove("card-sizee");
    card_collepse.classList.add("card-sizee3");
    let password_text = document.getElementById("password-text");
    let password = document.getElementById("password");
    password.classList.add("test");
    password_text.classList.remove("text-visibility");
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
