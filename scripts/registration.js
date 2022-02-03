let btn = document.getElementById("btn-login");
let login = document.getElementById("login");
let registration = document.getElementById("registration");

btn.addEventListener(
  "click",
  (myFunction = function () {
    if (login.classList.contains("display-none")) {
      login.classList.remove("display-none");
      registration.classList.add("display-none");
    } else {
      registration.classList.remove("display-none");
      login.classList.add("display-none");
    }
  })
);

// btn.onclick();
// btn.onclick(login.classList.add("display-none"));
// let signUpForm = document.getElementsByClassName("signup-form")[0];
// btn.click(function () {
//   let div = document.createElement("div");
//   signUpForm.append(div);
// });
