function btnStatus() {
  let status = document.querySelector(".btn-text");
  let bgContent = document.querySelector(".btn");

  if (status.innerHTML === "OFF") {
    status.innerHTML = "ON";
    bgContent.style.backgroundColor = "green";
  } else {
    status.innerHTML = "OFF";
    bgContent.style.backgroundColor = "red";
  }
}
