// Function to change the status of the light and background when the button is toggled
function btnStatus() {
  let bgContent = document.querySelector(".content"); // Get the content area where the background color will be changed ✅
  let lightBulb = document.querySelector(".light-bulb"); // Get the light bulb image element ✅
  let btnSlider = document.querySelector(".switch input"); // Get the slider button input element (checkbox) ✅

// Check if the slider is in the "checked" state (button is ON)
// If checked, change background to dark and switch the light bulb image to "on" ✅
// If not checked (button is OFF), change background to light and switch the light bulb image to "off" ✅
  if (btnSlider.checked) {
    bgContent.style.backgroundColor = "rgb(34, 34, 34)";
    lightBulb.src = "images/bulb-on.png";
  } else {
    bgContent.style.backgroundColor = "rgb(9, 8, 6)";
    lightBulb.src = "images/bulb-off.png";
  }
}
