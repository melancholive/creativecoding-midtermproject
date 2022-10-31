let drop1, drop2, drop3, drop4, drop5, drop6, drop7, drop8, drop9, drop10;
let s;

function setup() {
  // put setup code here
  createCanvas(1200,800);
  // background(214, 249, 255);
  frameRate(12);

  drop1 = new Raindrop();
  drop2 = new Raindrop();
  drop3 = new Raindrop();
  drop4 = new Raindrop();
  drop5 = new Raindrop();
  drop6 = new Raindrop();
  drop7 = new Raindrop();
  drop8 = new Raindrop();
  drop9 = new Raindrop();
  drop10 = new Raindrop();

  s = new Sun();

}

function draw() {
  // put drawing code here
  background(2, 2, 23); // dark blue

  s.drawSun(); s.updateSunPosition();

  // river
  stroke(2, 2, 23); // dark blue
  fill(2, 2, 23, 100); // dark blue
  rect(0, 600, width, height - 600);
  rect(0, 620, width, height - 620);
  rect(0, 650, width, height - 650);
  rect(0, 690, width, height - 690);
  rect(0, 740, width, height - 740);

  drop1.drawRaindrop(); drop1.updateRaindropPosition();
  drop2.drawRaindrop(); drop2.updateRaindropPosition();
  drop3.drawRaindrop(); drop3.updateRaindropPosition();
  drop4.drawRaindrop(); drop4.updateRaindropPosition();
  drop5.drawRaindrop(); drop5.updateRaindropPosition();
  drop6.drawRaindrop(); drop6.updateRaindropPosition();
  drop7.drawRaindrop(); drop7.updateRaindropPosition();
  drop8.drawRaindrop(); drop8.updateRaindropPosition();
  drop9.drawRaindrop(); drop9.updateRaindropPosition();
  drop10.drawRaindrop(); drop10.updateRaindropPosition();

  print(millis());

}

