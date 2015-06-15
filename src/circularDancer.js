var CircularDancer = function(top, left){
  Dancer.call(this, top, left);
  this.timeBetweenSteps = 50;
  this.lifetime = 0;
}

CircularDancer.prototype = Object.create(Dancer.prototype);
CircularDancer.prototype.constructor = CircularDancer;

CircularDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.lifetime += this.timeBetweenSteps;
  var styleSettings = {
    top: this.top + 100 * Math.cos(this.lifetime),
    left: this.left + 100 * Math.sin(this.lifetime)
  };

  this.$node.css(styleSettings);
}
