class Chain{
    constructor(bodyA,bodyB){
        var opt={
            bodyA:bird.body,
            bodyB:clog.body,
            stiffness:0.04,
            length:10
        }
    this.chain=Constraints.create(opt);
    World.add(world,this.chain);
    }
    display(){
        strokeWeight(3);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}
