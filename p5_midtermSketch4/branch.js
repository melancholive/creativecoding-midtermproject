// Si Yue Jiang - Creative Coding F22 Midterm

class Branch{
	constructor(){
		this.position = createVector(width/2, height);
		this.targetPosition = createVector(random(200,1000), random(100,height-300));
		this.nextPosition = createVector(random(this.position.x, this.targetPosition.x),random(this.position.y, this.targetPosition.y));
		this.segments = [];
		this.segments[0] = createVector(width/2, height);
		this.count = 0;
	}

	drawBranch(){
		stroke(255);
		strokeWeight(1);


		for( let i = 0; i < this.segments.length; i++){
			line(this.position.x, this.position.y, this.targetPosition.x,this.targetPosition.y);

		}

		this.position = this.targetPosition;
		this.segments[this.segments.length] = createVector(random(this.position.x, this.targetPosition.x),random(this.position.y, this.targetPosition.y));;

	}

}
