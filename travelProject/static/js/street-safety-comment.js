const button = document.getElementById("img_btn");
const image = document.getElementById("btn_image");


function handleInputChange() {
    const inputText = document.getElementById("input-text").value;

    if (inputText.trim() !== "") {
        button.disabled = false;
        image.src = "submit_O.svg";
    } else {
        button.disabled = true;
        image.src = "submit_X.svg";
    }
}

document.getElementById("input-text").addEventListener("input", handleInputChange);


// back 버튼 화면 이동 코드
function redirectToCommentPage() {
    window.location.href = "street-safety.html";
}
const back_btn = document.getElementById("back_btn");
// 버튼 클릭 이벤트에 redirectToCommentPage 함수를 연결합니다.
back_btn.addEventListener("click", redirectToCommentPage);



// 평가 완료 버튼 클릭 시 평가 상세보기 화면으로 넘어감
function redirectToHome() {
    window.location.href = "store-safety.html"; //여기에 평가 상세보기 html 파일명 입력
}

// 버튼 클릭 이벤트에 redirectToHome 함수를 연결합니다.
button.addEventListener("click", redirectToHome);


