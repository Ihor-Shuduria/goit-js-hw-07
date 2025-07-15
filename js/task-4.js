const form = document.querySelector(".login-form");

form.addEventListener("submit", e => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formData);
  form.reset();
});
