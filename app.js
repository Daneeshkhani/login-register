function signup() {
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (
    fullName === "" ||
    email === "" ||
    age === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("All fields are required!");
    return
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      alert("Email already exists!");
      return;
    }
  }
  

  let newUser = {
    fullName: fullName,
    email: email,
    age: age,
    password: password,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful! You can now log in.");
  window.location.href = "index.html";
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];


  let authenticatedUser;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      authenticatedUser = users[i];
      break;
    }
  }

    console.log(authenticatedUser);
    
  if (authenticatedUser) {
    alert("Login successful! Redirecting...");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid email or password!");
  }
}
