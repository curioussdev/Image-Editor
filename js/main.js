const fileInput = document.querySelector(".file-input");
const previewImg = document.querySelector(".preview-img img");
const chooseImgBtn = document.querySelector(".choose-img");

const filterOptions = document.querySelectorAll(".filter button");
const filterName = document.querySelector(".filter-info .name");
const filterSlider = document.querySelector(".slider input");

const loadImage = () => {
    let file = fileInput.files[0] // getting user selected file
    if(!file) return; // para não retornar undefined em caso de não selecionar uma img  
    previewImg.src = URL.createObjectURL(file);
    
    previewImg.addEventListener("load", ()=> {
        document.querySelector(".container").classList.remove("disable");
    });
};

filterOptions.forEach(option => {
    option.addEventListener("click", ()=>{ // adding click event listenner to all filter buttons
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
        filterName.innerText = option.innerText;
    });
});

const updateFilter = () => {
    console.log(filterSlider.value)
};

fileInput.addEventListener("change", loadImage);
filterSlider.addEventListener("input", updateFilter);
chooseImgBtn.addEventListener("click", () => fileInput.click());