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
  const elements = document.querySelectorAll(
    ".quote, .quoteby, .quotebutton, .offerimage, .offerimage2"
  );
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
const programElements = document.querySelectorAll(
  ".programs, .programs2, .learning"
);

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
var touchStartX = 0;
var touchStartY = 0;
var touchEndX = 0;
var touchEndY = 0;
showSlides(slideIndex);

var announce = document.getElementById("announce");
var wrapper = document.querySelector(".carousel-wrapper");
var hyperlinks = document.querySelectorAll("a");

// Touch start event listener
announce.addEventListener("touchstart", function (event) {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
  wrapper.style.transition = "none";
});

// Prevent default behavior for touchstart on hyperlinks
hyperlinks.forEach(function (link) {
  link.addEventListener("touchmove", function (event) {
    event.preventDefault();
  });
});

announce.addEventListener("touchmove", function (event) {
  var touchCurrentX = event.touches[0].clientX;
  var touchCurrentY = event.touches[0].clientY;
  var touchDeltaX = touchCurrentX - touchStartX;
  var touchDeltaY = touchCurrentY - touchStartY;

  // Check if vertical scrolling distance is greater than horizontal
  if (Math.abs(touchDeltaY) > Math.abs(touchDeltaX)) {
    // Allow vertical scrolling
    return;
  }

  event.preventDefault();

  var slideOffset =
    (slideIndex - 1) * -100 + (touchDeltaX / wrapper.clientWidth) * 100;
  wrapper.style.transform = `translateX(${slideOffset}%)`;
});

// Touch end event listener
announce.addEventListener("touchend", function (event) {
  touchEndX = event.changedTouches[0].clientX;
  touchEndY = event.changedTouches[0].clientY;
  handleSwipe();
  wrapper.style.transition = "transform 0.5s ease";
});

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

function handleSwipe() {
  var swipeThreshold = 50; // Adjust this value as needed

  // Calculate the horizontal swipe distance
  var swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) < swipeThreshold) {
    // If the swipe distance is less than the threshold, reset the position
    wrapper.style.transform = `translateX(${(slideIndex - 1) * -100}%)`;
  } else {
    if (swipeDistance > 0) {
      // Swipe left, go to the previous slide
      plusSlides(-1);
    } else {
      // Swipe right, go to the next slide
      plusSlides(1);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".menu__item");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var nestedMenu = this.nextElementSibling;

      if (nestedMenu.classList.contains("nested-menu-visible")) {
        nestedMenu.classList.remove("nested-menu-visible");
        this.classList.remove("active-arrow");
      } else {
        // Hide any other open nested menus
        closeAllNestedMenus();
        nestedMenu.classList.add("nested-menu-visible");
        this.classList.add("active-arrow");
      }
    });
  });

  function closeAllNestedMenus() {
    var allNestedMenus = document.querySelectorAll(".nested-menu");
    var allMenuItems = document.querySelectorAll(".menu__item");

    allNestedMenus.forEach(function (menu) {
      menu.classList.remove("nested-menu-visible");
    });

    allMenuItems.forEach(function (item) {
      item.classList.remove("active-arrow");
    });
  }
});
