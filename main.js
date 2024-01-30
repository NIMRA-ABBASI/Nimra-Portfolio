// nav
const hamburger = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("ham-active");
  nav.classList.toggle("active");
});

//back-to-top effect
const back_to_top =document.querySelector(".back-to-top");
window.addEventListener("scroll", ()=>
{
  if(window.scrollY > 100)
  {
    back_to_top.classList.add("active-top");
  }
  else{
    back_to_top.classList.remove("active-top");
  }
})

//slider
const imageList = document.querySelectorAll(".image-list-div");
var counter = 0;
const totalSlides = imageList.length;

const goNext = () => {
  if (counter < totalSlides - 1) {
    counter++;
    slideimg();
  }
  handleSlideButtons();
};

const goPrev = () => {
  if (counter > 0) {
    counter--;
    slideimg();
  }
  handleSlideButtons();
};

const slideimg = () => {
  imageList.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 102}%)`;
  });
};

const handleSlideButtons = () => {
  const prevButton = document.getElementById("prev-slide");
  const nextButton = document.getElementById("next-slide");

  // Show or hide left button based on counter value
  prevButton.style.display = counter === 0 ? "none" : "flex";

  const maxScreenWidth = 1024;
  const hideRightButton =window.innerWidth <= maxScreenWidth ? counter === totalSlides - 1 : counter === totalSlides - 2;
  nextButton.style.display = hideRightButton ? "none" : "flex";
  
};
handleSlideButtons();
