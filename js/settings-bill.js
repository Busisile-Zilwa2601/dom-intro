var callAfterSetting = 0;
var smsAfterSetting = 0;
var warningLevelAfterSetting = 0;
var criticalLevelAfterSetting = 0;
var callAllTotal = 0;
var smsAllTotal = 0;
var totalAllBill = 0;
var stopper ;
//The Radio button part:

var totalBillAfterSetting;

//var lastTD = document.querySelector('td:last-child');
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');

function radioBillBtnSetting(){
  var checkedRandioBtnSet = document.querySelector('input[class = "billItemTypeWithSettings"]:checked');
  stopper = criticalLevelAfterSetting;
  if(stopper-totalAllBill<= 0){
      console.log('true');
      radioBillAddBtnSetting.removeEventListener('click', radioBillBtnSetting);
  }
  else if(checkedRandioBtnSet){
    var itemType = checkedRandioBtnSet.value;
    if(itemType === 'call'){
      var keepTotal = totalAllBill+callAfterSetting;
      console.log(keepTotal);
      if(stopper-keepTotal< 0){
        //radioBillAddBtnSetting.removeEventListener('click', radioBillBtnSetting);
        var change = (criticalLevelAfterSetting-totalAllBill);
        totalAllBill += change;
        callAllTotal += change;
        radioBillAddBtnSetting.removeEventListener('click', radioBillBtnSetting);
      }
      else{
        callAllTotal += callAfterSetting;
        totalAllBill += callAfterSetting;
      }
    }
    else if(itemType === 'sms'){
      var keepTotal = totalAllBill+smsAfterSetting;
      console.log(keepTotal);
      if(stopper-keepTotal < 0){
        //radioBillAddBtnSetting.removeEventListener('click', radioBillBtnSetting);
        var change = (criticalLevelAfterSetting-totalAllBill);
        totalAllBill += change;
        smsAllTotal += change;
        radioBillAddBtnSetting.removeEventListener('click', radioBillBtnSetting);
      }
      else{
        smsAllTotal += smsAfterSetting;
        totalAllBill += smsAfterSetting;
      }
    }
  }

  //totalAllBill = callAllTotal+smsAllTotal;
  callTotalSettings.innerHTML = callAllTotal.toFixed(2);
  smsTotalSettings.innerHTML = smsAllTotal.toFixed(2);
  totalSettings.innerHTML = totalAllBill.toFixed(2);
  if(totalAllBill<warningLevelAfterSetting && totalAllBill<criticalLevelAfterSetting){
    totalSettings.style.color = 'black';
  }
  else if(totalAllBill >= criticalLevelAfterSetting){
    console.log("true")
    totalSettings.style.color = 'red';
    //callAllTotal = 0;
    //smsAllTotal = 0;
  }
  else if(totalAllBill >= warningLevelAfterSetting){
    totalSettings.style.color = 'orange'
  }
  //totalSettings.innerHTML = totalAllBill.toFixed(2);
  //When an settings are updated, the value of stopper must be checked.
  //If the difference is more than zero, the radio button must be reactivated.

  var x = document.querySelector('.updateSettings');
  x.onclick =function(){
    stopper = criticalLevelAfterSetting;
    var checker = callAllTotal + totalAllBill;
    if(stopper - totalAllBill > 0){
      radioBillAddBtnSetting.addEventListener('click', radioBillBtnSetting);
    }
    else if(stopper <= checker)
    {
      radioBillAddBtnSetting.removeEventListener('click', radioBillBtnSetting);
    }
  }
}
var radioBillAddBtnSetting = document.getElementById("radioBillAddBtnSetting");
console.log(radioBillAddBtnSetting);
radioBillAddBtnSetting.addEventListener('click', radioBillBtnSetting);

//Updating the settings
function theUpDateSettings(){
    var newCall = document.querySelector(".callCostSetting").value;
    var newSms = document.querySelector('.smsCostSetting').value;
    var newWarning = document.querySelector('.warningLevelSetting').value;
    var newCritical = document.querySelector('.criticalLevelSetting').value;
    var newTotal = document.querySelector('.totalSettings').value;

    callAfterSetting = parseFloat(newCall);
    smsAfterSetting = parseFloat(newSms);
    warningLevelAfterSetting = parseFloat(newWarning);
    criticalLevelAfterSetting = parseFloat(newCritical);
    stopper = criticalLevelAfterSetting;
    if(totalAllBill<warningLevelAfterSetting){
      totalSettings.style.color = 'black';
    }
    else if(totalAllBill >= criticalLevelAfterSetting){
      console.log("true")
      totalSettings.style.color = 'red';
      //callAllTotal = 0;
      //smsAllTotal = 0;
    }
    else if(totalAllBill >= warningLevelAfterSetting){
      totalSettings.style.color = 'orange'
    }
    if(stopper === totalAllBill){
        radioBillAddBtnSetting.removeEventListener('click', radioBillBtnSetting);
    }
}
console.log(theUpDateSettings());
var upDateSetBtn = document.querySelector('.updateSettings');
console.log(upDateSetBtn);
upDateSetBtn.addEventListener('click', theUpDateSettings);
