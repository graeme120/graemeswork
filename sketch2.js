let brush = { x:0, y:0, px:0, py:0 }
let img;

function preload() {
  img = loadImage('images/Headshot.jpg');
}

function setup() {
  let cnv = createCanvas((windowWidth*0.20), (windowWidth*0.26));
  cnv.parent("portrait")
  colorMode(HSB, 255);
  image(img, 0, 0, (windowWidth*0.20), (windowWidth*0.26));
  let button = createButton("<span>x</span>");
  button.parent('clearButton');
  button.mousePressed(resetSketch);
}


function draw() {
 
  cursor('images/pen.png')
  	if (mouseIsPressed) {

    x = mouseX;
    y = mouseY;



      strokeWeight(7);
	    stroke((frameCount+240) % 255, 255, 255)
      line(pmouseX, pmouseY, x, y);
      
}
}

function windowResized() {
  resizeCanvas(windowWidth*0.2, (windowWidth*0.26));
  image(img, 0, 0, (windowWidth*0.20), (windowWidth*0.26));
}

function resetSketch(){
  clear();
  image(img, 0, 0, (windowWidth*0.20), (windowWidth*0.26));
}
