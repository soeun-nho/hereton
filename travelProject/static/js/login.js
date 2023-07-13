const inputId = document.getElementById("input-id");
const inputPwd = document.getElementById("input-pwd");
const btnImage = document.getElementById("btn_image");

inputId.addEventListener("input", handleInputChange);
inputPwd.addEventListener("input", handleInputChange);

function handleInputChange() {
  const idValue = inputId.value.trim();
  const pwdValue = inputPwd.value.trim();

  if (idValue !== "" && pwdValue !== "") {
    btnImage.src = "./image/login_btn2.svg";
  } else {
    btnImage.src = "./image/login_btn1.svg";
  }
}

//버튼 누르면 화면 이동
const btn = document.getElementById("img_btn");

btn.addEventListener("click", handleBtnClick);

function handleBtnClick() {
  const idValue = inputId.value.trim();
  const pwdValue = inputPwd.value.trim();

  if (idValue !== "" && pwdValue !== "") {
    window.location.href = "home.html";
  }
}
