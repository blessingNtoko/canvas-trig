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
    drawCircle("#839192", 1, xCircleCenter, yCircleCenter, radius, 0, 2 * Math.PI);
    drawLine("#839192", 1, xCircleCenter, 0, xCircleCenter, 600);
    drawLine("#839192", 1, 0, yCircleCenter, 600, yCircleCenter);
}

function reDrawCanvas() {
    
}

function drawRectangle(strokeColor, lineWidth, startX, startY, endX, endY) {
    context.strokeStyle = strokeColor;
    context.lineWidth = lineWidth;
    context.strokeRect(startX, startY, endX, endY);
}

function drawCircle(strokeColor, lineWidth, xCircCenter, yCircCenter, radius, arcStart, arcEnd) {
    context.strokeStyle = strokeColor;
    context.lineWidth = lineWidth;
    context.beginPath();
    context.arc(xCircCenter, yCircCenter, radius, arcStart, arcEnd);
    context.stroke();
}

function drawLine(strokeColor, lineWidth, xStart, yStart, xEnd, yEnd) {
    context.strokeStyle = strokeColor;
    context.lineWidth = lineWidth;
    context.move(xStart, yStart);
    context.lineTo(xEnd, xStart);
    context.stroke();
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

