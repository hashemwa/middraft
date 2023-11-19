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
const programElements = document.querySelectorAll(
  ".alimtitle, .line2alim, .line2about, .alimdes, .alimdes2, .alimdes3, .alimdes4, .alimdes5, .alimdesm, .linefaculty, .quote, .quoteby"
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

function toggleDropdown(id) {
  var selectedDropdown = document.getElementById(id);

  // Check if the clicked item is already active
  if (selectedDropdown.classList.contains("active")) {
    // Add 'closing' class to apply the closing animation
    selectedDropdown.classList.add("closing");

    // Remove 'active' class after a delay to allow the animation to finish
    setTimeout(function () {
      selectedDropdown.classList.remove("active", "closing");
    }, 1000); // The delay should match the duration of the animation

    // Remove the highlighted class for all buttons
    var buttons = document.querySelectorAll(
      ".level1, .level2, .level3, .level4, .level5, .level6, .level7, .level8, " +
        ".book1, .book2, .book3, .book4, .book5, .book6, .book7, .book8, " +
        ".level1m, .level2m, .level3m, .level4m, .level5m, .level6m, .level7m, .level8m, " +
        ".book1m, .book2m, .book3m, .book4m, .book5m, .book6m, .book7m, .book8m"
    );
    buttons.forEach(function (button) {
      button.classList.remove("highlighted");
    });
  } else {
    // Hide all dropdowns and remove 'active' class
    var dropdowns = document.querySelectorAll(
      ".dropdownlevel, .dropdownlevel2, .dropdownlevel3, .dropdownlevel4, .dropdownlevel5, .dropdownlevel6, .dropdownlevel7, .dropdownlevel8, " +
        ".dropdownbook, .dropdownbook2, .dropdownbook3, .dropdownbook4, .dropdownbook5, .dropdownbook6, .dropdownbook7, .dropdownbook8, " +
        ".dropdownquran, .dropdownquran2, .dropdownlevelm"
    );
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove("active");
    });

    // Show the selected dropdown
    selectedDropdown.classList.add("active");

    // Remove the highlighted class for all buttons
    var buttons = document.querySelectorAll(
      ".level1, .level2, .level3, .level4, .level5, .level6, .level7, .level8, " +
        ".book1, .book2, .book3, .book4, .book5, .book6, .book7, .book8, " +
        ".level1m, .level2m, .level3m, .level4m, .level5m, .level6m, .level7m, .level8m, " +
        ".book1m, .book2m, .book3m, .book4m, .book5m, .book6m, .book7m, .book8m"
    );
    buttons.forEach(function (button) {
      button.classList.remove("highlighted");
    });

    // Add the highlighted class for the clicked button
    var button = document.querySelector("." + id);
    button.classList.add("highlighted");
  }
}

function toggleCourse(courseId) {
  var courseContent = document.getElementById(courseId + "-content");
  courseContent.style.display =
    courseContent.style.display === "block" ? "none" : "block";
}

function closeCourse(courseId) {
  var courseContent = document.getElementById(courseId + "-content");
  courseContent.style.display = "none";
}
