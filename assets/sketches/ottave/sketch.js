let slider;
var inc = 0.01;

function setup (){
  createCanvas (windowWidth,windowHeight);
  
  slider = createSlider(1,9,4,1);
  slider.position(15,15);
  slider.size(130);

  textSize(20); 
  
  
 

}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}


function draw (){
   background (30);
   stroke(255);
   noFill();
  beginShape();

  
  
  
  var n = slider.value()
  noiseDetail(n)
 var xoff=0;
   for (var x=0; x<width; x++){
     stroke(255);
     var y =noise (xoff) * height ;
     vertex (x,y);
     xoff += inc
     
   }
   endShape();
   
   //noLoop();

   noStroke();
   fill (255);
   text('Octaves', 160, 30);
   
 }