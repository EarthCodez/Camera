let cam;
var camof;
var ftr;
function setup() {
  createCanvas(640,480);
  cam=createCapture(VIDEO);
  camof=createSlider(0,50);
  ftr=createSlider(0,800);
}

function draw() {
  background(220);
  fill(random(0,255),random(0,255),random(0,255));
  cam.position(0,0);
  camof.position(0,0);
  if(camof.value()<25){
  cam.hide();
  }
  else{
    cam.show();
  }
  image(cam, 0, 0, 640, 480);
  if(ftr.value()<100&&ftr.value()>0){
    filter(INVERT);
  }
  else if(ftr.value()<200&&ftr.value()>100){
    filter(THRESHOLD);
  }
    else if(ftr.value()<300&&ftr.value()>200){
    filter(GRAY);
  }
    else if(ftr.value()<400&&ftr.value()>300){
    filter(OPAQUE);
  }
    else if(ftr.value()<500&&ftr.value()>400){
    filter(POSTERIZE);
  }
    else if(ftr.value()<600&&ftr.value()>500){
    filter(DILATE);
  }
    else if(ftr.value()<700&&ftr.value()>600){
    filter(BLUR);
  }
    else if(ftr.value()<800&&ftr.value()>700){
    filter(ERODE);
  }
          }
