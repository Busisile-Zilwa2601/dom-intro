describe("The TextBillTotal function in radio button", function(){
  it("the call bill shoul be R2.75, sms R0.00 and the total bill R2.75", function(){
    var radioFunction = TextBillTotal();
    radioFunction.bill('call');
    assert.deepEqual(radioFunction.check('call'), '2.75');
    assert.deepEqual(radioFunction.check('sms'), '0.00');
    assert.deepEqual(radioFunction.amount(), '2.75');
  });
  it("the call bill shoul be R0.00, sms R0.75 and the total bill R0.75", function(){
    var radioFunction = TextBillTotal();
    radioFunction.bill('sms');
    assert.deepEqual(radioFunction.check('call'), '0.00');
    assert.deepEqual(radioFunction.check('sms'), '0.75');
    assert.deepEqual(radioFunction.amount(), '0.75');
  });
  it("the call bill shoul be R0.00, sms R0.00 and the total bill R0.00", function(){
    var radioFunction = TextBillTotal();
    radioFunction.bill('');
    assert.deepEqual(radioFunction.check('call'), '0.00');
    assert.deepEqual(radioFunction.check('sms'), '0.00');
    assert.deepEqual(radioFunction.amount(), '0.00');
  });
  it("the call bill shoul be R2.75, sms R0.75 and the total bill R3.50", function(){
    var radioFunction = TextBillTotal();
    radioFunction.bill('call');
    radioFunction.bill('sms');
    assert.deepEqual(radioFunction.check('call'), '2.75');
    assert.deepEqual(radioFunction.check('sms'), '0.75');
    assert.deepEqual(radioFunction.amount(), '3.50');
  });
});
