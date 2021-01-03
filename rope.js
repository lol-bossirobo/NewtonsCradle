class rope {

    constructor(bodyA, pointB) {

        var options = {

            bodyA: bodyA,
            bodyB: pointB,
            stiffness:0.2,
            length:100
        }
        this.pointB = pointB


        this.chain= Con.create(options);
    
        World.add (world, this.chain);
    }


    display () {

        var linkA = this.chain.bodyA.position;
        var linkB = this.pointB;

        strokeWeight(7);
        
        line(linkA.x,linkA.y,linkB.x,linkB.y);

    }




}