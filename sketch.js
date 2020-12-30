var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bottom, leftSide, rightSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	// packageSprite=createSprite(width/2, 80, 10,10);
	// packageSprite.addImage(packageIMG)
	// packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 40 , 40,{isStatic:true});
	World.add(world, packageBody);

	//create three bodies
	var op = {
		isStatic: true
	}
   
	bottom = Bodies.rectangle(400,650,200,20,op); 
	World.add(world, bottom);	

	leftSide = Bodies.rectangle(300,610,20,100,op);
	World.add(world, leftSide);

	rightSide = Bodies.rectangle(500,610,10,100,op);
	World.add(world, rightSide);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
//   packageSprite.x= packageBody.position.x 
//   packageSprite.y= packageBody.position.y 

  fill("red");
  rect(bottom.position.x,bottom.position.y,200,20);
  rect(leftSide.position.x, leftSide.position.y,20,100);
  rect(rightSide.position.x, rightSide.position.y,20,100);
  
  //ellipseMode(RADIUS);
  //ellipse(packageBody.position.x,packageBody.position.y,25);
  
  //rendering image
  imageMode(CENTER);
  image(packageIMG,packageBody.position.x,packageBody.position.y,40,40);
 
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === DOWN_ARROW)
   {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody, false);
    
   }

   
}



