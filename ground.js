class Ground{
    constructor(x,y,w,h){
        var groundOptions={
            isStatic: true
        }

        this.w = w;
        this.h = h;

        this.body = Bodies.rectangle(x,y, this.w, this.h, groundOptions);
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        push();
        fill(0);
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    }

}