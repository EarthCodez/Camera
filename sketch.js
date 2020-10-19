let cam;
function setup() {
  createCanvas(200,200);
  cam=createCapture(VIDEO);
}

function draw() {
  background(220);
  fill(random(0,255),random(0,255),random(0,255));
  cam.position(0,0);
          }
