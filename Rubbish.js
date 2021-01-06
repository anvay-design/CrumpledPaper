class Rubbish {
    constructor(x, y, r) {
      var options = {
         isStatic:false,
        'restitution':0.5,
          'friction':1.0,
          'density':1.5
      }
    this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

    }
    display(){
      var Rubbishpos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(Rubbishpos.x, Rubbishpos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      ellipse(0,0,this.r, this.r);
      pop();
    }
  };
  