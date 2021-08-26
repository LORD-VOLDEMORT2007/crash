const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  bo1 = new BOG(50,170,50,50)
  bo2 = new BOG(150,170,50,50)
  bo3 = new BOG(250,170,50,50)
  bo4 = new BOG(350,170,50,50)
  bo5 = new BOG(450,170,50,50)
  bo6 = new BOG(550,170,50,50)

  rock = new RO(1100,200,100,100)

  chain1 = new Chain(bo1.body,bo2.body);
  chain2 = new Chain(bo2.body,bo3.body);
  chain3 = new Chain(bo3.body,bo4.body);
  chain4 = new Chain(bo4.body,bo5.body);
  chain5 = new Chain(bo5.body,bo6.body);

  ground = new Ground(600,380,1200,20);


}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  bo1.show();
  bo2.show();
  bo3.show();
  bo4.show();
  bo5.show();
  bo6.show();
  rock.show();
  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();

var colii = Matter.SAT.collides(bo6.body,rock.body);

if (colii.collided)
{
  flag = 1
}
if (flag === 1){
  textSize(30)
  text("CRASH" , 500 , 100)
}
  }

  function keyPressed(){

    if (keyCode === RIGHT_ARROW){
      Matter.Body.applyForce(bo6.body, bo6.body.position, {x:0.5 , y:0})
    }
  }