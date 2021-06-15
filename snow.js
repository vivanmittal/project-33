class Snow{
    constructor(x,y){
var options={
    isStatic:false
}
this.r = 10;
this.body = Bodies.circle(x, y, this.r, options);
this.snowImage=loadImage("snow4.webp")
World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
       image(this.snowImage,0,0)
     pop();
    }
    
   
}