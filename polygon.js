class po{
    constructor(x, y, width, height) {
        var options = {
          'restitution':1,
          'friction':1.0,
          'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage("polygon.png")
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.mouseX, pos.mouseY);
        rotate(angle);
    image(this.image,0,0,this.width,this.height)
        pop();
      }
}
