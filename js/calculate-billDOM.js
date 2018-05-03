
//link the function to a click event on the calculate button
var billStringElement = document.querySelector('.billString');
var span = document.querySelector('.total');

function calculateBtnClicked(){
// get the string entered in the textArea
  var billString = billStringElement.value;
  //round to two decimals
  var roundedBillTotal = totalPhoneBill(billString);
  var billTotalElement = document.querySelector('.billTotal');
  if(roundedBillTotal<20.00){
    billTotalElement.style.color = 'black';
    span.style.color = 'black';
  }
  if(roundedBillTotal > 20.00){
    billTotalElement.style.color = 'orange';
    span.style.color = 'orange';
  }
  if(roundedBillTotal > 30.00){
    billTotalElement.style.color = 'red';
    span.style.color = 'red';
  }
  billTotalElement.innerHTML = roundedBillTotal;
}
var calculateBtn = document.querySelector(".calculateBtn");
calculateBtn.addEventListener('click', calculateBtnClicked);
