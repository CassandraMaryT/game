class Box{
    constructor(x,y,w,h){
        var boxOptions={
            friction: 0.5,
            density: 0.1,
            restitution: 0.5
        }

        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,this.w, this.h, boxOptions);
        this.image = loadImage("box.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop()
    }

}