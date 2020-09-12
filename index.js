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

