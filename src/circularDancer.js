function CircularDancer(top, left){
  Dancer.call(this, top, left);
  this.timeBetweenSteps = 50;
  this.lifetime = 0;
}

CircularDancer.prototype = Object.create(Dancer.prototype);
CircularDancer.prototype.constructor = CircularDancer;

CircularDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  var ind = -1, dist = 100000;
  for(var i = 0; i < window.dancers.length; i++){
    var dancer = window.dancers[i];
    if(dancer.$node.hasClass("FreshDancer")) {
      var pythDist = Math.sqrt(Math.pow(this.top-dancer.top,2) + Math.pow(this.left-dancer.left,2));
      if(pythDist < dist){
        ind = i;
        dist = pythDist;
      }
    }
  }

  //debugger;
  if(ind >= 0) {
    var nearestCarlton = window.dancers[ind];
    var carltonHeight = nearestCarlton.$node.css("height");
    carltonHeight = carltonHeight.substr(0, carltonHeight.indexOf("p"));
    var carltonWidth = nearestCarlton.$node.css("width");
    carltonWidth = carltonWidth.substr(0, carltonWidth.indexOf("p"));
    var y = nearestCarlton.top + carltonHeight/2;
    var x = nearestCarlton.left + carltonWidth/2;
    this.top += (y - this.top)/20;
    this.left += (x - this.left)/20;
  }

  //debugger;
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
