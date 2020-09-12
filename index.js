class MousePosition {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
}

const radius = 200;
const xCircleCenter = 300;
const yCircleCenter = 300;
let canvas;
let context;
let mousePos = new MousePosition(0, 0);
document.addEventListener("DomContentLoaded", setupCanvas);

function setupCanvas() {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    drawCanvas();
    canvas.addEventListener("mousemove", reDrawCanvas);
}

function drawCanvas() {
    drawRectangle("#839192", 5, 0, 0, 600, 600);
    drawCircle();
    drawLine();
    drawLine();
}

function reDrawCanvas() {
    
}

function drawRectangle(strokeColor, lineWidth, startX, startY, endX, endY) {
    context.strokeStyle = strokeColor;
    context.lineWidth = lineWidth;
    context.strokeRect(startX, startY, endX, endY);
}

function drawCircle(strokeColor, lineWidth, xCircleCenter, yCircleCenter, radius, arcStart, arcEnd) {
    context.strokeStyle = strokeColor;
    context.lineWidth = lineWidth;
    context.beginPath();
    context.arc(xCircleCenter, yCircleCenter, radius, arcStart, arcEnd);
    context.stroke();
}

function drawLine() {
    
}

function drawTextAtPoint() {
    
}

function getMousePosition() {
    
}

function getAngleUsingXAndY() {
    
}

function radiansToDegrees() {
    
}

function degreesToRadians() {
    
}

function drawTriangle() {
    
}

function getLineLength() {
    
}

