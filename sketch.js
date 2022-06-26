
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rotator_option_1, rotator_option_2, rotator_option_3;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
block1 = createSprite (150,500,200,50);
block2 = createSprite (650,500,200,50);
plane = createSprite (400,700,1000,25);

var rotator_option_1 ={
	isStatic : true,
}
var rotator_option_2={
	isStatic : true,
}
var rotator_option_3={
	isStatic : true,
}

var block1 ={
	isStatic : true,
} 
var block2 ={
	isStatic : true,
}
var plane ={
	isStatic : true,
}

rotator1 = Bodies.rectangle (400,300, 150,20, rotator_option_1);
World.add(world,rotator1);

rotator2 = Bodies.rectangle (400,300, 150,20, rotator_option_2);
World.add(world,rotator2);

rotator3 = Bodies.rectangle (400,300, 150,20, rotator_option_3);
World.add(world,rotator3);

var particle_options_1 = {
  restitution : 0.9,
  friction : 0.05
}
var particle_options_2 = {
  restitution : 0.9,
  friction : 0.05
}
var particle_options_3 = {
  restitution : 0.9,
  friction : 0.05
}
var particle_options_4 = {
  restitution : 0.9,
  friction : 0.05
}
var particle_options_5 = {
  restitution : 0.9,
  friction : 0.05
}

particle1 = Bodies.circle(400,10,10,particle_options_1);
World.add(world,particle1);
particle2 = Bodies.circle(400,10,10,particle_options_2);
World.add(world,particle2);
particle3 = Bodies.circle(400,10,10,particle_options_3);
World.add(world,particle3);
particle4 = Bodies.circle(400,10,10,particle_options_4);
World.add(world,particle4);
particle5 = Bodies.circle(400,10,10,particle_options_5);
World.add(world,particle5);

	Engine.run(engine);
	angle1 = 10;
	angle2 = 25
	angle3 = 45
  
} 


function draw() {
  rectMode(CENTER);
  background(0,240,125);
  Engine.update(engine);


  Matter.Body.rotate(rotator1);
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
 pop();

 push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
pop();

push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
pop();

angle1 = angle1+10
angle2 = angle2+15
angle3 = angle3+20

ellipse(particle1.position.x,particle1.position.y,20);

ellipse(particle2.position.x,particle2.position.y,20);

ellipse(particle3.position.x,particle3.position.y,20);

ellipse(particle4.position.x,particle4.position.y,20);

ellipse(particle5.position.x,particle5.position.y,20);
  drawSprites();
 
}



