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

// // dropdown
// var getArrow = document.getElementsByClassName("js-items");
// var dropDown = document.getElementsByClassName("display-none");
// $(getArrow).click(function() {
//     $(dropDown).toggleClass("display-block");
// });

// //dropdown(funaab)
// var showFunaab = document.getElementsByClassName("js-funaab");
// var getFunaab = document.getElementsByClassName("funaab-container");
// $(showFunaab).click(function() {
//     $(getFunaab).toggleClass("display-block");
//     $(dropDown).toggleClass("display-block");
// });

// $(getFunaab).click(function() {
//     $(getFunaab).toggleClass("display-block");
// });
// // var isInsideDropdown = dropDown.contains(Event.target);

// function closeDropDown(event) {
//     if (!getFunaab.contains(event.target)) {
//         getFunaab.classList.remove("display-block")
//     }
// }

// new code
// Add an event listener to the document to handle clicks anywhere on the page
document.addEventListener('click', function(event) {
    var dropdownContainers = document.querySelectorAll('.display-block');
    var isInsideDropdown = false;

    dropdownContainers.forEach(function(container) {
        if (container.contains(event.target)) {
            isInsideDropdown = true;
        }
    });

    // If the clicked element is not inside the dropdown or its container, close the dropdown
    if (!isInsideDropdown) {
        dropdownContainers.forEach(function(container) {
            container.classList.remove('display-block');
        });
    }
});

// Your existing JavaScript code for opening the dropdown
var getArrow = document.getElementsByClassName("js-items");
var dropDown = document.getElementsByClassName("display-none");
$(getArrow).click(function(event) {
    $(dropDown).toggleClass("display-block");
    event.stopPropagation(); // Stop the click event from propagating to the document
});

// Your existing JavaScript code for opening the sub-dropdown (funaab)
var showFunaab = document.getElementsByClassName("js-funaab");
var getFunaab = document.getElementsByClassName("funaab-container");

// Toggle the sub-dropdown without closing the main dropdown
$(showFunaab).click(function(event) {
    $(getFunaab).toggleClass("display-block");
    event.stopPropagation(); // Stop the click event from propagating to the document
});

// Add a click event listener to the document to close the sub-dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!getFunaab[0].contains(event.target)) {
        $(getFunaab).removeClass("display-block");
    }
});