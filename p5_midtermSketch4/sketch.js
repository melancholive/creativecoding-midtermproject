// Si Yue Jiang - Creative Coding F22 Midterm

let drops = [];
let s;
let count = 0;
let loops = 0;
let branches = [];

let transparancy = 0;

function setup() {
  // put setup code here
  createCanvas(1200,800);
  // background(214, 249, 255);
  frameRate(12);

  s = new Sun();

}

function draw() {
  if (count == 80 ){
    if (loops < 4){
      count = 0;
      loops++;
    }
  } else {
    count += 0.5;
  }

  // put drawing code here
  background(2, 2, 23); // dark blue

  // gradually makes the sky brighter --> turning into day time
  fill(138, 175, 255, transparancy);
  if ( millis() % 50 && transparancy < 200 ){
    transparancy++;
  }
  rect(0 , 0, width, height);

  s.drawSun(); s.updateSunPosition();

  // river
  if (loops == 0){
    noStroke();
    fill(2, 2, 23, 80-count); // dark blue
    drawRectangle();
    strokeWeight(1);
    stroke(191, 234, 255); // light blue
    fill(191, 234, 255, 0+count); // light blue
    drawRectangle();
  } else {
    noStroke();
    fill(191, 234, 255, 80-count); // light blue
    drawRectangle();
    strokeWeight(1);
    stroke(255); // white
    fill(255, 0+count); // white
    drawRectangle();
  }

  // automated creating raindrop objects
  // no more raindrops made after a certain point
  // added variation so the transition is more gradual
  if ( millis() < 10000 + random(-3000, 1000) ){
    drops.push(new Raindrop());
  }

  for ( let i = drops.length - 1; i >= 0; i-- ){
    let d = drops[i];
    d.drawRaindrop();
    d.updateRaindropPosition();
  }

  /*
  branches.push(new Branch());

  for ( let i = branches.length - 1; i >= 0; i--){
    let b = branches[i];
    b.drawBranch();
  }
  */
  
  // print(millis());

}

function drawRectangle(){
  rect(0, 600, width, height - 600);
  rect(0, 620, width, height - 620);
  rect(0, 650, width, height - 650);
  rect(0, 690, width, height - 690);
  rect(0, 740, width, height - 740);

}
