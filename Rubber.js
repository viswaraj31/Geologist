class Rubber{
    constructor(x,y,radius){
        var options={
            'density':2,
            'friction':1.0,
            'restitution':0.5,
            isStatic: true
            
        }
        this.body = Bodies.elipse(x,y,radius)
        this.radius = radius
    }
    display(){
       // this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        var pos =this.body.position;
        elipse(pos.x,pos.y,this.radius);

    }

}