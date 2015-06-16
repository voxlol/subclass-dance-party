function CircularDancer(top, left){
  Dancer.call(this, top, left);
  this.timeBetweenSteps = 50;
  this.lifetime = 0;
}

CircularDancer.prototype = Object.create(Dancer.prototype);
CircularDancer.prototype.constructor = CircularDancer;

CircularDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  //find the nearest Carlton
  var ind = -1, dist = 100000;
  for(var i = 0; i < window.dancers.length; i++){
    var dancer = window.dancers[i];
    if(dancer.$node.hasClass("FreshDancer")) {
      var pythDist = Math.sqrt(Math.pow(this.top-dancer.y,2) + Math.pow(this.left-dancer.x,2));
      if(pythDist < dist){
        ind = i;
        dist = pythDist;
      }
    }
  }
  //move towards him
  if(ind >= 0) {
    var nearestCarlton = window.dancers[ind];
    var y = nearestCarlton.y;
    var x = nearestCarlton.x;
    this.top += (y - this.top)/20;
    this.left += (x - this.left)/20;
  }

  // Randomize color
  var hex = '0123456789ABCDEF';
  var randomColor = "#";
  for(var j = 0; j < 6; j++){
    var randomIx = Math.floor(Math.random()*16)
    randomColor += hex[randomIx];
  }

  this.lifetime += this.timeBetweenSteps;
  var styleSettings = {
    top: this.top + 100 * Math.cos(this.lifetime),
    left: this.left + 100 * Math.sin(this.lifetime),
    borderColor : randomColor
  };

  this.$node.css(styleSettings);
}
