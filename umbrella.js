class Umberella{
    constructor(x, y)
    {
        var options = { 
            'isStatic' : true,
              
          }

          this.body = Bodies.circle(x,y, 50,options);
          this.radius = 50;
          this.IMG = loadImage("sprites/walking_1.png")
          World.add(world, this.body);
    }

    display()
    {
        var pos =this.body.position
        push();
        fill("white")
        imageMode(CENTER);
        image(this.IMG,pos.x , pos.y + 50 , 300,300);
       // ellipse(pos.x,pos.y,this.radius,this.radius)
        pop();
    }

   
}