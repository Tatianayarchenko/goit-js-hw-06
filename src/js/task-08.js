const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email === "" || password === "") {
    alert(`Все поля должны быть заполнены.`);
  }

  const formValue = {
    email,
    password,
  };

  if (email !== "" && password !== "") {
    console.log(formValue);

    formEl.reset();
  }
}
