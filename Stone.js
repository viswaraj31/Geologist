class Stone{
    constructor(x,y,width,height){
        var options={
            'density':2,
            'friction':1.0,
            'restitution':0.5,
            isStatic: true
            
        }
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;
    }
    display(){
       // this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        var pos =this.body.position;
        rect(pos.x,pos.y,this.width,this.height);

    }

}