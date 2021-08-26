class RO{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
      this.img = loadImage("images/rock1.png")
    }
    show()
    {
        imageMode (CENTER)
        image(this.img ,this.body.position.x, this.body.position.y,this.width, this.height)

    }
  
  
  }
  