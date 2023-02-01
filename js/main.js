const fileInput = document.querySelector(".file-input");
const previewImg = document.querySelector(".preview-img img");
const chooseImgBtn = document.querySelector(".choose-img");

const loadImage = (e) => {
    let file = fileInput.files[0] // getting user selected file
    if(!file) return; // para não retornar undefined em caso de não selecionar uma img  
    previewImg.src = URL.createObjectURL(file);
    
    previewImg.addEventListener("load", ()=> {
        document.querySelector(".container").classList.remove("disable");
    });
}

fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click())