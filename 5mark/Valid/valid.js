
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); 

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  let valid = true;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    valid = false;
  }

  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    alert("Form Submitted Successfully!");
    document.getElementById("myForm").reset();
  }
});
