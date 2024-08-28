document.addEventListener("DOMContentLoaded", function () {
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".dot");
    var currentIndex = 0;
   
    function showSlide(index) {

        slides.forEach(function (slide) {
          slide.classList.remove("active");
        });
    
        dots.forEach(function (dot) {
          dot.classList.remove("active-dot");
        });
    
        slides[index].classList.add("active");
        dots[index].classList.add("active-dot");
      }
    
    function goToNextSlide() {
      currentIndex = (currentIndex + 1)% slides.length  ;
      showSlide(currentIndex);
    }

    document.querySelector(".next").onclick = function (e) {
      goToNextSlide();
    };
  
    console.log(currentIndex);
  });
  