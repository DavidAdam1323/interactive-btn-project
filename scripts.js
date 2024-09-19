function btnStatus() {
  let bgContent = document.querySelector(".content");
  let lightBulb = document.querySelector(".light-bulb");
  let btnSlider = document.querySelector(".switch input"); 

  if (btnSlider.checked) {
    bgContent.style.backgroundColor = "rgb(34, 34, 34)";
    lightBulb.src = "/images/bulb-on.png";
  } else {
    bgContent.style.backgroundColor = "rgb(9, 8, 6)";
    lightBulb.src = "/images/bulb-off.png";
  }
}
