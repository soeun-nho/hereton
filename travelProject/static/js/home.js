const divs = document.querySelectorAll(
    ".st_light, .st_people, .st_clean, .pl_clean, .pl_station, .pl_toilet"
);

const stImages = document.querySelectorAll(
    ".pin-st-a, .pin-st-b, .pin-st-c, .pin-st-d, .pin-st-e, .pin-st-f, .pin-st-g, .pin-st-h, .pin-st-i, .pin-st-j"
);
const plImages = document.querySelectorAll(
    ".pin-pl-a, .pin-pl-b, .pin-pl-c, .pin-pl-d, .pin-pl-e, .pin-pl-f, .pin-pl-g, .pin-pl-h, .pin-pl-i, .pin-pl-j"
);

const stLitghImageSources = [
    "./images/st_light 4.png",
    "./images/st_light 5.png",
    "./images/st_light 4.png",
    "./images/st_light 5.png",
    "./images/st_light 5.png",
    "./images/st_light 1.png",
    "./images/st_light 4.png",
    "./images/st_light 3.png",
    "./images/st_light 2.png",
    "./images/st_light 1.png",
];

const stPeopleImageSources = [
    "./images/st_people 4.png",
    "./images/st_people 5.png",
    "./images/st_people 5.png",
    "./images/st_people 3.png",
    "./images/st_people 4.png",
    "./images/st_people 2.png",
    "./images/st_people 5.png",
    "./images/st_people 3.png",
    "./images/st_people 3.png",
    "./images/st_people 2.png",
];

const stCleanImageSources = [
    "./images/st_clean 5.png",
    "./images/st_clean 5.png",
    "./images/st_clean 3.png",
    "./images/st_clean 4.png",
    "./images/st_clean 4.png",
    "./images/st_clean 2.png",
    "./images/st_clean 5.png",
    "./images/st_clean 2.png",
    "./images/st_clean 2.png",
    "./images/st_clean 3.png",
];

const plCleanImageSources = [
    "./images/pl_clean 4.png",
    "./images/pl_clean 1.png",
    "./images/pl_clean 1.png",
    "./images/pl_clean 5.png",
    "./images/pl_clean 3.png",
    "./images/pl_clean 5.png",
    "./images/pl_clean 5.png",
    "./images/pl_clean 2.png",
    "./images/pl_clean 4.png",
    "./images/pl_clean 3.png",
];

const plStationImageSources = [
    "./images/pl_station 2.png",
    "./images/pl_station 4.png",
    "./images/pl_station 3.png",
    "./images/pl_station 4.png",
    "./images/pl_station 5.png",
    "./images/pl_station 5.png",
    "./images/pl_station 5.png",
    "./images/pl_station 4.png",
    "./images/pl_station 5.png",
    "./images/pl_station 1.png",
];

const plToiletImageSources = [
    "./images/pl_toilet 4.png",
    "./images/pl_toilet 4.png",
    "./images/pl_toilet 1.png",
    "./images/pl_toilet 5.png",
    "./images/pl_toilet 2.png",
    "./images/pl_toilet 5.png",
    "./images/pl_toilet 4.png",
    "./images/pl_toilet 2.png",
    "./images/pl_toilet 3.png",
    "./images/pl_toilet 4.png",
];

divs.forEach((div, index) => {
    div.addEventListener("click", function () {
        const isActive = this.classList.contains("active");

        divs.forEach((otherDiv) => {
            otherDiv.style.backgroundColor = "";
            otherDiv.querySelector("p").style.color = "";
            otherDiv.classList.remove("active");
            resetImage2(otherDiv.querySelector("img"));
        });

        if (!isActive) {
            this.style.backgroundColor = "#8000FF";
            this.querySelector("p").style.color = "#ffffff";
            this.classList.add("active");
            changeImage2(this.querySelector("img"));

            if (this.classList.contains("st_light")) {
                showImages(stImages);
                hideImages(plImages);
                changeImage1(stImages, stLitghImageSources);
            } else if (this.classList.contains("st_people")) {
                showImages(stImages);
                hideImages(plImages);
                changeImage1(stImages, stPeopleImageSources);
            } else if (this.classList.contains("st_clean")) {
                showImages(stImages);
                hideImages(plImages);
                changeImage1(stImages, stCleanImageSources);
            } else if (this.classList.contains("pl_clean")) {
                showImages(plImages);
                hideImages(stImages);
                changeImage1(plImages, plCleanImageSources);
            } else if (this.classList.contains("pl_station")) {
                showImages(plImages);
                hideImages(stImages);
                changeImage1(plImages, plStationImageSources);
            } else if (this.classList.contains("pl_toilet")) {
                showImages(plImages);
                hideImages(stImages);
                changeImage1(plImages, plToiletImageSources);
            }
        } else {
            hideImages(plImages);
            hideImages(stImages);
        }
    });

    if (index === 0) {
        div.click();
    }
});

function changeImage1(images, imageSources) {
    images.forEach((image, index) => {
        const imgSrc = image.src;
        const newImgSrc = imageSources[index];
        if (imgSrc !== newImgSrc) {
            image.src = newImgSrc;
        }
    });
}

function resetImage1(images) {
    images.forEach((image) => {
        const imgSrc = image.src;
        const newImgSrc = "";
        if (imgSrc !== newImgSrc) {
            image.src = imgSrc;
        }
    });
}

function changeImage2(img) {
    const imgSrc = img.src;
    const newImgSrc = imgSrc.replace("_black.svg", "_white.svg");
    img.src = newImgSrc;
}

function resetImage2(img) {
    const imgSrc = img.src;
    const newImgSrc = imgSrc.replace("_white.svg", "_black.svg");
    img.src = newImgSrc;
}

function showImages(images) {
    images.forEach((image)->{
        image.style.display = "block";
    });
}

function hideImages(images) {
    images.forEach((image) -> {
        image.style.display = "none";
    });
}
