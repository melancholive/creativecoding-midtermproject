class Sun{
  constructor(){
    this.position = createVector(width/2,height+300);
    this.loops = 0;
  }

  updateSunPosition(){
    if ( this.position.y > 200 ){
      this.position.y -= 5;
    }
  }

  drawSun(){
    strokeWeight(0.7);

    stroke(138, 175, 255); // medium blue
    fill(138, 175, 255, 20); // medium blue
    circle(this.position.x, this.position.y, 1600*1.2);
    circle(this.position.x, this.position.y, 1300*1.2);
    circle(this.position.x, this.position.y, 1100*1.2);

    fill(138, 175, 255, 100); // medium blue
    circle(this.position.x, this.position.y, 1005*1.2);
    circle(this.position.x, this.position.y, 915*1.2);

    stroke(140, 238, 255); // saturated green
    fill(140, 238, 255, 50); // saturated green
    circle(this.position.x, this.position.y, 830*1.2);
    circle(this.position.x, this.position.y, 750*1.2);
    circle(this.position.x, this.position.y, 675*1.2);
    circle(this.position.x, this.position.y, 605*1.2);
    circle(this.position.x, this.position.y, 540*1.2);

    stroke(230, 255, 248); // light green
    fill(230, 255, 248, 50); // light green
    circle(this.position.x, this.position.y, 480*1.2);
    circle(this.position.x, this.position.y, 425*1.2);
    circle(this.position.x, this.position.y, 375*1.2);

    stroke(248, 252, 227); // light yellow
    fill(248, 252, 227, 70); // light yellow
    circle(this.position.x, this.position.y, 375*1.2);
    circle(this.position.x, this.position.y, 330*1.2);
    circle(this.position.x, this.position.y, 290*1.2);
    circle(this.position.x, this.position.y, 255*1.2);

    stroke(255, 222, 241); //light pink
    fill(255, 222, 241, 70); // light pink
    circle(this.position.x, this.position.y, 255*1.2);
    circle(this.position.x, this.position.y, 225*1.15);
    circle(this.position.x, this.position.y, 200*1.1);
    circle(this.position.x, this.position.y, 180*1.05);

    strokeWeight(5);

    fill(255); // white
    circle(this.position.x, this.position.y, 155);
  }
}