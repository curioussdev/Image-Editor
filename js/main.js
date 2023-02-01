const fileInput = document.querySelector(".file-input");
const chooseImgBtn = document.querySelector(".choose-img");

const loadImage = () => {
    let file = fileInput.files[0] // gettinf user selected file
    console.log(file)
}

fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click())