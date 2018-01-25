var player1,player2;
var ball;
function setup() {
  createCanvas(900,600);
  player1=new Paddle(20,height/2-50,true);
  player2=new Paddle(width-50,height/2-50,false);
  ball=new Ball();
}

function draw() {
  background(51);
  
  fill(220,10,50);
    player1.show();
  
  fill(43,11,200);
    player2.show(); 
  
  fill(255);
    ball.show();
    ball.update();
    ball.hit(player1);
    ball.hit(player2); 
  
  if(keyIsDown(87))
    player1.move(-1);
  if(keyIsDown(83))
    player1.move(1);
  if(keyIsDown(38))
    player2.move(-1);
  if(keyIsDown(40))
    player2.move(1);
}