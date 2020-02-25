const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, ground, log1;

function setup(){
var canvas = createCanvas(1276,575);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(484.9,470,70,140);
    box2 = new Box(714.6,470,70,140);
    box3 = new Box(604.3, 380, 70, 70);
    box4 = new Box(600, 490, 156, 35);
    box5 = new Box(600, 420, 104, 35);
    box6 = new Box(600, 385, 69.3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333, 35);
    box7 = new Box(600, 382, 46.2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222, 35);
    box8 = new Box(784.6,455,70,230);
    box9 = new Box(414.6,455,70,230);
    log1 = new Log(599.6, 381, 300, PI/2);
    ground = new Ground(638,565,1276,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    ground.display();
    log1.display();
    push();
    strokeWeight(2);
    stroke("green");
    fill("white");
    triangle(414.25, 262.3782217, 379.25, 323, 449.25, 323);
    triangle(604.25, 262.3782217, 569.25, 323, 639.25, 323);
    triangle(785.25, 262.3782217, 750.25, 323, 820.25, 323);
    pop();
}