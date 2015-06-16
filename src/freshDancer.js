function FreshDancer(top, left, timeBetweenSteps){
  Dancer.call(this, top, left);
  this.$node = $('<img class="dancer" src="images/8bitcarlton.gif">');
  this.setPosition(top, left);
  this.timeBetweenSteps = 250;
  this.rotationSpeed = 5;

  var direction = Math.random();
  if(direction >= 0.5) {
    this.rotationAmount = 0.0001;
  } else {
    this.rotationAmount = -0.0001;
  }

/*
  var speed = this.rotationSpeed;
  this.$node.on('click', function() {
    console.log("hi");
    speed[0] += 3;
  });*/

  var that = this;
  this.$node.on('mouseover', function() {
    console.log("hi");
    that.rotationSpeed += 3;
  });
}

FreshDancer.prototype = Object.create(Dancer.prototype);
FreshDancer.prototype.constructor = FreshDancer;

FreshDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if(this.rotationSpeed) {
    if(this.rotationAmount > 0)
      this.rotationAmount += this.rotationSpeed;
    else
      this.rotationAmount -= this.rotationSpeed;
  }

  var styleSettings = {
    transform : 'rotate(' + this.rotationAmount + 'deg)'
  };
  this.$node.css(styleSettings);
}
