/* Thoses scripts are here to spawn kuru gif or other */

var numberGif = 0;
var counter = document.getElementById("counter");
var cab = document.getElementById("cab");
var kuru = document.getElementsByClassName("kuru-gif");

var arrayOfAudio = [
  new Audio(
    "../audio/Kururinto.mp3"
  ),
  new Audio(
    "../audio/Kuru.mp3"
  ),
  new Audio(
    "../audio/Kururin.mp3"
  ),
];

for (let audio of arrayOfAudio) {
  audio.preload = "auto";
}

function doKuru() {
  var audio;
  var random = Math.floor(Math.random() * 3) + 0;
  audio = arrayOfAudio[random].cloneNode();
  audio.play();
  audio.addEventListener("ended", function () {
    this.remove();
  });
}
function randomKuru() {
  numberGif++;
  var newKuru = document.createElement("img");
  newKuru.setAttribute("class", "kuru-gif");
  newKuru.setAttribute("id", "gif");
  newKuru.src = "../img/kururin-kuru-kuru-transparent.gif";
  document.body.appendChild(cab);
  cab.appendChild(newKuru);
  for (let i = 0; i < kuru.length; i++) {
    counter.innerHTML = numberGif;
    kuru[i].style.top =
      Math.floor(Math.random() * window.innerHeight) + 50 + "px";
    kuru[i].style.left =
      Math.floor(Math.random() * window.innerWidth) + 50 + "px";
  }
  doKuru();
}

var kuruR = document.getElementsByClassName("kuru-gif-rain");
 function rainKuru() {
  numberGif++;
  var newKuru = document.createElement("img");
  newKuru.setAttribute("class", "kuru-gif-rain");
  newKuru.setAttribute("id", "gif");
  newKuru.src = "../img/kururin-kuru-kuru-transparent.gif";
  document.body.appendChild(cab);
  cab.appendChild(newKuru);
  for (let i = 0; i < kuruR.length; i++) {
    counter.innerHTML = numberGif;
    kuruR[i].setAttribute(
      "style",
      `animation: rain-anim ${Math.floor(Math.random() * 100) + "s"} infinite`
    );
    kuruR[i].style.left =
      Math.floor(Math.random() * window.innerWidth) + 50 + "px";
  }
  doKuru();
}
var kuruRo = document.getElementsByClassName("kuru-gif-rotate")
function rotateKuru() {
  numberGif++;
  var newKuru = document.createElement("img");
  newKuru.setAttribute("class", "kuru-gif-rotate");
  newKuru.setAttribute("id", "gif");
  newKuru.src = "../img/kururin-kuru-kuru-transparent.gif";
  document.body.appendChild(cab);
  cab.appendChild(newKuru);
  for (let i = 0; i < kuruRo.length; i++) {
    counter.innerHTML = numberGif;
    kuruRo[i].setAttribute(
      "style",
      `animation: rotation ${Math.floor(Math.random() * 10) + "s"} infinite ease`
    );
    kuruRo[i].style.top =
      Math.floor(Math.random() * window.innerHeight) + 50 + "px";
    kuruRo[i].style.left =
      Math.floor(Math.random() * window.innerWidth) + 50 + "px";
  }
  doKuru();
}
