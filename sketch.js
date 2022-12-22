const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine;
var world;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var ball;
var blower;
var obstacle1, obstacle2, obstcle3;


function setup() 
{

  createCanvas(windowWidth-50,windowHeight-50);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height = 20, width, 40);
  box1 = new Box(width/2, height*0.8, 100, 100);
  box2 = new Box(width/2 + 100, height*0.8, 100, 100);
  box3 = new Box(width/2 + 200, height*0.8, 100, 100);
  box4 = new Box(width/2 + 50, height*0.6, 100, 100);
  box5 = new Box(width/2 + 150, height*0.6, 100, 100);
  box6 = new Box(width/2 + 100, height*0.5, 100, 100);
  box7 = new Box(width/2 + 300, height*0.8, 100, 100);
  box8 = new Box(width/2 + 250, height*0.6, 100, 100);
  box9 = new Box(width/2 + 200, height*0.5, 100, 100);
  box10 = new Box(width/2 + 150, height*0.4, 100, 100);
  

  blower = createImg("blower.gif");
  blower.position(width*0.05, height-300);
  blower.size(150, 300);
  blower.mouseClicked(blow);

  obstacle1 = new Ground(500, 500, 20, 275)
  obstacle2 = new Ground(250, 125, 20, 275)
  obstacle3 = new Ground(750, 125, 20, 275)
}

function draw() {
  background("yellow");

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  obstacle1.display();
  obstacle2.display();
  obstacle3.display();
 
 Engine.update(engine); 
}

function blow(){
  Matter.Body.applyForce(ball.body,{
    x: 0,
    y: 0
  },{
    x: 200,
    y: 1
  });
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.ApplyForce(ball.body, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 750
    });
  }
}