function BlinkyDancer(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.step();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();

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

  var styleSettings = {
    top: this.top,
    left: this.left
  };

  this.$node.css(styleSettings);
};
