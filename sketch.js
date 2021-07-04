let cam;
let app;
var camof;
var tintn;
var ftr;
var svbtn;
var colorpic;
var hs1,hs2,hs3;
var cosh=true;
function setup() {
  createCanvas(640,480);
  cam=createCapture(VIDEO);
  camof=0;
  colorpic=createButton("color of tint");
  tintn=createSlider(0,255);
  ftr=createSlider(0,800);
  svbtn=createButton("save");
  hs1=createSlider(0,255)
  hs2=createSlider(0,255)
  hs3=createSlider(0,255)
  hs1.position(10,510);
  hs2.position(150,510);
  hs3.position(290,510);
  hs1.hide();
    hs2.hide();
      hs3.hide();
  // app=createInput("255,255,255");
}

function draw() {
  background(220);
  cam.position(0,0);
  if(camof<25){
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
    // console.log(colorpic.color());
  fill(hs1.value(),hs2.value(),hs3.value(),tintn.value());
  
  rect(0,0,width,height)
  svbtn.mousePressed(save);
  colorpic.mousePressed(tintopt);
  if(frameCount%2000==0){
    hs1.hide();
    hs2.hide();
    hs3.hide();
      cosh=true;
    }
          }

          function tintopt(){

            if(cosh==true){
            hs1.show();
            hs2.show();
            hs3.show();
            }
          }
