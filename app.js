const $ = document;
let userName = $.getElementById("userName");
let passWord = $.getElementById("passWord");
let btn = $.querySelector(".btn");
let modal = $.querySelector(".modal");
let userNameAlert = $.querySelector(".userNameAlert");
let passWordAlert = $.querySelector(".passWordAlert");

btn.addEventListener("click", () => {
  if (userName.value.length < 12 || passWord.value.length < 8) {
    modal.style.top = "10rem";
    setTimeout(() => {
      modal.style.top = "-10rem";
      userName.value = "";
      passWord.value = "";
    }, 3000);
  } else {
    modal.innerHTML = "خوش آمدید";
    modal.style.backgroundColor = "rgb(11, 67, 11)";
    modal.style.top = "10rem";
    setTimeout(() => {
      modal.style.top = "-10rem";
      userName.value = "";
      passWord.value = "";
    }, 3000);
  }
});
userName.addEventListener("keyup", () => {
  if (userName.value.length < 12) {
    userName.style.border = "8px solid red";
    userNameAlert.style.visibility = "visible"
  } else {
    userName.style.border = "8px solid #2ed573";
    userNameAlert.style.visibility = "hidden"

  }
});
passWord.addEventListener("keyup", () => {
  if (passWord.value.length < 8) {
    passWord.style.border = "8px solid red";
    passWordAlert.style.visibility = "visible"

  } else {
    passWord.style.border = "8px solid #2ed573";
    passWordAlert.style.visibility = "hidden"

  }
});
