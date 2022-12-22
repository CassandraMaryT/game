class Ball{
    constructor(x,y,r){
        var ballOption={
            friction: 1.0,
            density: 0.5,
            restitution: 0.75
        }

        this.r = r
        this.body = Bodies.circle(x,y,r,ballOptions);
        this.image = loadImage("ball.jpg");
        world.add(world, this.body)
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y)
        imageMode(CENTER);
        image(this.image, 0,0, this.r, this.r);
        pop();
    }

}