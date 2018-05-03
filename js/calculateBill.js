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
