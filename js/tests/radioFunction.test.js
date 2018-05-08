describe("The RadioFunction function", function(){
  it("the call bill shoul be R2.75, sms R0.00 and the total bill R2.75", function(){
    var radioFunction = RadioFunction();
    radioFunction.billRadio('call');
    assert.deepEqual(radioFunction.checkRadio('call'), '2.75');
    assert.deepEqual(radioFunction.checkRadio('sms'), '0.00');
    assert.deepEqual(radioFunction.amountRadio(), '2.75');
  });
  it("the call bill shoul be R0.00, sms R0.75 and the total bill R0.75", function(){
    var radioFunction = RadioFunction();
    radioFunction.billRadio('sms');
    assert.deepEqual(radioFunction.checkRadio('call'), '0.00');
    assert.deepEqual(radioFunction.checkRadio('sms'), '0.75');
    assert.deepEqual(radioFunction.amountRadio(), '0.75');
  });
  it("the call bill shoul be R0.00, sms R0.00 and the total bill R0.00", function(){
    var radioFunction = RadioFunction();
    radioFunction.billRadio('');
    assert.deepEqual(radioFunction.checkRadio('call'), '0.00');
    assert.deepEqual(radioFunction.checkRadio('sms'), '0.00');
    assert.deepEqual(radioFunction.amountRadio(), '0.00');
  });
  it("the call bill shoul be R2.75, sms R0.75 and the total bill R3.50", function(){
    var radioFunction = RadioFunction();
    radioFunction.billRadio('call');
    radioFunction.billRadio('sms');
    assert.deepEqual(radioFunction.checkRadio('call'), '2.75');
    assert.deepEqual(radioFunction.checkRadio('sms'), '0.75');
    assert.deepEqual(radioFunction.amountRadio(), '3.50');
  });
});
