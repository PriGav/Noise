var inc = 0.01;
var  start=0;
function setup (){
  createCanvas (640,680);
}
 function draw (){
   background (51);
   stroke(255);
   noFill();
  beginShape();
  var xoff=start;
   for (var x=0; x<width; x++){
     stroke(255);
     //strokeWeight (5);
     var y =noise (xoff) * height ;
     vertex (x,y);
     
     xoff += inc;
     
   }
   endShape();
   start += inc;
   
   //noLoop();
   
 }
