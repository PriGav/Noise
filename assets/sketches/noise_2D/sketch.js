let slider, slider2, slider3;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)

	angleMode(DEGREES)

	slider = createSlider(2,7,4,1);
	slider.position(20,20);
	slider.size(160);

	slider2 = createSlider(-20, 180, -20)
	slider2.position(20,40)
	slider2.size(160)

	slider3 = createSlider(-20, 180, -20)
	slider3.position(20,60)
	slider3.size(160)



	

}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
	
}


function draw() {
	let s = slider.value();
	let ax = slider2.value();
	let ay = slider3.value();
	noiseDetail(s)

	rotateX(ax)
	rotateY(ay)

	background(30)
	noFill()
	stroke(255)

	const steps = 60;
	const dist = 10;

	const livello_del_mare = 0.6

	
	

	for (let j=0; j<steps; j++) {
		beginShape()
		for (let i=0; i<steps; i++) {
			let n = noise(i * 0.05, j * 0.05 +  0.01)
			if (n > livello_del_mare) {
				n = livello_del_mare
				stroke(0, 200, 255)
			}  else {
				let r = map (n, 0, 1,220, 70)
				let g = map (n, 0, 1, 80, 200)
				let b = map (n, 0, 1, 25, 75)
			 stroke (r, g, b)

			
			}

			const x = (steps/2 - i) * dist
			const y = (n * 200) - 100
			const z = (j - steps/2) * dist



			vertex(x, y, z)
		}
		endShape()
	}

}