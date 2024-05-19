let inc=0.02;

function setup (){
	createCanvas (windowWidth,windowHeight);
  }
   function draw (){
	 background (51);
	 stroke(255);
	 noFill();
	beginShape();
	var xoff=0;
	 for (var x=0; x<width; x++){
	   stroke(255);
	   //strokeWeight (5);
	   var y =noise (xoff) * height ;
	   vertex (x,y);
	   
	   xoff += inc;
	   
	   
	 }
	 endShape();
	 ellipse(60, noise((xoff+inc)*59)*height, 10)
	 
	 noLoop();
	 
   }
  