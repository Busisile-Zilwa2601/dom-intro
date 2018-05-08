function RadioWithSettings(){
  //scope variables
  var callAfterSetting,smsAfterSetting,warningLevelAfterSetting,criticalLevelAfterSetting = 0;
  var temp = {};
  var keepTotal = 0;
  var change = 0;
  var totalSettingsAmount = 0;
  var settings = function(checkedRandioBtn2){
    if(temp[checkedRandioBtn2] === undefined){
      temp[checkedRandioBtn2] = 0;
    }
    if(checkedRandioBtn2 === 'call'){
      keepTotal = totalSettingsAmount + callAfterSetting;
      if(totalSettingsAmount === criticalLevelAfterSetting){

      }
      else if(criticalLevelAfterSetting < totalSettingsAmount){

      }
      else if((criticalLevelAfterSetting > totalSettingsAmount)&&(criticalLevelAfterSetting-keepTotal < 0)){
        change = (criticalLevelAfterSetting-totalSettingsAmount);
        temp[checkedRandioBtn2] += change;
        totalSettingsAmount += change;
      }
      else{
        temp[checkedRandioBtn2] += callAfterSetting;
        totalSettingsAmount += callAfterSetting;
      }
    }
    else if(checkedRandioBtn2 === 'sms'){
      keepTotal = totalSettingsAmount+smsAfterSetting;
      if(totalSettingsAmount === criticalLevelAfterSetting){
        //temp[checkedRandioBtn2] += 0;
        //totalSettingsAmount += 0;
      }
      else if(criticalLevelAfterSetting < totalSettingsAmount){

      }
      else if((criticalLevelAfterSetting > totalSettingsAmount) && (criticalLevelAfterSetting-keepTotal < 0)){
        change = (criticalLevelAfterSetting-totalSettingsAmount);
        temp[checkedRandioBtn2] += change;
        totalSettingsAmount += change;
      }
      else{
        temp[checkedRandioBtn2] += smsAfterSetting;
        totalSettingsAmount += smsAfterSetting;
      }
    }
  }
  var checkSettings = function(checkedRandioBtn2){
    if(temp[checkedRandioBtn2] === undefined){
      temp[checkedRandioBtn2] = 0;
    }
    return temp[checkedRandioBtn2].toFixed(2);
  }
  var theBillTotal = function(){
    return totalSettingsAmount.toFixed(2);
  }
  var updateCall = function(newCall){
    if(newCall === ""){
        newCall = '0';
        callAfterSetting = parseFloat(newCall);
    }
    callAfterSetting = parseFloat(newCall);
    return callAfterSetting;
  }

  var updateSMS = function(newSms){
    if(newSms === ""){
        newSms = '0';
        smsAfterSetting = parseFloat(newSms);
    }
    smsAfterSetting = parseFloat(newSms);
    return smsAfterSetting;
  }
  var updateWarning = function(newWarning){
    warningLevelAfterSetting = parseFloat(newWarning);
    return warningLevelAfterSetting;
  }
  var updateCritical = function(newCritical){
    criticalLevelAfterSetting = parseFloat(newCritical);
    return criticalLevelAfterSetting;
  }
  var warningReached = function(){
    return (totalSettingsAmount >= warningLevelAfterSetting);
  }
  var criticalReached = function(){
    return (totalSettingsAmount >= criticalLevelAfterSetting);
  }
  return{
    callSet : updateCall,
    smsSet : updateSMS,
    warningSet : updateWarning,
    criticalSet : updateCritical,
    calculateEntry : settings,
    checkEntry : checkSettings,
    theTotal : theBillTotal,
    yellow : warningReached,
    red : criticalReached
  }
}
