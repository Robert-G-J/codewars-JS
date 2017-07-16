describe("A Tower", function() {
  it("has a single floor", function() {
    expect(towerBuilder(1)).toEqual(['*']);
  });
  it("has two floors", function() {
    expect(towerBuilder(2)).toEqual([' * ', '***']);
  });
  it("has three floors", function() {
    expect(towerBuilder(3)).toEqual(['  *  ', ' *** ', '*****']);
  });
});
