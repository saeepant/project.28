
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	mango2=new mango(1200,190,30);
	mango3=new mango(1150,300,20);
	mango4=new mango(1000,200,40);
	
	stoneobject= new Stone(250,450,40)
	sling1=new SlingShot(stoneobject.body,{x:250,y:410});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  groundObject.display();
  stoneobject.display();
  sling1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stoneobject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}
