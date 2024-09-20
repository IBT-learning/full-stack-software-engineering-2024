const button = document.getElementById("submit");
const output = document.getElementById("output");

const db = [
  { email: "dburrow@uprighted.com", password: "abc123" },
  { email: "santa@northpole.com", password: "stnick" },
  { email: "bunnny@easter.com", password: "iloveeggs" },
];

button.addEventListener("click", (event) => {
  event.preventDefault();
  const email = event.target.form[0].value;
  const password = event.target.form[1].value;

  const currentUser = db.filter((user) => user.email === email);

  if (currentUser.length == 0) {
    output.innerText = "User not found";
  } else {
    if (currentUser[0].password === password) {
      event.target.form.innerHTML = "";
      output.innerText = "User authenticated";
      // in the real world, we're doing a redirect here
    } else {
      output.innerText = `incorrect password for ${email}`;
    }
  }
});
