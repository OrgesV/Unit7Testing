
it('should calculate the monthly rate correctly', function () {
  // ...
    let data = {amount:124 ,years:1 , rate:1 }
    expect(parseFloat(calculateMonthlyPayment(data))).toEqual(16.74)
});


it("should return a result with 2 decimal places", function() {
  // ..
  let data = {amount:124 ,years:1 , rate:1 }
  expect(calculateMonthlyPayment(data)).toMatch(/^\d+\.\d\d$/);
});


/// etc
