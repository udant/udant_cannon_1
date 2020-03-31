class Enemy extends BaseClass{
    constructor(x, y) {
        super(x,y,50,50);
        this.image = loadImage("enemy.jpg");
       // World.add(world, this.body);    
      }
    
}