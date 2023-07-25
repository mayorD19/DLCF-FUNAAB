const slider = document.querySelector(".slider");
let count = 0;

function slideImages() {
  count++;
  if (count > 2) {
    count = 0;
  }
  slider.style.transform = `translateX(-${count * 100}%)`;
}

// Call the slideImages function
setInterval(slideImages, 5000);