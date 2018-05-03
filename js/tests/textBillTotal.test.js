describe("The TextBillTotal function", function(){
  it("the call bill shoul be R2.75, sms R0.00 and the total bill R2.75", function(){
    var textBillTotal = TextBillTotal();
    textBillTotal.bill('call');
    assert.deepEqual(textBillTotal.check('call'), '2.75');
    assert.deepEqual(textBillTotal.check('sms'), '0.00');
    assert.deepEqual(textBillTotal.amount(), '2.75');
  });
  it("the call bill shoul be R0.00, sms R0.75 and the total bill R0.75", function(){
    var textBillTotal = TextBillTotal();
    textBillTotal.bill('sms');
    assert.deepEqual(textBillTotal.check('call'), '0.00');
    assert.deepEqual(textBillTotal.check('sms'), '0.75');
    assert.deepEqual(textBillTotal.amount(), '0.75');
  });
  it("the call bill shoul be R2.75, sms R0.75 and the total bill R3.50", function(){
    var textBillTotal = TextBillTotal();
    textBillTotal.bill('call');
    textBillTotal.bill('sms');
    assert.deepEqual(textBillTotal.check('call'), '2.75');
    assert.deepEqual(textBillTotal.check('sms'), '0.75');
    assert.deepEqual(textBillTotal.amount(), '3.50');
  });
});
