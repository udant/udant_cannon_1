const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ball;
var rand;
var ground,platform;
var base1,base2,base3;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,
enemy7,enemy8,enemy9,enemy10,enemy11,enemy12;
function setup(){
    canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    base1 = new Ground(600,220,100,20);
    base2 = new Ground(800,350,100,20);
    base3 = new Ground(1100,150,100,20);
    enemy1 = new Enemy(570,50); 
    enemy2 = new Enemy(620,50);
    enemy3 = new Enemy(770,320);
    enemy4 = new Enemy(820,320); 
    enemy5 = new Enemy(1070,120);
    enemy6 = new Enemy(1120,120);
    enemy7 = new Enemy(570,100); 
    enemy8 = new Enemy(620,100);
    enemy9 = new Enemy(770,270);
    enemy10 = new Enemy(820,270); 
    enemy11 = new Enemy(1070,70);
    enemy12 = new Enemy(1120,70);
   // ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    ball = new Ball(200,200);
    slingshot = new SlingShot(ball.body,{x:200,y:210});
    
    //log6 = new Log (230,180,80,PI/2);
   // chain = new Chain(bird.body,log6.body);
    
}

function draw(){

    background(204,211,221);
    
    Engine.update(engine);
   // ball.x = mouseX;
    
   // ball.y = mouseY;
    //log6.display();
    //chain.display();
    /*if(mouseReleased() === true) {  
    
    ball = new Ball(200,200);
    slingshot = new SlingShot(ball.body,{x:200,y:210});

    }*/
    slingshot.display();
    platform.display();
   // ground.display();
    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();
    enemy5.display();
    enemy6.display();
    enemy7.display();
    enemy8.display();
    enemy9.display();
    enemy10.display();
    enemy11.display();
    enemy12.display();
    base1.display();
    base2.display();
    base3.display();
    ball.display();

    
}
/*function mouseDragged(){
    Matter.body.setPosition(ball.body,{x:mouseX,y:mouseY});
    }

function mouseReleased(){
    SlingShot.fly();
}*/
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}