let width;
let height;

function windowResized() {
    width = windowWidth;
    height = windowHeight;
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    width = windowWidth;
    height = windowHeight;
    createCanvas(width, height);
    frameRate(50);
    strokeWeight(10);
}


let rotation = 0;
function draw() {
    clear();
    background("#F9F5E3")
    let unit = min([height, width]);
    translate(width / 2, height / 2);
    let radius = unit / 2 - unit/50;
    const SIDES = 6;

    beginShape();
    let weight = unit / 60;
    x = 0;
    y = 0;
    let angle = 0.15;
    let dispersion = 7;
    rotation += 0.1;
    rotation %= 360;
    strokeWeight(weight);
    stroke("#830A48");
    noFill();
    for(let i = 0; i < radius * (dispersion / (angle * 5) ); i++) {
        let nextAngle = (angle / 10) * i;
        let x = (dispersion * nextAngle) * Math.sin(nextAngle + rotation);
        let y = (dispersion * nextAngle) * Math.cos(nextAngle + rotation);
        vertex(x, y);
    }
    endShape();

    beginShape();
        vertex(width / 2 + weight, -height / 2 - weight);
        vertex(width / 2 + weight, height / 2 + weight);
        vertex(-width / 2 - weight, height / 2 + weight);
        vertex(-width / 2 - weight, -height / 2 - weight);
        beginContour();
            weight = unit/40;
            strokeWeight(weight);
            stroke("#000F08");
            fill("#F9F5E3")
            for(let i = SIDES; i > 0; i--) {
                const x = radius * Math.cos((TWO_PI / SIDES) * i);
                const y = radius * Math.sin((TWO_PI / SIDES) * i);
                vertex(x, y);
            }
        endContour();
    endShape();
    /*
    let x = radius * cos(TWO_PI / SIDES);
    let y = radius * sin(TWO_PI / SIDES);
    for(let i = 0; i <= SIDES; i++) {
        let nextX = radius * cos((TWO_PI / SIDES) * i);
        let nextY = radius * sin((TWO_PI / SIDES) * i);
        line(x, y, nextX, nextY);
        x = nextX;
        y = nextY;
    }*/
}
