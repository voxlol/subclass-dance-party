function GrowingDancer(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.growing = true;
  this.size = 10;
  var styleSettings = {
    border: this.size + "px solid #00ddff"
  };
  this.$node.css(styleSettings);
}
GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  // this.lifetime += this.timeBetweenSteps;
  if(this.growing) {
    this.size += 5;
    if(this.size >= 50) {
      this.growing = false;
    }
  }
  else {
    this.size -= 5;
    if(this.size <= 10) {
      this.growing = true;
    }
  }
  var styleSettings = {
    border: this.size + "px solid #00ddff"
  };

  this.$node.css(styleSettings);
}
