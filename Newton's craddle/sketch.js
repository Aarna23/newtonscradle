
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope3,rope4,rope5

function preload(){
}
	


function setup() {
	createCanvas(800, 800);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
    roof1 = new roof(400,250,50,10);

    bob1 = new bob(350,400);
    bob2 = new bob(300,400);
    bob3 = new bob(250,400);
    bob4 = new bob(200,400);
	bob5 = new bob(150,400);
	
    rope1 = new rope(bob1.body,roofObject.body,-bobDiameter*2,0)
    rope2 = new rope(bob2.body,roofObject.body,-bobDiameter*2,0)
    rope3 = new rope(bob3.body,roofObject.body,-bobDiameter*2,0)
    rope4 = new rope(bob4.body,roofObject.body,-bobDiameter*2,0)
    rope5 = new rope(bob5.body,roofObject.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  
  

 
  drawSprites();
 
}



