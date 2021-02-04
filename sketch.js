//Namespace ==>Nickname
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var ground,myEngine,myWorld;
var box1,box2;
function setup() {
  createCanvas(800,400);

  myEngine = Engine.create(); // Create an engine object and store it inside myEngine
  //Engine obj has a property called world 
  myWorld = myEngine.world;


  
  box1= new Box(200,200,50,50);
  box2 = new Box(230,50,50,100);
  ground= new Ground(400,350,800,50)
  //box3 = new Box(300,100,10,10);
  //box4  =new Box(300,50,20,69);
  //ball = Bodies.circle(100,100,100,opt1)
  //console.log(ground);

 // World.add(myWorld,ball);
 // World.add(myWorld,ground); //World.add(whichworld,whatobjshould be added)
 
}

function draw() {
  background(180); 
  
  Engine.update(myEngine); //Engine.update(whichEngineshould beupdated)

  
  //circle(ball.position.x,ball.position.y,200)
  box1.display();
  box2.display();
  ground.display();
  //box3.display();
  //box4.display();


}