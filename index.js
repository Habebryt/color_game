var rgbDisplay = document.getElementById("rgbDisplay");
var message = document.getElementById("message");
var resetBtn = document.getElementById("resetBtn");
var easyBtn = document.getElementById("easyBtn");
var mediumBtn = document.getElementById("mediumBtn");
var hardBtn = document.getElementById("hardBtn");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var color4 = document.getElementById("color4");
var color5 = document.getElementById("color5");
var color6 = document.getElementById("color6");
var color7 = document.getElementById("color7");
var color8 = document.getElementById("color8");
var color9 = document.getElementById("color9");

var colorBoxes = [color1,color2,color3,color4,color5,color6,color7,color8,color9,
];

// Game variables
var correctColor = "";
var correctAnswer = 0;
var currentLevel = 3; // Start with Easy (3 boxes)

// Math Function to generate random RGB color
function makeRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Function to hide extra boxes based on level
function showBoxesForLevel() {
  // Hide all boxes first
  for (var i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.display = "none";
  }

  // Show boxes based on current level
  for (var i = 0; i < currentLevel; i++) {
    colorBoxes[i].style.display = "block";
  }
}

// Function to start new game
function startNewGame() {
  // Show correct number of boxes for level
  showBoxesForLevel();

  // Reset message
  message.textContent = "Click the color that matches the RGB value!";
  message.className = "";

  // Generate random colors for active boxes only
  for (var i = 0; i < currentLevel; i++) {
    var randomColor = makeRandomColor();
    colorBoxes[i].style.backgroundColor = randomColor;
    colorBoxes[i].className = "color-box"; // Remove hidden class
  }

  // Pick random correct answer from active boxes
  correctAnswer = Math.floor(Math.random() * currentLevel);
  correctColor = colorBoxes[correctAnswer].style.backgroundColor;

  // Show the correct RGB value
  rgbDisplay.textContent = correctColor.toUpperCase();
}

// Function to change level to easy (3 boxes)
function changeToEasy() {
  currentLevel = 3;
  startNewGame();
}

// Function to change level to medium (6 boxes)
function changeToMedium() {
  currentLevel = 6;
  startNewGame();
}

// Function to change level to hard (9 boxes)
function changeToHard() {
  currentLevel = 9;
  startNewGame();
}

// Function to handle correct guess
function handleCorrectGuess() {
  message.textContent = "Correct! Well done!";
  message.className = "correct";

  // Change all active boxes to correct color
  for (var i = 0; i < currentLevel; i++) {
    colorBoxes[i].style.backgroundColor = correctColor;
  }
}

// Function to handle wrong guess
function handleWrongGuess(clickedBox) {
  message.textContent = "Try again!";
  message.className = "wrong";

  // Hide the wrong box
  clickedBox.className = "color-box hidden";
}

// Function to check if clicked color is correct
function checkColor(clickedBox) {
  var clickedColor = clickedBox.style.backgroundColor;

  if (clickedColor === correctColor) {
    handleCorrectGuess();
  } else {
    handleWrongGuess(clickedBox);
  }
}

// Add click events to color boxes
color1.addEventListener("click", function () {
  checkColor(color1);
});

color2.addEventListener("click", function () {
  checkColor(color2);
});

color3.addEventListener("click", function () {
  checkColor(color3);
});

color4.addEventListener("click", function () {
  checkColor(color4);
});

color5.addEventListener("click", function () {
  checkColor(color5);
});

color6.addEventListener("click", function () {
  checkColor(color6);
});

color7.addEventListener("click", function () {
  checkColor(color7);
});

color8.addEventListener("click", function () {
  checkColor(color8);
});

color9.addEventListener("click", function () {
  checkColor(color9);
});

// Add click event to level buttons
easyBtn.addEventListener("click", function () {
  changeToEasy();
});

mediumBtn.addEventListener("click", function () {
  changeToMedium();
});

hardBtn.addEventListener("click", function () {
  changeToHard();
});

// Add click event to new game button
resetBtn.addEventListener("click", function () {
  startNewGame();
});

// Start the first game when page loads
startNewGame();
