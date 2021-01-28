
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,stone,rubber,ground;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;
	
	hammer = new Hammer(100,100,100,50);
	rubber = new Rubber(350,395,20);
	stone = new Stone(200,300,40,40);
	ground = new Ground(200,400,400,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  hammer.display();
  rubber.display();
  stone.display();
  ground.display(); 
}



