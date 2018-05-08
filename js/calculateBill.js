function totalPhoneBill(myStr){
const perCall = 2.75;
const perSMS = 0.75;
var countCalls = 0;
var countSMS = 0;
var totalBill = new Number(0.0);
var myCalls = [];
var mySMS = [];
var myArr = [];
var multiSplit = function(str, delimeters){
  var result = [str];
  if(typeof(delimeters) == 'string')
    delimeters  = [delimeters];
  while(delimeters.length > 0){
    for(var i = 0; i< result.length; i++){
      var tempSplit = result[i].split(delimeters[0]);
      result = result.slice(0, i).concat(tempSplit).concat(result.slice(i+1));
    }
    delimeters.shift();//removing a delimeter
  }
  return result;
}
myArr = multiSplit(myStr, [' ', ',', '.']);
for(var i = 0; i< myArr.length;i++){
  var item = myArr[i].trim();
  if(item.toLowerCase() ==='call')
    myCalls.push(item);
  else if(item.toLowerCase() === 'sms')
      mySMS.push(item);
}
  countCalls =(myCalls.length)*perCall;
  countSMS = (mySMS.length)*perSMS;
  totalBill = countCalls+countSMS;
  return (totalBill.toFixed(2));
}
