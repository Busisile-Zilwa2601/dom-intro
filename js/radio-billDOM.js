// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

var callTotalTwo = document.querySelector('.callTotalTwo');
var smsTotalTwo = document.querySelector('.smsTotalTwo');
var totalTwo = document.querySelector('.totalTwo');
var orange = document.querySelector('.orange');
var totalBillR = 0;
var radioFunction = TextBillTotal();
function radioBillBtn(){
  var checkedRandioBtn = document.querySelector('input[name = "billItemType"]:checked');
  if(checkedRandioBtn){
    var billItemType = checkedRandioBtn.value;
    radioFunction.bill(billItemType);
    if(billItemType === 'call'){
      callTotalTwo.innerHTML = radioFunction.check(billItemType);
    }
    else if(billItemType === 'sms'){
      smsTotalTwo.innerHTML = radioFunction.check(billItemType);
    }
  }
  totalBillR = radioFunction.amount();
  if(totalBillR >= 50){
    orange.classList.add('danger');
    totalTwo.innerHTML = totalBillR;
  }
  else if(totalBillR >= 30){
    orange.classList.add('warning');
    totalTwo.innerHTML = totalBillR;
  }
  totalTwo.innerHTML = totalBillR;
}
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
radioBillAddBtn.addEventListener('click', radioBillBtn);
