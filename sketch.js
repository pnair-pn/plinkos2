const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var score = 0;

var particle;

var count = 0;

var gameState = "play";

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 795, 480, 20);
  
  for (var k = 0; k <= width; k = k + 80)
  {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
  }
  for (var p = 40; p <= width; p = p + 50)
  {
    plinkos.push(new Plinko(p,75));
  }
  for (var l = 15; l <= width - 10; l = l + 50)
  {
    plinkos.push(new Plinko(l,175));
  }
  for (var p = 40; p <= width; p = p + 50)
  {
    plinkos.push(new Plinko(p,275));
  }
  for (var l = 15; l <= width - 10; l = l + 50)
  {
    plinkos.push(new Plinko(l,375));
  }
}
  
function draw() {
  background(0); 
  text("SCORE = " + score, 30, 30);
  Engine.update(engine);

  fill("white");
  text("500",430, 500);
  text("200",350, 500);
  text("100",270, 500);
  text("100",190, 500);
  text("200",110, 500);
  text("500",30, 500);
  
  ground.display(); 

  //push();
  
  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }
  if (frameCount % 60 === 0)
  {
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }
  for (var j = 0; j < particles.length; j++)
  {
    particles[j].display();
  }
  for (var p = 0; p < plinkos.length; p++)
  {
    plinkos[p].display();
  }
    for (var l = 0; l < plinkos.length; l++)
  {
    plinkos[l].display();
  }

  if(particle != null){
    particle.display();

    if (particle.body.position.y>760){
      if (particle.body.position.x <300){
        score = score + 500;
        particle = null;
      }
      else if(particle.body.position.x < 600 && particle.body.position.x > 301){
        score = score + 100;
        particle = null;
      }
      else if(particle.body.position.x<800 && particle.body.position.x>401){
        score = score + 200;
        particle = null;
      }

      }
    }
  }
  
  


  function mousePressed(){
    if (gameState !== "end"){
      particle = new Particle(mouseX, 10, 10, 10);
    }
  }