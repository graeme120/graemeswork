
var video;
var vScale = 16;

var cols = 200; 
var rows = 65;

let hDim;
let vDim;

let colourA;
let colourB;

let k = 0;


function setup() {
  let cnv = createCanvas(windowWidth,(windowHeight*0.84));
  cnv.parent('mirror');
  cnv.id('mirror');
  pixelDensity(1.5);
  frameRate(24);
  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();

  vDim = 16;
  hDim = textWidth('M');

  colourA = color(59, 250, 156);
  colourB = color(0, 0, 255);
}

function draw() {
  background(255, 252, 246);

  video.loadPixels();
  loadPixels();
  
  for (var j = 0; j < video.height; j++ ){
    for (var i = 0; i < video.width; i++){
      var index = (video.width - i + 1 + (j * video.width))*4;
      
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      
      var bright = (r+g+b)/3;
      // var w = map(bright, 0, 255, 0, vScale);


      let x = i * hDim;
      let y = j * vDim;
      
      var threshold = 85;
      
      // if (bright > 110){
      //   fill(59, 250, 156);
      //   text('M', x, y);
      // } else if(bright > threshold){
      //   fill(23, 6, 12);
      //   text('A', x, y);
      //   console.log("AAAA");
      // } else {
      //   fill(0, 0, 255);
      //   text('G', x, y);
      // }

      smooth();
  
      if (bright > 170){
        fill(colourA);
        text('A', x, y);
      } else if (bright > 155){
        fill(colourA);
        text('E', x, y);
      } else if (bright > 140){
        fill(colourA);
        text('R', x, y);
      } else if (bright > 120){
        fill(colourA);
        text('G', x, y);
      } else if (bright > 105){
        fill(colourA);
        text('M', x, y);  
        //Colour Divide between Colour A (above) & Colour B (below)
       } else if (bright > 85){
        fill(colourB);
        text('U', x, y);  
      } else if (bright > 75){
        fill(colourB);
        text('O', x, y);  
      } else if (bright > 65){
        fill(colourB);
        text('Y', x, y);  
      } else if (bright > 50){
        fill(colourB);
        text('E', x, y); 
      } else if (bright > 35){
        fill(colourB);
        text('S', x, y); 
      } else if (bright > 25){
        fill(colourB);
        text('N', x, y); 
      } else {
        fill(colourB);
        text('M', x, y);
      }

      noStroke();
      // rect(x*vScale, y*vScale, vScale, vScale);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight*0.84));
}

function mousePressed() {
  k=k+1;
  if(k === 0){
    colourA = color(59, 250, 156);
    colourB = color(0, 0, 255);
  } else if (k === 1){
    colourA = color(255, 125, 207);
    colourB = color(36, 54, 35);
  } else if (k === 2){
    colourA = color(205, 205, 255);
    colourB = color(102, 0, 0);
  } else if (k === 3){
    colourA = color(255);
    colourB = color(0);
    k=k-4;
  }
}

