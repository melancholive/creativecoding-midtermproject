class Branch{
	constructor(){
		this.position = createVector(width/2, height);
		this.targetPosition = createVector(random(200,1000), random(100,height-300));
		this.nextPosition = createVector(random(this.position.x, this.targetPosition.x),random(this.position.y, this.targetPosition.y));
		this.segments = [this.position];
		this.count = 0;
	}

	drawBranch(){
		stroke(255);
		strokeWeight(1);

		line(this.position.x, this.position.y, this.position.x,this.position.y);

	}

}
