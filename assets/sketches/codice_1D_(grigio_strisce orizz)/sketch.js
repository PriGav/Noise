var inc = 0.01;

function setup (){
  createCanvas (windowWidth, windowHeight);
  pixelDensity(1);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}

function draw (){
   var xoff=0;
   loadPixels();
   
   for (var y=0; y<height; y++){
     for (var x=0; x<width; x++){
       
       var index=(x+y* width)*4;
       var r=noise(xoff)*255;
       pixels[index+0]=r;
       pixels[index+1]=r;
       pixels[index+2]=r;
       pixels[index+3]=255;
       
       xoff += 0.01;
   }
   }
  
   updatePixels();
   noLoop();
 }
