function Paddle(x,y,left){
  this.x=x;
  this.y=y;
  this.isLeft=left;
  this.w=30;
  this.h=100;
  this.speed=7;
  this.points=0;
  
  this.show=function(){
   rect(this.x,this.y,this.w,this.h);   
   textSize(32);
   fill(255);
   text(this.points,this.x,30);
  }
  this.move=function(dir){
   this.y+=this.speed*dir; 
  }
  
  
}