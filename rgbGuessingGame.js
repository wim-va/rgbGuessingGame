var colors = ["rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)"];
var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random() * squares.length)];
var message = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor === pickedColor) {
            message.textContent = "You WIN!";
            h1.style.backgroundColor = pickedColor;
            for (var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = pickedColor;
            }
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again!";
        }
    })
}