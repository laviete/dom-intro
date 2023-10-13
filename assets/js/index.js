const slides = [
  {
    src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape1",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape2",
  },
  {
    src: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape3",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape4",
  },
];
let currentSlideIndex = 0;
const slideImg = document.querySelector("img");
updateSlideImage(currentSlideIndex);

const [prevBtn, nextBtn] = document.querySelectorAll(".navBtn");
function nextSlideHandler(params) {
  /* if(currentSlideIndex < slides.length -1){
      currentSlideIndex++
  }
  else{
      currentSlideIndex=0;
  } */
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlideImage(currentSlideIndex);
}
function prevSlideHandler(params) {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlideImage(currentSlideIndex);
}
nextBtn.addEventListener("click", nextSlideHandler);
prevBtn.addEventListener("click", prevSlideHandler);
function updateSlideImage(currentSlideIndex) {
  slideImg.src = slides[currentSlideIndex].src;
  slideImg.alt = slides[currentSlideIndex].alt;
}

//--------------------hw-----------------------------
/* slideImg.addEventListener("mouseover", nextSlideHandler);
const changeTextBtn = document.querySelector(".changeTextBtn");
changeTextBtn.addEventListener("click", () => {
  changeTextBtn.textContent = "changes applied";
});
const changeColorBtn = document.querySelector(".changeColorBtn");
changeColorBtn.addEventListener("click", () => {
  changeColorBtn.setAttribute('style', 'color:#E4E8F4; background-color:#8FA2CA;');
});
 */