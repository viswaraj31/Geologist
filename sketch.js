
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,stone,rubber;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	
	hammer = new Hammer(100,100,100,50);
	//rubber = new Rubber(350,300,20);
	stone = new Stone(200,300,40,40);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.display();
  //rubber.display();
  stone.display();
  
  drawSprites();
 
}



