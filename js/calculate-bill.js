
//link the function to a click event on the calculate button
function totalPhoneBill(myStr){
const perCall = 2.75;
const perSMS = 0.75;
var countCalls = 0;
var countSMS = 0;
var totalBill = new Number(0.0);
var myCalls = [];
var mySMS = [];
var nonString = [];
console.log(myStr);
var myArr = myStr.split(',');
if(!myArr){

}
else{
  for(var i = 0; i<myArr.length;i++){
    var item = myArr[i].trim();
    if(item.toLowerCase()  ==='call'){
      myCalls.push(item);
    }
    else if(item.toLowerCase() === 'sms')
        mySMS.push(item);
    else if(item.toLowerCase() !== 'call' || item.toLowerCase()!=="sms"){
      nonString.push(item);
      console.log(nonString);
      //alert("strings: " + nonString + " are not counted:" )
    }
  }
  countCalls =(myCalls.length)*perCall;
  countSMS = (mySMS.length)*perSMS;
  totalBill = countCalls+countSMS;
  return (totalBill.toFixed(2));
  }
}

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
