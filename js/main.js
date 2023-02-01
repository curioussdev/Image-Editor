const fileInput = document.querySelector(".file-input");
const previewImg = document.querySelector(".preview-img img");
const chooseImgBtn = document.querySelector(".choose-img");

const filterOptions = document.querySelectorAll(".filter button");
const filterName = document.querySelector(".filter-info .name");
const filterSlider = document.querySelector(".slider input");
const filterValue = document.querySelector(".filter-info .value");

let brightness = 100,
saturation = 100,
inversion = 0,
grayscale = 0;


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

        if(option.id === "brightness"){ // persist the state of the filters in the slider range
            filterSlider.max = "200";
            filterSlider.value =   brightness
            filterValue.innerText = `${brightness}%`
        } else if(option.id === "saturation") {
            filterSlider.max = "200";
            filterSlider.value =   saturation
            filterValue.innerText = `${saturation}%`
        } else if(option.id === "inversion"){
            filterSlider.max = "100";
            filterSlider.value =  inversion
            filterValue.innerText = `${inversion}%`
        } else {
            filterSlider.max = "100"
            filterValue.innerText = `${grayscale}%`
        }
    });
});

const updateFilter = () => {
    filterValue.innerText = `${filterSlider.value}%`;
    const selectedFilter = document.querySelector(".filter .active"); // getting selected filter btn

    if(selectedFilter.id === "brightness"){
        brightness = filterSlider.value;
    } else if(selectedFilter.id === "saturation"){
        saturation = filterSlider.value;
    } else if(selectedFilter.id === "inversion") {
        inversion = filterSlider.value;
    } else {
        grayscale = filterSlider.value;
    }
};

fileInput.addEventListener("change", loadImage);
filterSlider.addEventListener("input", updateFilter);
chooseImgBtn.addEventListener("click", () => fileInput.click());