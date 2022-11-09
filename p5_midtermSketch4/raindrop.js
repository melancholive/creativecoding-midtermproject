// Si Yue Jiang - Creative Coding F22 Midterm

class Raindrop{
  constructor(){
    this.time = 1+random(-20, 20);
    this.raindropLength = random(100,250);
    this.position = createVector(random(0,width), 0 - random(this.raindropLength,height));
    this.splashPosition = createVector(this.position.x, random(600,height));
    this.acceleration = createVector(1, 1);
    this.splashed = false;
  }

  updateRaindropPosition(){
    this.position.y += this.acceleration.y;
    this.acceleration.y = this.acceleration.y + 3;


    if ( this.position.y > this.splashPosition.y && this.time < 50){
        this.drawRaindropSplash(1,1);
        this.drawRaindropSplash(2, 1.2);
        this.drawRaindropSplash(3, 1.3);
    }
  }

  drawRaindrop(){
    noStroke();
    fill(191, 234, 255, 100); // transparent light blue
    rect(this.position.x, this.position.y, 2, this.raindropLength);

  }

  drawRaindropSplash(x,y){
    this.time++;
    stroke(191, 234, 255); // light blue
    strokeWeight(0.7-this.acceleration.x);
    fill(191, 234, 255, 10); // light blue
    push();
    this.acceleration.x += 0.1;
    ellipse(this.splashPosition.x, this.splashPosition.y, 5*this.acceleration.x*x, 0.7*this.acceleration.x*y);
    noStroke();
    fill(153, 180, 255, 10); // medium blue --> for shadow
    ellipse(this.splashPosition.x, this.splashPosition.y+5, 5*this.acceleration.x*x, 0.7*this.acceleration.x*y);
    pop();
  }
}
