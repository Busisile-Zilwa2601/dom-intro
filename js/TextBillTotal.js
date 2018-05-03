function TextBillTotal(){
  var inputBill = {};
  var totalAmount = 0;
  var chargeBill = function(billTypeEntered){
    if(inputBill[billTypeEntered] === undefined){
      inputBill[billTypeEntered] = 0;
    }
    //adding the calls or sms
    if(billTypeEntered === 'call'){
      inputBill[billTypeEntered] += 2.75;
      totalAmount += 2.75;
    }
    else if(billTypeEntered === 'sms'){
      inputBill[billTypeEntered] += 0.75;
      totalAmount += 0.75;
    }
  };
  var checkBill = function(billTypeEntered){
    if(inputBill[billTypeEntered] === undefined){
      inputBill[billTypeEntered] = 0;
    }
		return inputBill[billTypeEntered].toFixed(2);
  }
  var theBill = function(){
    return totalAmount.toFixed(2);
  }
  return{
    bill : chargeBill,
    check: checkBill,
    amount : theBill
  }
}
