class MousePosition {
    constructor(x, y) {
        this.x = x;
        this.y = y
    }
}

const circleRadius = 200;
const xCircleCenter = 300;
const yCircleCenter = 300;
let canvas;
let context;
let mousePos = new MousePosition(0, 0);
document.addEventListener("DOMContentLoaded", setupCanvas);

function setupCanvas() {
    console.log("Setting up canvas...");
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    drawCanvas();
    canvas.addEventListener("mousemove", redrawCanvas);
}

function drawCanvas() {
    drawRectangle("#839192", 5, 0, 0, 600, 600);
    drawCircle("#839192", 1, xCircleCenter, yCircleCenter, circleRadius, 0, 2 * Math.PI);
    drawLine("#839192", 1, xCircleCenter, 0, xCircleCenter, 600);
    drawLine("#839192", 1, 0, yCircleCenter, 600, yCircleCenter);
}

function redrawCanvas(evt) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCanvas();
    getMousePosition(evt);
    drawTextAtPoint(`X : ${mousePos.x}`, 15, 25);
    drawTextAtPoint(`Y : ${mousePos.y}`, 15, 45);
    let angleOfMouseDegrees = getAngleUsingXAndY(mousePos.x, mousePos.y);
    drawTextAtPoint(`Degrees : ${angleOfMouseDegrees}`, 15, 65);
    drawTriangle(angleOfMouseDegrees);
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
    context.moveTo(xStart, yStart);
    context.lineTo(xEnd, yEnd);
    context.stroke();
}

function drawTextAtPoint(text, x, y) {
    context.font = "15px Arial";
    context.fillText(text, x, y);
}

function getMousePosition(evt) {
    let canvasDimensions = canvas.getBoundingClientRect();
    mousePos.x = Math.floor(evt.clientX - canvasDimensions.left);
    mousePos.y = Math.floor(evt.clientY - canvasDimensions.top);
    mousePos.x -= 300;
    mousePos.y = -1 * (mousePos.y - 300);
    return mousePos;
}

function getAngleUsingXAndY(x, y) {
    let adjacent = x;
    let opposite = y;
    return radiansToDegrees(Math.atan2(opposite, adjacent));
}

function radiansToDegrees(rad) {
    if (rad < 0) {
        return (360.0 + (rad * (180 / Math.PI))).toFixed(2);
    } else {
        return (rad * (180 / Math.PI)).toFixed(2);
    }
}

function degreesToRadians(deg) {
    return deg * (Math.PI / 180);
}

function drawTriangle(angleDeg) {
    context.moveTo(xCircleCenter, yCircleCenter);

    let xEndPoint = xCircleCenter + circleRadius * Math.cos(degreesToRadians(angleDeg));
    let yEndPoint = yCircleCenter + circleRadius * -(Math.sin(degreesToRadians(angleDeg)));

    drawTextAtPoint(`Radians : ${degreesToRadians(angleDeg).toFixed(2)}`, 15, 85);

    context.lineTo(xEndPoint, yEndPoint);
    context.stroke();
    context.moveTo(xEndPoint, yEndPoint);
    context.lineTo(xEndPoint, 300);
    context.stroke();
    drawTextAtPoint(`(${xEndPoint.toFixed(2)}, ${yEndPoint.toFixed(2)})`, xEndPoint.toFixed(2), yEndPoint.toFixed(2));
}

function getLineLength() {
    
}

