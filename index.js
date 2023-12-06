let switchOn = document.getElementById("switch-on");
let switchOff = document.getElementById("switch-off");
let bulbImage = document.getElementById("bulbImage");
let catImage = document.getElementById("catImage");
let Switched = document.getElementById("Switched");
switchOff.addEventListener("click", function () {
  bulbImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  catImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  Switched.textContent = "Switched OFF";
  switchOn.style.background = "green";
  switchOff.style.background = "rgb(203, 210, 217)";
});
switchOn.addEventListener("click", function () {
  bulbImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  catImage.src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  Switched.textContent = "Switched ON";
  switchOff.style.background = "red";
  switchOn.style.background = "rgb(203, 210, 217)";
});
