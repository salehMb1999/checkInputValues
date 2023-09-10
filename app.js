const $ = document;
let userName = $.getElementById("userName");
let passWord = $.getElementById("passWord");
let btn = $.querySelector("span");
let modal = $.querySelector(".modal");
let closeModal = $.querySelector("i");
closeModal.addEventListener("click", () => {
    modal.style.transform = "translateY(-50rem)";
});
btn.addEventListener("click", () => {
  if (userName.value.length < 12 || passWord.value.length < 8) {
    modal.style.transform = "translateY(-12rem)";
  } else {
    alert("nice");
  }
});
