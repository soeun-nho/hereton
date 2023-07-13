const divs = document.querySelectorAll(
    ".st_light, .st_people, .st_clean, .pl_clean, .pl_station, .pl_toilet"
);

const pinDiv = document.querySelector(".pin");
const scoreImg = pinDiv.querySelector(".score");

divs.forEach((div) => {
    div.addEventListener("click", function () {
        // div 활성화 확인
        const isActive = this.classList.contains("active");

        // 모든 div 원래 상태로
        divs.forEach((otherDiv) => {
            otherDiv.style.backgroundColor = "";
            otherDiv.querySelector("p").style.color = "";
            otherDiv.classList.remove("active");
            resetImage(otherDiv.querySelector("img"));
        });

        if (!isActive) {
            // 클릭된 div 활성화
            this.style.backgroundColor = "#8000FF";
            this.querySelector("p").style.color = "#ffffff";
            this.classList.add("active");
            changeImage(this.querySelector("img"));

            // div 점수에 따라 이미지
            const score = parseFloat(this.querySelector("p").textContent);
            let imagePath = "./image/st_light";
            if (div.classList.contains("st_people")) {
                imagePath = "./image/st_people";
            } else if (div.classList.contains("st_clean")) {
                imagePath = "./image/st_clean";
            } else if (div.classList.contains("pl_clean")) {
                imagePath = "./image/pl_clean";
            } else if (div.classList.contains("pl_station")) {
                imagePath = "./image/pl_station";
            } else if (div.classList.contains("pl_toilet")) {
                imagePath = "./image/pl_toilet";
            }

            if (score >= 4.1) {
                scoreImg.src = imagePath + " 5.png";
            } else if (score >= 3.1) {
                scoreImg.src = imagePath + " 4.png";
            } else if (score >= 2.1) {
                scoreImg.src = imagePath + " 3.png";
            } else if (score >= 1.1) {
                scoreImg.src = imagePath + " 2.png";
            } else if (score >= 0.1) {
                scoreImg.src = imagePath + " 1.png";
            } else {
                scoreImg.src = "";
            }
        } else {
            scoreImg.src = "";
        }
    });
});

function changeImage(img) {
    const imgSrc = img.src;
    const newImgSrc = imgSrc.replace("_black.svg", "_white.svg");
    img.src = newImgSrc;
}

function resetImage(img) {
    const imgSrc = img.src;
    const newImgSrc = imgSrc.replace("_white.svg", "_black.svg");
    img.src = newImgSrc;
}
