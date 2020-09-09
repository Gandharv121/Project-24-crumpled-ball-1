
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;
var p1,p2,p3;

function preload()
{

	


}


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground=createSprite(800,670,1600,10);

	p1=createSprite(830,620,20,80)
	p1.shapeColor=color("red");

	p2=createSprite(945,670,250,20);
	p2.shapeColor=color("red");

	p3=createSprite(1060,620,20,80)
	p3.shapeColor=color("red");

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
  
	ball = new paper (200,40,30,20)

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();

  drawSprites();
 


}


function keyPressed (){
if (keyCode === UP_ARROW){


Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-110})

}



}
