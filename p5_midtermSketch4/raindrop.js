// Si Yue Jiang - Creative Coding F22 Midterm

class Raindrop{
  constructor(){
    this.raindropLoops = 0 + random(-5,2);
    this.splashLoops = 0;
    this.raindropLength = random(100,250);
    this.position = createVector(random(0,width), 0 - random(this.raindropLength,height));
    this.splashPosition = createVector(this.position.x, random(600,height));
    this.acceleration = createVector(0, 1);
  }

  updateRaindropPosition(){
    this.position.y += this.acceleration.y;
    this.acceleration.y = this.acceleration.y + 3;

    if ( this.position.y > this.splashPosition.y && this.raindropLoops < 8){
      this.splashPosition.x = this.position.x;
      this.splashPosition.y = random(600,height);
      this.raindropLength = random(300,500);
      this.raindropLoops++;
    }
  }

  raindropSplashed(){
    return this.position.y > this.splashPosition.y && this.raindropLoops < 8;
  }

  drawRaindrop(){
    noStroke();
    fill(138, 175, 255, 100); // transparent medium blue
    rect(this.position.x, this.position.y, 2, this.raindropLength);

    if ( height - this.raindropLength == this.position.y){
      drawRaindropSplash();
    }
  }

  drawRaindropSplash(){
    stroke(255);
    strokeWeight(0.7);
    ellipse(this.splashPosition.x, this.splashPosition.y, 100, 15);
  }
}
