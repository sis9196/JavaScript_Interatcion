 

let heading = document.getElementById("Title");
let inputElement = document.getElementById("inputText");
let useButton = document.getElementById("UseButton");
let executeOutput = document.getElementById("outputText");

var hungry = ["Crepe", "Pasta", "Pizza","Cake","Sushi"];

useButton.addEventListener("click", function() {
  let currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

function generate(incUserInput) {
  let randomIndex = Math.floor(Math.random() * hungry.length);
  console.log(randomIndex);
  var selectedRandomHungryText = hungry[randomIndex];
  executeOutput.innerText = incUserInput + " " + selectedRandomHungryText;
}

function restyle() {
  var randR = Math.random() * 255;
  var randG = Math.random() * 255;
  var randB = Math.random() * 255;
  var randOutputColor = "rgb(" + randR + "," + randG + "," + randB + ")";
  page.style.backgroundColor = randOutputColor;
}
