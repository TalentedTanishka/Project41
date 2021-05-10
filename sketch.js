const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var raindrops=[];

var umberella_img , umberella;

var bg_image , bg;

var lighting1_img, lighting2_img, lighting_img, lighting4_img;

var lighting

var maxDrops = 100;

var thundercreatedframe;

var thunder

function preload(){
    bg_image = loadImage("sprites/bg.jpg");
    lighting1_img = loadImage("sprites/1.png");
    lighting2_img = loadImage("sprites/2.png");
    lighting3_img = loadImage("sprites/3.png");
    lighting4_img = loadImage("sprites/4.png");
    thunder = loadSound("thunder.mp3")
 
}

function setup(){
   createCanvas(windowWidth,windowHeight);

   engine = Engine.create();
    world = engine.world;

   
    umberella = new Umberella(850,550)
   
}

function draw(){

    Engine.update(engine);


    background(bg_image);

    drawSprites();
    
    umberella.display();
    


   

drops();
light()  
  
 

}   

function light()
{
    if (frameCount % 60 === 0) {
        thundercreatedframe = frameCount;
        lighting = createSprite(random(100,900),100,20,20);
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: lighting.addImage("lighting1",lighting1_img);
            break;
            case 2: lighting.addImage("lighting1", lighting2_img);
            break;
            case 3: lighting.addImage("lighting1", lighting3_img);
            break;
            case 4: lighting.addImage("lighting1", lighting4_img);
            break;
           
        }
       
        thunder.play();
    }
    if(frameCount === thundercreatedframe + 10 && thundercreatedframe)
    {
        lighting.destroy()
        
    }
  
}

function drops()
{
    for(var i =0 ; i<maxDrops; i++)
    {
       
     raindrops.push(new Drop(random(100,5000),random(100,5000)));
     raindrops[i].display();
     
    }
  
}