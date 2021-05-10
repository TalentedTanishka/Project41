class Drop{
    constructor(x, y)
    {
        var options = { 
            'isStatic' : false,
              'restitution':0.1,
              'friction':0.02,
           
          }

          this.body = Bodies.circle(x,y,10,options);
          
          World.add(world, this.body);
    }

    display()
    {
        var pos =this.body.position
        push();
        fill("blue")
       ellipse(pos.x,pos.y,10)

       if(this.body.position.y>height)
       {
           Matter.Body.setPosition(this.body,{x:random(0,5000),y:random(0,100)})
       }
      
        pop();
    }

   
}