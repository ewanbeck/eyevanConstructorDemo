var eyevan;
var angle = 0;
var makeSurprised = false;
var makeSad = false;
var makeAngry = false;
var makeNeutral = false;
var makeConfused = false;
var makeHappy = false;

function setup() {
  createCanvas(800, 600);
  //create eyes from constructor functiona and pass in params
  eyevan = new Eyes(width/2, height/2);
}

function draw() {
  background(220);
  eyevan.display();
  if(mouseIsPressed == true){
  	//makeSad = true;
  }
  if(makeSad){
  	eyevan.sad();
  } else if (makeAngry){
  	eyevan.angry();
  } else if (makeNeutral){
  	eyevan.neutral();
  } else if (makeConfused){
  	eyevan.confused();
  } else if (makeHappy){
    eyevan.happy();
  } else if (makeSurprised){
    eyevan.surprised();
  }
}

function keyPressed(){
	if (keyCode === 83){ //s for sad
    makeSad = true;
  } else if(keyCode === 65){  //a for angry
  	makeAngry = true;
  } else if(keyCode === 78){  //n for neutral
  	makeNeutral = true;
  } else if(keyCode === 67){  //c for confused
  	makeConfused = true;
  } else if(keyCode === 72){  //h for happy
    makeHappy = true;
  } else if(keyCode === 87){  //w for surprised (wow!)
    makeSurprised = true;
  }
  return false;
}
