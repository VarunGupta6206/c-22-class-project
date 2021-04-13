const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies

var engine,world,ground;
var ball

function setup() {
  createCanvas(800,400);
  

engine=Engine.create();
world=engine.world;
var groundOPtion={
isStatic:true




}

ground=Bodies.rectangle(200,380,800,20,groundOPtion);
World.add(world,ground);


var ballOption={
  restitution:1


}

ball=Bodies.rectangle(300,40,20,20,ballOption);
World.add(world,ball);



}

function draw() {
  background(255,255,255);  
 rect(ground.position.x,ground.position.y,800,20);
 rect(ball.position.x,ball.position.y,20,20);
 
  Engine.update(engine);
}