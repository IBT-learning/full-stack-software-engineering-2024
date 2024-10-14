// alert("Hello");
const button = document.getElementById("submit-order");
// const emailElement = document.getElementById("email");
// const passwordElement = document.getElementById("password");
const outputMessage = document.getElementById("output");
const dataBase = [
  { email: "littlemiss@gmail.com", password: "Abc@123" },
  { email: "ibtlearning@gmail.com", password: "ibT123@" },
  { email: "lenovo@lenovo.com", password: "lenR987&" },
];

button.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target.form);

  const email = e.target.form[0].value;
  const password = e.target.form[1].value;

  const currentUser = dataBase.filter((user) => user.email === email);

  if (currentUser.length == 0) {
    outputMessage.innerText = "User not Found";
    outputMessage.classList.add("output-message");
  } else {
    if (currentUser[0].password === password) {
      outputMessage.innerText = "User Authenticated";
      outputMessage.classList.add("authenticated");
      e.target.form.innerHTML = "";
    } else {
      outputMessage.innerText = "Incorrect Password";
      outputMessage.classList.add("output-message");
    }
    // email = "";
    // password = "";
  }
});
