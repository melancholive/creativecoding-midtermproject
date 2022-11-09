// Si Yue Jiang - Creative Coding F22 Midterm

class Sun{
  constructor(){
    this.position = createVector(width/2,height+300);
    this.loops = 1;
    this.brightness = 0;
    this.boolean = true;
  }

  updateSunPosition(){
    if ( this.position.y > 200 ){
      this.position.y -= 5;
    }
  }

  drawSun(){
    strokeWeight(0.7);
    if (millis() > 12000 && loops < 200){
      this.loops++;
    } else if (millis() > 12000 ){
      this.loops--;
    }

    if (millis() % 50 && millis() > 15000 && this.brightness < 80 ){
      this.brightness++;
    }

    stroke(138 + this.brightness, 175 + this.brightness, 255 + this.brightness); // medium blue
    fill(138 + this.brightness, 175 + this.brightness, 255 + this.brightness, 20 + this.brightness); // medium blue
    circle(this.position.x, this.position.y, 1600*1.2+this.loops);
    circle(this.position.x, this.position.y, 1300*1.2+this.loops);
    circle(this.position.x, this.position.y, 1100*1.2+this.loops);

    fill(138 + this.brightness, 175 + this.brightness, 255 + this.brightness, 100 + this.brightness); // medium blue
    circle(this.position.x, this.position.y, 1005*1.2+this.loops);
    circle(this.position.x, this.position.y, 915*1.2+this.loops);

    stroke(140 + this.brightness, 238 + this.brightness, 255 + this.brightness); // saturated green
    fill(140, 238, 255, 50); // saturated green
    circle(this.position.x, this.position.y, 830*1.2+this.loops);
    circle(this.position.x, this.position.y, 750*1.2+this.loops);
    circle(this.position.x, this.position.y, 675*1.2+this.loops);
    circle(this.position.x, this.position.y, 605*1.2+this.loops);
    circle(this.position.x, this.position.y, 540*1.2+this.loops);

    stroke(230, 255, 248); // light green
    fill(230, 255, 248, 50); // light green
    circle(this.position.x, this.position.y, 480*1.2+this.loops);
    circle(this.position.x, this.position.y, 425*1.2+this.loops);
    circle(this.position.x, this.position.y, 375*1.2+this.loops);

    stroke(248, 252, 227); // light yellow
    fill(248, 252, 227, 70); // light yellow
    circle(this.position.x, this.position.y, 375*1.2+this.loops);
    circle(this.position.x, this.position.y, 330*1.2+this.loops);
    circle(this.position.x, this.position.y, 290*1.2+this.loops);
    circle(this.position.x, this.position.y, 255*1.2+this.loops);

    stroke(255, 222, 241); //light pink
    fill(255, 222, 241, 70); // light pink
    circle(this.position.x, this.position.y, 255*1.2+this.loops);
    circle(this.position.x, this.position.y, 225*1.15+this.loops);
    circle(this.position.x, this.position.y, 200*1.1+this.loops);
    circle(this.position.x, this.position.y, 180*1.05+this.loops);

    strokeWeight(5);

    fill(255); // white
    circle(this.position.x, this.position.y, 155);
  }
}