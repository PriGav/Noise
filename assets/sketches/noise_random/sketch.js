function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}

function draw() {
	background(255)


	// noise 1D
	noFill()
	stroke(0)
	beginShape()
	for (let i=0; i<width; i++) {
		const n = noise(i * 0.01)
		const x = i
		const y = height/2 - 100 + (n * 200) - 100

		vertex(x, y)


	}
	endShape()

	// random
	stroke(0)
	randomSeed(0)
	beginShape()
	for (let i=0; i<width; i++) {
		const n = random(1)

		 const x = i
		 const y = height/2 + 100 + (n * 200) - 100

		vertex(x, y)


	}
	endShape()

}