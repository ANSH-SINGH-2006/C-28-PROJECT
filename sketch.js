const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    d=loadImage("sprites/dustbingreen.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground=new Ground(600,350,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    //ss

    bird = new Bird(200,100);
    dustbin1=new Dustbin(850,330,200,20)
    
    dustbin2= new Dustbin(750,270,20,130);
    dustbin3=new Dustbin(950,270,20,130);


    
    slingShot = new Slingshot(bird.body,{x:200,y:100});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    
   // box1.display();
   // box2.display();
    ground.display();
    
    //pig1.display();
    //log1.display();

    //box3.display();
    //box4.display();
    //pig3.display();
    //log3.display();

    //box5.display();
   // log4.display();
   // log5.display();

    bird.display();
    //platform.display();
    slingShot.display();   
    
    image(d,730,190,240,150);
}

function mouseDragged(){

    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

    slingShot.fly();
}