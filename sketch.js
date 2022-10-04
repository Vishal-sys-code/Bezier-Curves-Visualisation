/*

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  
  stroke(255);
  //strokeWeight(24);
  //point(0,300);
  //point(mouseX,mouseY);
  //point(400,400);
  //point(600,300);
  
  /*
  strokeWeight(4);
  noFill();
  bezier(0,300,mouseX,mouseY,400,400,600,300);
  
  strokeWeight(2);
  line(0,300,mouseX,mouseY);
  line(400,400,600,300);
  */
  
/*
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(0,300);
  bezierVertex(mouseX,mouseY,400,400,600,300);
  bezierVertex(400,600,200,100,0,300);
  endShape();
}
*/


let p0, p1;

function setup(){
  createCanvas(600,600);
  p0 = new Particle(0, 300);
  p1 = new Particle(300, 0);
  p2 = new Particle(400, 0);
  p3 = new Particle(600, 300);
}

function draw(){
  background(0);
  stroke(255);
  strokeWeight(4);
  // line(p0.x, p0.y, p1.x, p1.y);
  
  // p1.x = mouseX;
  // p1.y = mouseY;
  // p0.update();
  p1.update();
  p2.update();
  // p3.update();
  
  let delta = 0.02;
  colorMode(HSB);
  
  noFill();
  // beginShape();
  for(let t = 0; t<=1.0001; t+=delta){
    // let x = p0.x + (p1.x - p0.x) * t;
    // let y = p0.y + (p1.y - p0.y) * t;
    stroke(t*360, 255,255, 0.1);
    let v = cubic(p0,p1,p2,p3,t);
  }
  // endShape();
}

function cubic(p0,p1,p2,p3,t){
    let v1 = quadratic(p0,p1,p2,t);
    let v2 = quadratic(p0,p2,p3,t);
    let x = lerp(v1.x,v2.x,t);
    let y = lerp(v1.y,v2.y,t);
    line(v1.x, v1.y, v2.x, v2.y);
    return createVector(x,y);
}

function quadratic(p0,p1,p2,t){
    let x1 = lerp(p0.x, p1.x, t);
    let y1 = lerp(p0.y, p1.y, t);
    let x2 = lerp(p1.x, p2.x, t);
    let y2 = lerp(p1.y, p2.y, t);
    // stroke(t*360, 255,255);
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);
    line(x1,y1,x2,y2);
    return createVector(x,y);
}