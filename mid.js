// Function to check if an element is in the view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function for the fade-in effect
function handleFadeIn() {
  const elements = document.querySelectorAll(".offerimage, .offerimage2");
  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.style.opacity = 1;
    }
  });
}

// Attach the handleFadeIn function to the scroll event
window.addEventListener("scroll", handleFadeIn);

// Initially, check if any elements are in the viewport on page load
window.addEventListener("load", handleFadeIn);

// Get the elements with class "programs" and "programs2"
const programElements = document.querySelectorAll(".programs, .programs2");

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to update the elements' transform based on their visibility
function updateElements() {
  let allAnimated = true;

  programElements.forEach((element) => {
    if (!element.classList.contains("animated") && isInViewport(element)) {
      element.classList.add("animated");
      element.style.transform = "translateY(0)";
    } else if (!element.classList.contains("animated")) {
      element.style.transform = "translateY(20%)";
      allAnimated = false;
    }
  });

  // If all elements have been animated, remove the scroll event listener
  if (allAnimated) {
    window.removeEventListener("scroll", updateElements);
  }
}

// Add an event listener to check for element visibility on scroll
window.addEventListener("scroll", updateElements);

// Initial check for visibility
updateElements();

// Type only numbers
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function (e) {
  const inputValue = phoneInput.value;

  // Remove all non-numeric characters
  const numericValue = inputValue.replace(/[^0-9]/g, "");

  // Format the phone number
  let formattedValue = "";

  if (numericValue.length > 0) {
    formattedValue = "(" + numericValue.substring(0, 3);

    if (numericValue.length > 3) {
      formattedValue += ")-" + numericValue.substring(3, 6);

      if (numericValue.length > 6) {
        formattedValue += "-" + numericValue.substring(6, 10);
      }
    }
  }
  phoneInput.value = formattedValue;
});

// Carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel");
  var wrapper = document.querySelector(".carousel-wrapper");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Calculate the slide offset based on the current slide index
  var slideOffset = (slideIndex - 1) * -100;
  wrapper.style.transform = `translateX(${slideOffset}%)`;

  // Highlight the active dot
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex - 1].classList.add("active");
}


