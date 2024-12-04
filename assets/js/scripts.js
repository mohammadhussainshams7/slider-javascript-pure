/* current slider show */
let currentIndex = 0;

/* Get All Items Slider */
let itemSlider = document.getElementsByClassName("slider-items")

/* Number Of Items In Slider */
const numberSlider = itemSlider.length;
function slider() {
    for (let index = 0; index < numberSlider; index++) {
        itemSlider[index]?.classList.remove("active");
    }
    itemSlider[currentIndex]?.classList.add("active")
   /*  */
}
slider()
setInterval(()=>{nextfunction()},5000)
/* Get Buttons and Handeler Element */
let nextButton = document.getElementById("nextSlider")
let prevButton = document.getElementById("prevSlider")
/* nextButton.onclick()=nextfunction();
prevButton.onclick()=prevfunction(); */
prevButton?.addEventListener("click", prevfunction);
nextButton?.addEventListener("click", nextfunction);


function nextfunction() {
    if( currentIndex > numberSlider-2){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    
    slider();
}
function prevfunction() {
    if( currentIndex <= 0    ){
        currentIndex = numberSlider-1;
    }else{
        currentIndex--;
    }

    slider();
}