class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 1100;
      this.height = 100;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
  }
}