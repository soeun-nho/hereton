const inputId = document.getElementById("input-id");
const inputPwd = document.getElementById("input-pwd");
const reinputPwd = document.getElementById("re-input-pwd");
const btnImage = document.getElementById("btn_image");
const correctImg = document.getElementById("correct");

inputId.addEventListener("input", handleInputChange);
inputPwd.addEventListener("input", handleInputChange);
reinputPwd.addEventListener("input", handleInputChange);

function handleInputChange() {
  const idValue = inputId.value.trim();
  const pwdValue = inputPwd.value.trim();
  const repwdValue = reinputPwd.value.trim();

  if (
    idValue !== "" &&
    pwdValue !== "" &&
    repwdValue !== "" &&
    pwdValue === repwdValue
  ) {
    btnImage.src = "/images/join2.png";
  } else {
    btnImage.src = "/images/join1.png";
  }

  correctIncorrect();
}

function correctIncorrect() {
  const idValue = inputId.value.trim();
  const pwdValue = inputPwd.value.trim();
  const repwdValue = reinputPwd.value.trim();

  if (pwdValue !== "" && repwdValue !== "" && pwdValue === repwdValue) {
    correctImg.style.display = "block";
    correctImg.src = "/images/correct.png";
  } else if (pwdValue !== "" && repwdValue !== "" && pwdValue !== repwdValue) {
    correctImg.style.display = "block";
    correctImg.src = "/images/incorrect.png";
  }
}
