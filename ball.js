class Ball extends BaseClass{
    constructor(x,y){
      var options = {isStatic:false}
      super(x,y,50,50,options);
      this.image = loadImage("paper.png");
    }
  }


//class Ball extends BaseClass{
//
//    constructor(x,y,width, height,angle){
//        super(x,y,width,height);
//        this.image=loadImage("images/paper.png")
//        Matter.Body.setAngle(this.body, angle);
//    } 
//}