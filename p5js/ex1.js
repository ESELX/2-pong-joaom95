//Variáveis tipo let nomeDaVar;
let posX, posY;
let velX, velY;
let padWidth, padHeight;
let diamBall;
let points;
let vel;

function setup() {
  var cnv = createCanvas(200, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  posX = random(width);
  posY = 30;
  vel = 5;
  velX = vel;
  velY = vel;
  padWidth = 60;
  padHeight = 5;
  diamBall = 13;
  points=0;
}


function draw() {
  background(153, 0, 51);
  text(points,20,20);
  posX = posX + velX;
  posY = posY + velY;
  ellipse(posX,posY,diamBall);
  rectMode(CENTER);
  rect(mouseX,height-10,padWidth,padHeight);

  //calcula
  if (posX-diamBall/2 <= 0 || posX+diamBall/2 >= width) {
    velX = velX*-1;
  }
  if (posY-diamBall/2 <= 0) {
    velY = velY*-1;
  }

  if (posY+diamBall/2 >= height){
    print("perdeste");
    velX = 0;
    velY = 0;
    points = "perdeste";
  }

  if (velX != 0 && posX >= mouseX-padWidth/2 && posX <= mouseX+padWidth/2 && posY+diamBall/2 >= height-10-padHeight/2){
    velY = -random(vel-3,vel);
    velX =random(-vel,vel);
    points++;
  }
}
