// Function to change the status of the light and background when the button is toggled
function btnStatus() {
  
  // Get the content area where the background color will be changed
  let bgContent = document.querySelector(".content");

  // Get the light bulb image element
  let lightBulb = document.querySelector(".light-bulb");

  // Get the slider button input element (checkbox)
  let btnSlider = document.querySelector(".switch input"); 

  // Check if the slider is in the "checked" state (button is ON)
  if (btnSlider.checked) {
    // If checked, change background to dark and switch the light bulb image to "on"
    bgContent.style.backgroundColor = "rgb(34, 34, 34)";
    lightBulb.src = "images/bulb-on.png";
  } else {
    // If not checked (button is OFF), change background to light and switch the light bulb image to "off"
    bgContent.style.backgroundColor = "rgb(9, 8, 6)";
    lightBulb.src = "images/bulb-off.png";
  }
}
