function RadioFunction(){
  var inputBillRadio = {};
  var totalAmountRadio = 0;
  var chargeBillRadio = function(checkedRandioBtn){
    if(inputBillRadio[checkedRandioBtn] === undefined){
      inputBillRadio[checkedRandioBtn] = 0;
    }
    //adding the calls or sms
    if(checkedRandioBtn === 'call'){
      inputBillRadio[checkedRandioBtn] += 2.75;
      totalAmountRadio += 2.75;
    }
    else if(checkedRandioBtn === 'sms'){
      inputBillRadio[checkedRandioBtn] += 0.75;
      totalAmountRadio += 0.75;
    }
  };
  var checkBillRadio = function(checkedRandioBtn){
    if(inputBillRadio[checkedRandioBtn] === undefined){
      inputBillRadio[checkedRandioBtn] = 0;
    }
		return inputBillRadio[checkedRandioBtn].toFixed(2);
  }
  var theBillRadio = function(){
    return totalAmountRadio.toFixed(2);
  }
  return{
    billRadio : chargeBillRadio,
    checkRadio: checkBillRadio,
    amountRadio : theBillRadio
  }
}
