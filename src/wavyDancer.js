function WavyDancer(top, left){
  Dancer.call(this, top, left);
  this.timeBetweenSteps = 50;
  this.lifetime = 0;
}

WavyDancer.prototype = Object.create(Dancer.prototype);
WavyDancer.prototype.constructor = WavyDancer;

WavyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.lifetime += this.timeBetweenSteps;
  var styleSettings = {
    left: this.left + 100*Math.sin(this.lifetime)
  };
  this.$node.css(styleSettings);
}
