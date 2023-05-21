/* Thoses scripts are here to spawn kuru gif or other */

var numberGif = 0;
var counter = document.getElementById("counter");
var cab = document.getElementById("cab");
var object = document.getElementsByClassName("kuru-gif");

var arrayOfAudio = [
  new Audio(
    "https://cdn.glitch.global/74a51c6a-712a-42a0-97bb-714bd339d1ad/Kururinto.mp3"
  ),
  new Audio(
    "https://cdn.glitch.global/74a51c6a-712a-42a0-97bb-714bd339d1ad/Kuru.mp3"
  ),
  new Audio(
    "https://cdn.glitch.global/74a51c6a-712a-42a0-97bb-714bd339d1ad/Kururin.mp3"
  ),
];

for (const audio of arrayOfAudio) {
  audio.preload = "auto";
}

function doKuru() {
  var audio;
  var random = Math.floor(Math.random() * 3) + 1;
  audio = arrayOfAudio[random].cloneNode();
  audio.play();
  audio.addEventListener("ended", function () {
    this.remove();
  });
}
async function randomKuru() {
  numberGif++;
  var newObject = document.createElement("img");
  newObject.setAttribute("class", "kuru-gif");
  newObject.setAttribute("id", "gif");
  newObject.setAttribute("data-rain", "true");
  newObject.src =
    "https://cdn.glitch.global/74a51c6a-712a-42a0-97bb-714bd339d1ad/kururin-kuru-kuru-transparent.gif";
  document.body.appendChild(cab);
  cab.appendChild(newObject);
  for (let i = 0; i < object.length; i++) {
    counter.innerHTML = `${numberGif} Herta are here.`;
    object[i].style.top =
      Math.floor(Math.random() * window.innerHeight) + 50 + "px";
    object[i].style.left =
      Math.floor(Math.random() * window.innerWidth) + 50 + "px";
  }
  doKuru();
}

var objectR = document.getElementsByClassName("kuru-gif-rain");
async function rainKuru() {
  numberGif++;
  var newObject = document.createElement("img");
  newObject.setAttribute("class", "kuru-gif-rain");
  newObject.setAttribute("id", "gif");
  newObject.setAttribute("data-rain", "true");
  newObject.src =
    "https://cdn.glitch.global/74a51c6a-712a-42a0-97bb-714bd339d1ad/kururin-kuru-kuru-transparent.gif";
  document.body.appendChild(cab);
  cab.appendChild(newObject);
  for (let i = 0; i < objectR.length; i++) {
    counter.innerHTML = `${numberGif} Herta are here.`;
    objectR[i].setAttribute(
      "style",
      `animation: rain-anim ${Math.floor(Math.random() * 100) + "s"} infinite`
    );
    objectR[i].style.left =
      Math.floor(Math.random() * window.innerWidth) + 50 + "px";
  }
  doKuru();
}
