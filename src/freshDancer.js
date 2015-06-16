function FreshDancer(top, left, timeBetweenSteps){
  Dancer.call(this, top, left);
  this.$node = $('<img class="dancer" src="images/8bitcarlton.gif">');
  this.setPosition(top, left);
  this.timeBetweenSteps = 250;

  var direction = Math.random();
  if(direction >= 0.5)
    this.rotationAmount = 0.0001;
  else
    this.rotationAmount = -0.0001;
}

FreshDancer.prototype = Object.create(Dancer.prototype);
FreshDancer.prototype.constructor = FreshDancer;

FreshDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  if(this.rotationAmount > 0)
    this.rotationAmount += 5;
  else
    this.rotationAmount -= 5

  var styleSettings = {
    transform : 'rotate(' + this.rotationAmount + 'deg)'
  };
  this.$node.css(styleSettings);
}
