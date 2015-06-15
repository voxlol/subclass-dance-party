describe("wavyDancer", function() {

  var wavyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wavyDancer = new wavyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(wavyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(wavyDancer.$node, 'toggle');
    wavyDancer.step();
    expect(wavyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(wavyDancer, "step");
      expect(wavyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(wavyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(wavyDancer.step.callCount).to.be.equal(2);
    });
  });
});
