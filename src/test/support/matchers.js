const matchers = {};

matchers.shouldHaveObjectEquality = (obj1, obj2) => (
  obj1.equals(obj2).should.equal(true));

matchers.shouldHaveBeenCalledWithImmutable = (listener, state) => (
  listener.getCall(0).args[0].equals(state).should.equal(true));


matchers.shouldHaveBeenCalledNthTimeWithImmutable = (listener, n, state) => (
  listener.getCall(n).args[0].equals(state).should.equal(true));

export default matchers;
