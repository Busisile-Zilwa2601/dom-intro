// get a reference to the textbox where the bill type is to be entered.
//get a reference to the add button.
//create a variable that will keep track of the total bill.
//add an event listener for when the add button is pressed.
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'.
// * add the appropriate value to the running total.
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
var billTypeTextElem = document.querySelector('.billTypeText');
var callTotalOne = document.querySelector('.callTotalOne');
var smsTotalOne = document.querySelector('.smsTotalOne');
var totalOne = document.querySelector('.totalOne');
var red = document.querySelector('.red');
var theTotal = 0;
var textBill = TextBillTotal();
//..............................................................
function textBillAdd(){
  var billTypeEntered = (billTypeTextElem.value).trim();
  textBill.bill(billTypeEntered);
  if(billTypeEntered === 'call'){
      callTotalOne.innerHTML = textBill.check(billTypeEntered);
  }
  else if(billTypeEntered === 'sms'){
      smsTotalOne.innerHTML = textBill.check(billTypeEntered);
  }
  theTotal = textBill.amount();
  if(theTotal >= 50){
    red.classList.add('danger');
    totalOne.innerHTML = theTotal;
  }
  else if(theTotal >= 30){
    red.classList.add('warning');
    totalOne.innerHTML = theTotal;
  }
  totalOne.innerHTML = theTotal;
}
var textBillAddBtn = document.querySelector(".addToBillBtn");
textBillAddBtn.addEventListener('click',textBillAdd);
