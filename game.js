const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    dx: 2,
    dy: -2
};
const paddle = {
    width: 75,
    height: 50,
    x: (canvas.width - 75) / 2, 
    y: canvas.height - 10
};
let rightPressed = false;
let leftPressed = false;