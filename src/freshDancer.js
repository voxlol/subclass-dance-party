function FreshDancer(top, left, timeBetweenSteps){
  Dancer.call(this, top, left);
  this.$node = $('<img class="dancer" src="images/8bitcarlton.gif">');
  this.setPosition(top, left);
  this.timeBetweenSteps = 250;
  this.rotationSpeed = 5;
  this.width = 106;
  this.height = 122;
  // Centered position on the X, Y
  this.x = this.left + this.width/2;
  this.y = this.top + this.height/2;

  var direction = Math.random();
  if(direction >= 0.5) {
    this.rotationAmount = 0.0001;
  } else {
    this.rotationAmount = -0.0001;
  }

  var that = this;
  this.$node.on('mouseover', function() {
    that.rotationSpeed += 3;
  });

  this.$node.on('click', function() {
    $(this).removeClass("FreshDancer");
    var styleSettings = {
      display: "none"
    }
    $(this).css(styleSettings);
  })
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
