class Rope{
    constructor(body1,body2,offsetX,offsetY){
         this.offset.X=offset.X
         this.offset.Y=offset.Y
         var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.Rope=Constraint.create(options);
        World.add(world,this.chain);
    }
}


    this.rope=Constraint.create(options)
    display(){{var pointA=this.Rope.bodyA.position;
        var pointB=this.Rope.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y)}
        var pointA=this.Rope.bodyA.position;
        var pointB=this.Rope.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    } 
