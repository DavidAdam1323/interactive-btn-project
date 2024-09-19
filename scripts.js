function btnStatus() {
  let status = document.querySelector(".btn-text");
  let bgContent = document.querySelector(".content");
  let lightBulb = document.querySelector(".light-bulb");

  if (status.innerHTML === "OFF") {
    status.innerHTML = "ON";
    bgContent.style.backgroundColor = "rgb(34, 34, 34";
    lightBulb.src = "/images/bulb-on.png";
  } else {
    status.innerHTML = "OFF";
    bgContent.style.backgroundColor = "rgb(9, 8, 6)";
    lightBulb.src = "/images/bulb-off.png";
  }
}
