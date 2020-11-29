
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var boy, boyImg;
var tree1, treeImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11, mango12;
var chain1;
var stone1;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png");
	treeImg = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;
	
	ground1 = new ground(400,500,800,10);

	boy = createSprite(180,460);
	boy.scale = 0.07;

	tree1 = createSprite(620,290);
	tree1.scale = 0.4;

	mango1 = new mango(620,270,20);
	mango2 = new mango(663,210,20);
	mango3 = new mango(590,213,20);
	mango4 = new mango(663,140,20);
	mango5 = new mango(700,230,20);
	mango6 = new mango(563,160,20);
	mango7 = new mango(600,130,20);
	mango8 = new mango(763,210,20);
	mango9 = new mango(733,260,20);
	mango10 = new mango(460,240,20);
	mango11 = new mango(523,220,20);
	mango12 = new mango(543,280,20);

	stone1 = new stone(200,200,30);

	chain1 = new rope(stone1.body,{x:143,y:425});

	Engine.run(engine);
  
}

function draw() {
  background(230);

  boy.addImage("boys", boyImg);
  tree1.addImage("tree1", treeImg);

  drawSprites();

  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  chain1.display();

  stone1.display();

  //detectCollision 
detectollision(stone1, mango1);
detectollision(stone1, mango2);
detectollision(stone1, mango3);
detectollision(stone1, mango4);
detectollision(stone1, mango5);
detectollision(stone1, mango6);
detectollision(stone1, mango7);
detectollision(stone1, mango8);
detectollision(stone1, mango9);
detectollision(stone1, mango10);
detectollision(stone1, mango11);
detectollision(stone1, mango12);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain1.fly();
}

//function detectCollision(stone, mango){
//	mangoBodyPosition = mango.body.position;
//	stoneBodyPosition = stone.body.position;
  
//	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	
//	if(distance>=mango.r+stone.r){
//		Body.setStatic(mango.body,false);
//	}
  //}

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=lmango.r+lstone.r)
    {
  	  Body.setStatic(lmango.body,false);
    }

  }

