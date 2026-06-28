const form = document.querySelector(".login-form")
form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === "" || password === "") {
    alert('All form fields must be filled in');
  } else {
    const user = {
      email: email,
      cpassword: password
    }
    form.reset()
    console.log(user);
  }
}