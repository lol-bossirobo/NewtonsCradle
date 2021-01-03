
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobOb1,bobOb2,bobOb3,bobOb4,bobOb5;
var top;

function preload() {
	
}

function setup() {
	createCanvas(1000, 700);

	top = createSprite(600,300,100,50);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobOb1 = new bob(400,600,100);
	bobOb2 = new bob(500,600,100);
	bobOb3 = new bob(300,600,100);
	bobOb4 = new bob(600,600,100);
	bobOb5 = new bob(700,600,100);
	
	top = new Roof(600,100,1100,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobOb1.display();
  bobOb2.display();
  bobOb3.display();
  bobOb4.display();
  bobOb5.display();
  top.display();
  drawSprites();
 
}


