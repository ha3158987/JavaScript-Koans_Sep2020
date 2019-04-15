describe('About Expects', function() {

  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {

    // Your journey begins here: Replace the word false with true
    expect(false).toBeTruthy();
  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', function() {
    // TODO: Replace FILL_ME_IN with your solution.
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

    // expect 함수에 넘겨지는 `actualValue === expectedValue` 부분에 대해서만 생각하시면 됩니다.
    // expect, toBeTruthy 등은 어떤 주어진 값을 판별하는 용도의 Jasmine Library에서 제공하는 함수입니다.
    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it('should assert equality a better way', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', function() {
    var expectedValue = FILL_ME_IN;
    var actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it('should have filled in values', function() {
    expect(1 + 1).toEqual(FILL_ME_IN);
  });
});
