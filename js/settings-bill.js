var totalAllBill = 0;
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');
var radioWithSettingsFun = RadioWithSettings();
function radioBillBtnSetting(){
  var checkedRandioBtnSet = document.querySelector('input[class = "billItemTypeWithSettings"]:checked');
  if(checkedRandioBtnSet){
    var itemType = checkedRandioBtnSet.value;
    radioWithSettingsFun.calculateEntry(itemType);
    if(itemType === 'call'){
      callTotalSettings.innerHTML = radioWithSettingsFun.checkEntry(itemType);
    }
    else if(itemType === 'sms'){
      smsTotalSettings.innerHTML  = radioWithSettingsFun.checkEntry(itemType);
    }
  }
  totalAllBill = radioWithSettingsFun.theTotal();
  if(!radioWithSettingsFun.red() && !radioWithSettingsFun.yellow()){
    totalSettings.style.color = 'black';
    totalSettings.innerHTML = totalAllBill;
  }
  else if(radioWithSettingsFun.red()){
    console.log("true")
    totalSettings.style.color = 'red';
    totalSettings.innerHTML = totalAllBill;
  }
  else if(radioWithSettingsFun.yellow()){
    totalSettings.style.color = 'orange'
    totalSettings.innerHTML = totalAllBill;
  }
  totalSettings.innerHTML = totalAllBill;
}
var radioBillAddBtnSetting = document.getElementById("radioBillAddBtnSetting");
console.log(radioBillAddBtnSetting);
radioBillAddBtnSetting.addEventListener('click', radioBillBtnSetting);
//Updating the settings
function theUpDateSettings(){
    //assigning the values added by user:
    var newCall = document.querySelector(".callCostSetting").value;
    var newSms = document.querySelector('.smsCostSetting').value;
    var newWarning = document.querySelector('.warningLevelSetting').value;
    var newCritical = document.querySelector('.criticalLevelSetting').value;
    var newTotal = document.querySelector('.totalSettings').value;

    //Updating the values
    radioWithSettingsFun.callSet(newCall);
    radioWithSettingsFun.smsSet(newSms);
    radioWithSettingsFun.warningSet(newWarning);
    radioWithSettingsFun.criticalSet(newCritical);
    if(!radioWithSettingsFun.red() && !radioWithSettingsFun.yellow()){
      totalSettings.style.color = 'black';
    }
    else if(radioWithSettingsFun.red()){
      console.log("true")
      totalSettings.style.color = 'red';
    }
    else if(radioWithSettingsFun.yellow()){
      totalSettings.style.color = 'orange'
    }
}
var upDateSetBtn = document.querySelector('.updateSettings');
console.log(upDateSetBtn);
upDateSetBtn.addEventListener('click', theUpDateSettings);
