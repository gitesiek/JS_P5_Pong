function Ball(){
 this.x=width/2;
 this.y=height/2;
 this.r=16;
 this.maxSpeed=5;
 this.maxMaxSpeed=8;
 this.xSpeed=random(-this.maxSpeed,this.maxSpeed);
 this.ySpeed=random(-this.maxSpeed,this.maxSpeed);
  
  this.reset=function(){
    this.xSpeed=random(-this.maxSpeed,this.maxSpeed);
    this.ySpeed=random(-this.maxSpeed,this.maxSpeed);
    this.x=width/2;
    this.y=height/2;     
  }
  
  this.show=function(){
    ellipse(this.x,this.y,this.r);
  }
  this.update=function(){
     this.x+=this.xSpeed;
     this.y+=this.ySpeed;
     
    // this.x=mouseX;
    // this.y=mouseY;
     
     if(this.y+this.r>=height || this.y-this.r<=0)
     this.ySpeed*=-1;
     if(this.x-this.r<0){
       player2.points+=1;
       this.reset();
     }
     if(this.x+this.r>width){
       player1.points+=1;
       this.reset();
     }
  }
  this.hit=function(paddle){
    if(this.y>paddle.y && this.y<paddle.y+paddle.h){
        if(this.x+this.r>paddle.x && this.x-this.r<paddle.x+paddle.w)
          {
            if(this.xSpeed<this.maxMaxSpeed && this.ySpeed<this.maxMaxSpeed){
              this.maxSpeed++;
              this.ySpeed-=(random(-this.maxSpeed,this.maxSpeed));
              if(this.xSpeed<0){
              this.xSpeed*=-1;
              this.xSpeed+=random(0,this.maxSpeed);}
              else{
              this.xSpeed*=-1;
              this.xSpeed+=random(-this.maxSpeed,0);}
            }
            else {
              this.maxSpeed=4;
              if(this.xSpeed<0){
              this.xSpeed*=-1;
              this.xSpeed+=random(0,this.maxSpeed);}
              else{
              this.xSpeed*=-1;
              this.xSpeed+=random(-this.maxSpeed,0);}
              this.ySpeed=random(-this.maxSpeed,this.maxSpeed);
          }  
        }
      
    }
  }
  
}