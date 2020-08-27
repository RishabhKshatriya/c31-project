
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (300,500,800,10);
  division = new Division (400,400,10,200);
  
  particle = new Particle(380,100,10);
}
  var particles = [];
  var plinko = [];
  var divisions = [];


  var divisionsHeight = 300;


function draw() {
  background("black");
  Engine.update(engine);
  
ground.display();
division.display();
particle.display();


}