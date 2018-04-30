describe("The totalPhoneBill function ",function(){
  it("the total phone bill is R2,75", function(){
    assert.equal(totalPhoneBill("call"), 2.75);
  });
  it("the total phone bill is R0,75", function(){
    assert.equal(totalPhoneBill("sms"), 0.75);
  });
  it("the total phone bill is R3,50", function(){
    assert.equal(totalPhoneBill("call, sms"), 3.50);
  });
  it("The total phone bill is R12.00", function(){
    assert.equal(totalPhoneBill("call, call, sms, sms, sms, sms, sms, call"), 12.00);
  });
});
