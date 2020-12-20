
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(200,450,40);
	bobObject2=new Bob(220,450,40);
	bobObject3=new Bob(240,450,40);
	bobObject4=new Bob(260,450,40);
	bobObject5=new Bob(280,650,40);
	roofObject=new Roof(width/2,670,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



