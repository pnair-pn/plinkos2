class Plinko {
    constructor (x,y){
  
        var options ={
            restitution : 1.0,
            isStatic : true
        }
        this.r=10;

        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        ellipseMode(RADIUS)
        strokeWeight(3);
        fill("white");
        ellipse(0,0,10,10);
        pop();
    }
}