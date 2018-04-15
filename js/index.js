var groupCache, timeZoneCache, workScheduleCache, assetCache, propertyCache, securityCache, zoneTypeCache,certificateCache,
availableProperties = '{"device":[{ "name":"Groups", "id":"deviceGroupIndex", "property":"groups", "propertyFunction":"getGroupIds(newValue)"}, {"name":"Name", "id":"deviceNameIndex", "property":"name", "propertyFunction":"setProperty(newValue)"}, {"name":"VIN", "id":"deviceVinIndex", "property":"vehicleIdentificationNumber", "propertyFunction":"setProperty(newValue)"}, {"name":"Comment", "id":"deviceCommentIndex", "property":"comment", "propertyFunction":"setProperty(newValue)"},{"name":"LicensePlate", "id":"deviceLicenseIndex", "property":"licensePlate", "propertyFunction":"setProperty(newValue)"}, {"name":"State/Province", "id":"deviceStateIndex", "property":"licenseState", "propertyFunction":"setProperty(newValue)"}, {"name":"WorkSchedule", "id":"deviceScheduleIndex", "property":"workTime", "propertyFunction":"getWorkSchedule(newValue)"}, {"name":"TimeZone", "id":"deviceTimeZoneIndex", "property":"timeZoneId", "propertyFunction":"getTimeZone(newValue)"}, {"name":"EnableActiveTracking", "id":"deviceactiveTrackingIndex", "property":"isActiveTrackingEnabled", "propertyFunction":"getLogicalAnswer(newValue)"},{"name":"OdometerOffset(KM)", "id":"deviceodometerOffsetIndex", "property":"odometerOffset", "propertyFunction":"setNumber(newValue,1000)"},{"name":"Expire Device", "id":"deviceExpiryIndex", "property":"activeTo", "propertyFunction":"expireEntity(newValue)"}], "user":[{ "name":"name", "id":"usernameIndex", "property":"name", "propertyFunction":"setProperty(newValue)"},{ "name":"FirstName", "id":"userFirstNameIndex", "property":"firstName", "propertyFunction":"setProperty(newValue)"}, {"name":"LastName", "id":"userLastNameIndex", "property":"lastName", "propertyFunction":"setProperty(newValue)"}, {"name":"password", "id":"userpasswordIndex", "property":"password", "propertyFunction":"setProperty(newValue)"},{"name":"AuthenticationType", "id":"userAuthenticationTypeIndex", "property":"userAuthenticationType", "propertyFunction":"setAuthenticationType(newValue)"}, {"name":"SecurityClearance", "id":"userSecurityIndex", "property":"securityGroups", "propertyFunction":"getSecurityIds(newValue)"}, {"name":"DataScope", "id":"userDataScopetIndex", "property":"companyGroups", "propertyFunction":"getGroupIds(newValue)"}, {"name":"ReportScope", "id":"userReportScopeIndex", "property":"reportGroups", "propertyFunction":"getGroupIds(newValue)"},{"name":"Comment", "id":"userCommentIndex", "property":"comment", "propertyFunction":"setProperty(newValue)"}, {"name":"Language", "id":"userLanguageIndex", "property":"language", "propertyFunction":"getLanguage(newValue)"}, {"name":"TimeZone", "id":"userTimeZoneIndex", "property":"timeZoneId", "propertyFunction":"getTimeZone(newValue)"},{"name":"DriversLicense", "id":"userLicenseNumberIndex", "property":"licenseNumber", "propertyFunction":"setProperty(newValue)"},{"name":"LicenseProvince", "id":"userLicenseProvinceIndex", "property":"licenseProvince", "propertyFunction":"setProperty(newValue)"},{"name":"EmployeeNo", "id":"userEmployeeNoIndex", "property":"employeeNo", "propertyFunction":"setProperty(newValue)"},{"name":"hosRuleSet", "id":"userhosRuleSetIndex", "property":"hosRuleSet", "propertyFunction":"setProperty(newValue)"}, {"name":"isPersonalConveyanceEnabled", "id":"userisPersonalConveyanceEnabledIndex", "property":"isPersonalConveyanceEnabled", "propertyFunction":"setProperty(newValue)"}, {"name":"isYardMoveEnabled", "id":"userisYardMoveEnabledIndex", "property":"isYardMoveEnabled", "propertyFunction":"setProperty(newValue)"},{"name":"CompanyName", "id":"userCompanyNameIndex", "property":"companyName", "propertyFunction":"setProperty(newValue)"},{"name":"CompanyAddress", "id":"userCompanyAddressIndex", "property":"companyAddress", "propertyFunction":"setProperty(newValue)"}, {"name":"CarrierNumber", "id":"userCarrierNumberIndex", "property":"carrierNumber", "propertyFunction":"setProperty(newValue)"}, {"name":"NFCKey", "id":"userNFCKeysIndex", "property":"keys", "propertyFunction":"setNFCKey(newValue)"},{"name":"Expire User", "id":"userExpiryIndex", "property":"activeTo", "propertyFunction":"expireEntity(newValue)"}], "zone":[{ "name":"Name", "id":"zoneNameIndex", "property":"name", "propertyFunction":"setProperty(newValue)"}, {"name":"Color", "id":"zoneColorIndex", "property":"fillColor", "propertyFunction":"getColor(newValue)"}, {"name":"Comment", "id":"zoneCommentIndex", "property":"comment", "propertyFunction":"setProperty(newValue)"}, {"name":"Groups", "id":"zoneGroupIndex", "property":"groups", "propertyFunction":"getGroupIds(newValue)"}, {"name":"IsDisplayed?", "id":"zoneDisplayedIndex", "property":"displayed", "propertyFunction":"setProperty(newValue)"}, {"name":"ExternalReference", "id":"zoneReferenceIndex", "property":"externalReference", "propertyFunction":"setProperty(newValue)"}, {"name":"ZoneType", "id":"zoneTypeIndex", "property":"zoneTypes", "propertyFunction":"getZoneTypes(newValue)"}, {"name":"Expire Zone", "id":"zoneExpiryIndex", "property":"activeTo", "propertyFunction":"expireEntity(newValue)"}],"trailer":[{ "name":"Name", "id":"trailerNameIndex", "property":"name", "propertyFunction":"setProperty(newValue)"},{"name":"Groups", "id":"trailerGroupIndex", "property":"groups", "propertyFunction":"getGroupIds(newValue)"},{"name":"Comment", "id":"trailerCommentIndex", "property":"comment", "propertyFunction":"setProperty(newValue)"}]}',
colorList = {aliceblue: 'f0f8ff', antiquewhite: 'faebd7', aqua: '00ffff', aquamarine: '7fffd4', azure: 'f0ffff', beige: 'f5f5dc', bisque: 'ffe4c4', black: '000000', blanchedalmond: 'ffebcd', blue: '0000ff', blueviolet: '8a2be2', brown: 'a52a2a', burlywood: 'deb887', cadetblue: '5f9ea0', chartreuse: '7fff00', chocolate: 'd2691e', coral: 'ff7f50', cornflowerblue: '6495ed', cornsilk: 'fff8dc', crimson: 'dc143c', cyan: '00ffff', darkblue: '00008b', darkcyan: '008b8b', darkgoldenrod: 'b8860b', darkgray: 'a9a9a9', darkgreen: '006400', darkkhaki: 'bdb76b', darkmagenta: '8b008b', darkolivegreen: '556b2f', darkorange: 'ff8c00', darkorchid: '9932cc', darkred: '8b0000', darksalmon: 'e9967a', darkseagreen: '8fbc8f', darkslateblue: '483d8b', darkslategray: '2f4f4f', darkturquoise: '00ced1', darkviolet: '9400d3', deeppink: 'ff1493', deepskyblue: '00bfff', dimgray: '696969', dodgerblue: '1e90ff', feldspar: 'd19275', firebrick: 'b22222', floralwhite: 'fffaf0', forestgreen: '228b22', fuchsia: 'ff00ff', gainsboro: 'dcdcdc', ghostwhite: 'f8f8ff', gold: 'ffd700', goldenrod: 'daa520', gray: '808080', green: '008000', greenyellow: 'adff2f', honeydew: 'f0fff0', hotpink: 'ff69b4', indianred : 'cd5c5c', indigo : '4b0082', ivory: 'fffff0', khaki: 'f0e68c', lavender: 'e6e6fa', lavenderblush: 'fff0f5', lawngreen: '7cfc00', lemonchiffon: 'fffacd', lightblue: 'add8e6', lightcoral: 'f08080', lightcyan: 'e0ffff', lightgoldenrodyellow: 'fafad2', lightgrey: 'd3d3d3', lightgreen: '90ee90', lightpink: 'ffb6c1', lightsalmon: 'ffa07a', lightseagreen: '20b2aa', lightskyblue: '87cefa', lightslateblue: '8470ff', lightslategray: '778899', lightsteelblue: 'b0c4de', lightyellow: 'ffffe0', lime: '00ff00', limegreen: '32cd32', linen: 'faf0e6', magenta: 'ff00ff', maroon: '800000', mediumaquamarine: '66cdaa', mediumblue: '0000cd', mediumorchid: 'ba55d3', mediumpurple: '9370d8', mediumseagreen: '3cb371', mediumslateblue: '7b68ee', mediumspringgreen: '00fa9a', mediumturquoise: '48d1cc', mediumvioletred: 'c71585', midnightblue: '191970', mintcream: 'f5fffa', mistyrose: 'ffe4e1', moccasin: 'ffe4b5', navajowhite: 'ffdead', navy: '000080', oldlace: 'fdf5e6', olive: '808000', olivedrab: '6b8e23', orange: 'ffa500', orangered: 'ff4500', orchid: 'da70d6', palegoldenrod: 'eee8aa', palegreen: '98fb98', paleturquoise: 'afeeee', palevioletred: 'd87093', papayawhip: 'ffefd5', peachpuff: 'ffdab9', peru: 'cd853f', pink: 'ffc0cb', plum: 'dda0dd', powderblue: 'b0e0e6', purple: '800080', red: 'ff0000', rosybrown: 'bc8f8f', royalblue: '4169e1', saddlebrown: '8b4513', salmon: 'fa8072', sandybrown: 'f4a460', seagreen: '2e8b57', seashell: 'fff5ee', sienna: 'a0522d', silver: 'c0c0c0', skyblue: '87ceeb', slateblue: '6a5acd', slategray: '708090', snow: 'fffafa', springgreen: '00ff7f', steelblue: '4682b4', tan: 'd2b48c', teal: '008080', thistle: 'd8bfd8', tomato: 'ff6347', turquoise: '40e0d0', violet: 'ee82ee', violetred: 'd02090', wheat: 'f5deb3', white: 'ffffff', whitesmoke: 'f5f5f5', yellow: 'ffff00', yellowgreen: '9acd32'};

var assetJSON = $.parseJSON(availableProperties);

/**
for testing 

Notes: exits as soon as there is a duplicate on add. So, need to modfiy logic to get devices, and turn those into "Set" instead of "Add"


Add:
G7-872-0E1-6026|1234-Outback|4S4BSANC8G3267435
G7-062-0E1-995C|EY JEEP|1J4GW58N01C724128
G7-4F2-0E2-CE47|GPSPRO NISSAN|1N6AD0CW5CC468606
G7-442-0DF-C540|GPSPRO-HHR Vegas|3GNBABDB1AS501655
G7-B62-0E7-3F3C|GPSPRO-National Sales 1|1FMJU2A52EEF63135
G7-A32-0E1-F092|GPSPRO-Out of Service|1D4PU4GK1BW546472
G7-BA2-0E7-3F30|GPSPRO-Reno Service|1D4PU4GKXBW554389
G7-992-0DF-C69C|GPSPRO2- HHR|3GCDA15D97S626116
G7-6D2-0DF-C569|HHR- SO CAL|3GNBAADB6AS507218
G8-612-0ED-A408|KS JEEP|1C4PJMABXHW656878
G8-FC2-0E9-FCC9|Lakeside|1C4PJMCB8JD515306
G8-DB2-0ED-B3A3|Northwest|1C4PJMCB0JD535680
G8-852-0EA-337E|SCC SHOP TRUCK F250|
G7-2E2-0DC-6AB8|T-350 Service Van|1FBAX2CGXGKB12084
G7-0A2-0DC-6A9C|Truck SY|1FTEW1EG6FKD43781
G8-912-0ED-A4F8|Village|1C4PJMCB5JD616237

**/


$("body").on("click","#propertySelectorContainer button",function(event){ 
  event.preventDefault();
  $(this).toggleClass("positiveButton");
  if($(this).hasClass("positiveButton")){
    $("#expectedInputSelectorContainer fieldset").append('<span class="'+$(this).attr("id")+'">|'+$(this).text()+'</span>');
  }else{
    $('.'+$(this).attr("id")).remove();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  $("#assetSelectorContainer button").click(function(event){
    event.preventDefault();
    
    $(this).siblings().removeClass("positiveButton");         
    $("#propertySelectorContainer button").remove();
    $(this).toggleClass("positiveButton");

    if ($(this).hasClass("positiveButton")) {
      parseAssetProperties($(this).attr("id"));
    } else {
      $("#noAssetChosen").show();
    }
  });
  
  groupCache = refreshGroupCache(null);
  timeZoneCache = refreshTimeZoneCache(null);
  workScheduleCache = refreshWorkScheduleCache(null);
  securityCache = refreshSecurityCache(null);
  zoneTypeCache = refreshZoneTypeCache(null);
  certificateCache = refreshCertificateCache(null);                  
                  
   // Check for valid User controls selection & input (LMIT Aug 23 2016)
  document.getElementById("runAnalyze").addEventListener("click", function(event){
    event.preventDefault();
    $("#outputArea").html("");
    if (checkForUserInput()) {
      var content = document.getElementById("inputArea").value;
      getActualInput(content, false);
    }
  });

  document.getElementById("runEdit").addEventListener("click", function(event){
    event.preventDefault();
    $("#outputArea").html("");
    if (checkForUserInput()) {
      var content = document.getElementById("inputArea").value;
      getActualInput(content, true);
    }
  });

  document.getElementById("runAdd").addEventListener("click", function(event){
    event.preventDefault();
    $("#outputArea").html("");
    if (checkForUserInput()) {
      var content = document.getElementById("inputArea").value;
      getActualInput(content, "add");
    }
  });

});

// Check for valid User controls selection & input (LMIT Aug 23 2016)
function checkForUserInput() {
  if($('#expectedInputSelectorContainer label').length === 0) {
    alert("You must select an Asset");
    return false;
  }
  if($('#expectedInputSelectorContainer fieldset span').length === 0) {
    alert("You must specify properties to edit");
    return false;
  }        
  var content = document.getElementById("inputArea").value;
  if (content === "") {
    alert("At least one asset to edit must be specified in Input field");
    return false;
  }                
  return true;
};

/** last step in chain **/
function runAnalyze(parsedData, update){                
  var parseResult = '';
  var parsedDataLength = parsedData.length;
  for (var i = 0; i < parsedDataLength; i++) {
    if (parsedData[i].valid && !parsedData[i].bad) {
      parseResult = parseResult + "<span id='"+parsedData[i].label+"'>"+parsedData[i].label + " - OK</span><br/>";
    } else {
      parseResult = parseResult + "<span class='badData' id='"+parsedData[i].label+"'>"+parsedData[i].label + " - ERROR: "+ parsedData[i].bad+"</span><br/>";
    }
  }
  $("#outputArea").html(parseResult);
  $("#status").text("Done Analysis");

  if (update === true) {
    runUpdate(parsedData,parsedDataLength);
  } else if (update === 'add') {
    runAdd(parsedData,parsedDataLength);
  } else {
    alert("Assets have been analyzed. Please review the Output box.");
    parsedData.length = 0;
  }
}
/************************/

function runAdd(assetData, totalCount) {
  var assetType =  $('#expectedInputSelectorContainer label').attr('id');
  assetType = assetType.slice(0, -6);
  var addCalls = buildAdd(assetData,totalCount,assetType);

  console.log(addCalls);

  if (addCalls.length > 0) {
    $("#status").text("Updating Devices");
    runCalls(addCalls,"add",assetType,null);
  } else {
    alert("No Valid "+ assetType + " entries");         
  }
  assetData.length = 0;
}

function buildAdd(assetData,totalCount,assetType) {

  $("#status").text("Building Update Calls");
  var setMultiCall=[],assetLabel,tmpCall=[],updatedEntity;
  for(var i = 0; i < totalCount; i++){
    progressBarUpdate(i+1,totalCount);
    if(assetData[i].valid){
      assetLabel = assetData[i].label;
      updatedEntity = $.extend(true,{},assetData[i][assetLabel]);

      //is the entity in the wrong format?? Getting rejected by the API
      updatedEntity.serialNumber = assetLabel;
      tmpCall = ["Add", { typeName: assetType, entity: updatedEntity}];
      setMultiCall.push(tmpCall);
    }
  }
  return setMultiCall
}

function runUpdate(assetData, totalCount) {
  var assetType =  $('#expectedInputSelectorContainer label').attr('id');
  assetType = assetType.slice(0, -6);
  var setCalls = buildSet(assetData,totalCount,assetType);
  if (setCalls.length > 0) {
    $("#status").text("Updating Devices");
    runCalls(setCalls,"set",assetType,null);
  } else {
    alert("No Valid "+ assetType + " entries");         
  }
  assetData.length = 0;
}

function buildSet(assetData,totalCount,assetType) {
  $("#status").text("Building Update Calls");
  var setMultiCall=[],assetLabel,tmpCall=[],updatedEntity;
  for(var i = 0; i < totalCount; i++){
    progressBarUpdate(i+1,totalCount);
    if(assetData[i].valid){
      assetLabel = assetData[i].label;
      updatedEntity = $.extend(true,{},assetData[i][assetLabel]);
      tmpCall = ["Set", { typeName: assetType, entity: updatedEntity}];
      setMultiCall.push(tmpCall);
    }
  }
  return setMultiCall
}

function buildGet(assetType,totalCount,inputtedAssets) {
  $("#status").text("Building Asset Dictionary");
  var getMultiCall=[], assetLabel,tmpCall=[];
  if (assetType == "Device") {
    for(var i = 0; i < totalCount; i++){
      progressBarUpdate(i+1,totalCount);
      var thisAsset = inputtedAssets[i].split("|"),
      assetLabel = serialNumberParse(thisAsset[0]);
      if(assetLabel.valid){
        tmpCall = ["Get", { typeName: assetType, search: {serialNumber: assetLabel.value} }];
        getMultiCall.push(tmpCall); 
      }
    }
  } else {
    for(var i = 0; i < totalCount; i++){
      progressBarUpdate(i+1,totalCount);
      var thisAsset = inputtedAssets[i].split("|"),
      assetLabel = thisAsset[0];
      tmpCall = ["Get", { typeName: assetType, search: {name: assetLabel} }];
      getMultiCall.push(tmpCall);
    }
  }
  return getMultiCall
}

function runCalls(calls,flag,assetType,callback) {
  api.multiCall(calls, function (result) {

    console.log('multiCall result: ', result);

    if (flag == "set") { $("#status").text("Succesfully Updated: " + result.length + " " + assetType); }
    else if (flag == "get") {
      for (var i = 0; i < result.length; i++) {
        if (result[i].length>0) {
          if (assetType == "Device") {
            assetCache[result[i][0].serialNumber] = result[i][0];
          } else {
            assetCache[result[i][0].name] = result[i][0];
          }
        }
      }
    }
    if (callback) {
      return callback();
    }
  }, function(error) {
    console.log(error);
  });
}

function parseAssetProperties(assetID){
  var chosenAsset = assetID.slice(0,-5);
  propertyCache = {};
  $("#noAssetChosen").hide();
  for(var i = 0; i < assetJSON[chosenAsset].length; i++){
    var tmpObject = assetJSON[chosenAsset][i];
    $("#propertySelectorContainer fieldset").append('<button class="checkmateToolbarButton geotabButton" id="'+tmpObject.id+'">'+tmpObject.name+'</button>');
    propertyCache[tmpObject.id] = tmpObject;
  }
  $("#expectedInputSelectorContainer legend").siblings().remove();
  switch(chosenAsset)
  {
    case "device":
      $("#expectedInputSelectorContainer fieldset").append("<label id='DeviceSearch'>G6-XXX-XXX-XXXX</label>");
      break;
    case "user":
      $("#expectedInputSelectorContainer fieldset").append("<label id='UserSearch'>myuser@geotab.com</label>");
      break;
    case "zone":
      $("#expectedInputSelectorContainer fieldset").append("<label id='ZoneSearch'>MyZoneName</label>");
      break;
    case "trailer":
      $("#expectedInputSelectorContainer fieldset").append("<label id='TrailerSearch'>TrailerName</label>");
      break;  
    default:
      $("#expectedInputSelectorContainer fieldset").append("<label id='assetLabel'>Error occurred</label>");          
  }
}
function parseExpectedInput(){
  var chosenProperties = $("#expectedInputSelectorContainer label").nextAll("span");
  var properties = [];
  for(var i = 0; i < chosenProperties.length; i++){
    properties[i] = $(chosenProperties[i]).attr("class");
  }
  return properties;
}

function getActualInput(content, update){
  var expectedAsset = $('#expectedInputSelectorContainer label').attr('id');
  var splitInput = content.split("\n");
  var totalCount = splitInput.length;       
  expectedAsset = expectedAsset.slice(0,-6);
  progressBarUpdate(0,totalCount);
  if (splitInput && totalCount) {
    $("#status").text("Analyzing Input");
    refreshAssetCache(expectedAsset,totalCount,splitInput, update);
  }
}

function parseActualInput(expectedAsset,totalCount,splitInput,update){          
  var expectedProperties = parseExpectedInput(),
    expectedPropertiesCount = expectedProperties.length,
    assetList = [],
    tempAssetObject = {},
    assetObjectClone = {},
    thisAsset,
    assetMainTag,
    propertiesCount,
    thisProperty,
    thisValue;

  for (var i = 0; i < totalCount; i++) {
    thisAsset = splitInput[i].split("|");
    propertiesCount = thisAsset.length;
      
    if (propertiesCount - 1 == expectedPropertiesCount) {
      switch(expectedAsset){
        case "Device":
          var deviceParse = serialNumberParse(thisAsset[0]);
          deviceParse.valid ? assetMainTag = deviceParse.value : assetMainTag = false;
          break;
        case "User":
          assetMainTag = thisAsset[0];
          break;
        case "Zone":
          assetMainTag = thisAsset[0];
          break;
        case "Trailer":
          assetMainTag = thisAsset[0];
          break;
        default:
          alert("Invalid Asset Type chosen");
          return false
      }

      if (update === "add") {

        label = thisAsset[0].split('-').join('');
        tempAssetObject = {
          label: label,
          valid: true,
          bad: false
        };

        tempAssetObject[assetMainTag] = {};
        for (var j = 0; j < expectedPropertiesCount; j++) {
          thisProperty = propertyCache[expectedProperties[j]].property;
          tempAssetObject[assetMainTag][thisProperty] = thisAsset[j + 1];
        }

      } else if (!assetMainTag || !assetCache.hasOwnProperty(assetMainTag)) {
        tempAssetObject = {
          label: thisAsset[0],
          valid: false,               
          bad: expectedAsset + " " + thisAsset[0] + " does not exist"
        };

      } else {
        tempAssetObject = {
          label: assetMainTag,
          valid: true,                
          bad: false
        };
        assetObjectClone = $.extend(true, {}, assetCache[assetMainTag]);
        tempAssetObject[assetMainTag] = {};
        
        var badCount = 0;
        
        for(var j = 0; j < expectedPropertiesCount; j++){
          thisProperty = propertyCache[expectedProperties[j]].property;
          thisValue = getPropertyValue(thisAsset[j+1],propertyCache[expectedProperties[j]].propertyFunction);
          
          var badValue = thisValue.bad;
          var validValue = thisValue.valid;
          
          if(validValue && !badValue){
            tempAssetObject[assetMainTag][thisProperty] = thisValue.value;
            if(thisProperty == 'isActiveTrackingEnabled'){
              tempAssetObject[assetMainTag].parameterVersion = assetObjectClone.parameterVersion + 1;
            }
            if(thisProperty == 'userAuthenticationType' && thisValue.value == "SAML"){
              tempAssetObject[assetMainTag].issuerCertificate = certificateCache;
            }
            if(thisProperty == 'keys'){
              if(thisValue.value == "CLEAR"){
                tempAssetObject[assetMainTag].keys = [];
              }else{
                tempAssetObject[assetMainTag].keys = [thisValue.value];
              }                   
            }

          }else if(!validValue && badValue){
            badCount++;                 
            if(tempAssetObject.bad === false){
              tempAssetObject.bad = thisProperty + " : " + thisValue.value;
            }else{
              tempAssetObject.bad = tempAssetObject.bad + ", " + thisProperty + " : " + thisValue.value;
            }
          }
        }   
        if(badCount >= expectedPropertiesCount){
          tempAssetObject.valid = false;

        }else{
          if(tempAssetObject[assetMainTag].groups !== undefined){
            assetObjectClone.groups = [];
          }else if(tempAssetObject[assetMainTag].companyGroups !== undefined){
            assetObjectClone.companyGroups = [];
            if(tempAssetObject[assetMainTag].driverGroups !== undefined || assetObjectClone.driverGroups !== undefined){
              assetObjectClone.driverGroups = [];
            }         
          }
          tempAssetObject[assetMainTag] =  $.extend(true,{},assetObjectClone,tempAssetObject[assetMainTag]);
          if(tempAssetObject[assetMainTag].driverGroups !== undefined && JSON.stringify(tempAssetObject[assetMainTag].driverGroups) !== JSON.stringify(tempAssetObject[assetMainTag].companyGroups)){
              $.extend(tempAssetObject[assetMainTag].driverGroups,tempAssetObject[assetMainTag].companyGroups);
          }
        }
      }           
    } else {
      // Show valid counts, based upon mandatory email address (LMIT Aug 23 2016)                        
      tempAssetObject = {
        label: thisAsset[0],
        valid: false,
        bad: "Expected "+(expectedPropertiesCount + 1)+" properties but you entered: "+propertiesCount
      }
    }
    assetList.push(tempAssetObject);
    progressBarUpdate(i+1,totalCount);
  }

  runAnalyze(assetList,update);
}

function setAuthenticationType(authType){
  if((authType.toLowerCase()).indexOf("myadmin") > -1){
    authType = "MyAdmin";
  }else if((authType.toLowerCase()).indexOf("saml") > -1){
    authType = "SAML";
  }else{
    authType = "BasicAuthentication";
  }
  return{
    valid:true,
    value:authType,
    bad:false
  }
}
function setNFCKey(newValue){
  var value;
  if(newValue.toUpperCase() == 'CLEARKEY'){
    value = "CLEAR"
  }else{
    value = {serialNumber: newValue,driverKeyType: "Nfc"};
  }
  return {
    valid: true,
    bad: false,
    value: value
  }
}
function setProperty(newValue){
  if(newValue === "true" | newValue.toLowerCase === "yes"){
    newValue = true;
  }else if(newValue === "false" | newValue.toLowerCase === "no"){
    newValue = false;
  }
  return{
    valid:true,
    value:newValue,
    bad:false
  }
}
function getZoneTypes(zoneTypeString){
  var splitZoneTypes = zoneTypeString.split(";");
  var zoneTypesString = [];
  var invalidZoneTypesNames = [];
  for(var i=0; i < splitZoneTypes.length; i++){
    var zoneTypeName = splitZoneTypes[i].trim().toLowerCase();
    if (zoneTypeCache.hasOwnProperty(zoneTypeName)) {
      var tmpZoneType = $.extend({}, zoneTypeCache[zoneTypeName]);
      delete tmpZoneType.name;
      delete tmpZoneType.comment;
      zoneTypesString.push(tmpZoneType);
    }else{
      if(zoneTypeName.indexOf("customer") > -1){
        zoneTypesString.push("ZoneTypeCustomerId");
      }else if(zoneTypeName.indexOf("office") > -1){
        zoneTypesString.push("ZoneTypeOfficeId");
      }else if(zoneTypeName.indexOf("home") > -1){
        zoneTypesString.push("ZoneTypeHomeId");
      }else{
        invalidZoneTypesNames.push(zoneTypeName);
      }
    }
  }
  if(invalidZoneTypesNames.length == 0){
    return{
      valid: true,
      value: zoneTypesString, 
      bad: false
    }
  }else{
    return{
      valid:false,
      value: invalidZoneTypesNames, 
      bad: true
    }
  }
}
function getGroupIds(groupString) {
  var splitGroups = groupString.split(";");
  var groupString = [];
  var invalidGroupNames = [];
  for (var i = 0; i < splitGroups.length; i++) {
    var groupName = splitGroups[i].trim();
    if (groupCache.hasOwnProperty(groupName)) {
      var tmpgroup = $.extend({}, groupCache[groupName]);
      delete tmpgroup.name;
      delete tmpgroup.color;
      delete tmpgroup.children;
      groupString.push(tmpgroup);
    }else{
      invalidGroupNames.push(groupName);
    }
  }
  if(invalidGroupNames.length == 0){
    return{
      valid: true,
      value: groupString, 
      bad: false
    }
  }else{
    return{
      valid:false,
      value: invalidGroupNames, 
      bad: true
    }
  }
}
function setNumber(value,multiplier){
  var newValue = 0, validityBit = true, badBit = false;
  if(isNaN(value)){
    validityBit = false;
    badBit = true;
    newValue = value + " - not a valid number";
  }else{
    newValue = value;
    if(!isNaN(multiplier)){
      newValue = newValue*multiplier;
    }
  }       
  return{
    valid: validityBit,
    value: newValue, 
    bad: badBit
  }
}
function getSecurityIds(securityString) {
  var splitGroups = securityString.split(";");
  var securityArray = [];
  var invalidSecurityNames = [];
  for (var i = 0; i < splitGroups.length; i++) {
    var securityName = splitGroups[i].trim();
    if (securityCache.hasOwnProperty(securityName)) {
      var tmpgroup = $.extend({}, securityCache[securityName]);
      delete tmpgroup.name;
      delete tmpgroup.color;
      delete tmpgroup.children;
      securityArray.push(tmpgroup);
    }else{
      // Zendesk#279469 - Reference variable 'securityName' not 'groupName' (LMIT Aug 23 2016)
      invalidSecurityNames.push(securityName);
    }
  }
  if(invalidSecurityNames.length == 0){
    return{
      valid: true,
      value: securityArray, 
      bad: false
    }
  }else{
    return{
      valid:false,
      value: invalidSecurityNames, 
      bad: true
    }
  }
}
function getColor(colorString){
  var cleanString = colorString.replace(/ /g,'').toLowerCase();
  if(colorList.hasOwnProperty(cleanString)){
    var hexAsInt = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorList[cleanString]);
    return{
      valid:true,
      value: {r : parseInt(hexAsInt[1], 16),g: parseInt(hexAsInt[2], 16),b:parseInt(hexAsInt[3], 16),a:63},
      bad: false
    }
  }else{
    return{ 
      valid:false,
      value: colorString, 
      bad: true
    }
  }
}
function expireEntity(logicString){
  var validatedInput = getLogicalAnswer(logicString);
  if(validatedInput.valid){
    if(validatedInput.value == true){
      validatedInput.value = new Date().toISOString();
    }else{
      validatedInput.value = "2050-01-01";
    }
  }
  return validatedInput;
}
function getLogicalAnswer(logicString){
  logicString = logicString.trim().toLowerCase();
  if(logicString === "true" | logicString === "yes"){
    return{
      valid:true,
      value:true,
      bad:false
    } 
  }else if(logicString === "false" | logicString === "no"){
    return{
      valid:true,
      value:false,
      bad:false
    }
  }else{
    return{
      valid:false,
      value:false,
      bad:true
    }
  }             
}
function getTimeZone(timeZoneString) {
  timeZoneString = timeZoneString.trim();
  if (timeZoneCache.hasOwnProperty(timeZoneString)) {
    return{
      valid: true,
      value: timeZoneString, 
      bad: false
    }
  }else{
    return{
      valid:false,
      value: timeZoneString, 
      bad: true
    }
  }
}
function getLanguage(languageString){
  languageString = languageString.trim();     
  if (languageString.toLowerCase() == "english" || languageString.toLowerCase() == "en"){
    return{
      valid:true,
      value: "en", 
      bad: false
    }
  }else if (languageString.toLowerCase() == "french" || languageString.toLowerCase() == "fr"){
    return{
      valid:true,
      value: "fr", 
      bad: false
    }
  }else if (languageString.toLowerCase() == "spanish" || languageString.toLowerCase() == "sp" || languageString.toLowerCase() == "es"){
    return{
      valid:true,
      value: "es", 
      bad: false
    }
  }else if (languageString.toLowerCase() == "japanese" || languageString.toLowerCase() == "ja" || languageString.toLowerCase() == "jp"){
    return{
      valid:true,
      value: "ja", 
      bad: false
    }
  }else{
    return{
      valid:true,
      value: "en", 
      bad: false
    }
  }
}
function getWorkSchedule(WorkScheduleString) {    
  WorkScheduleString = WorkScheduleString.trim(); 
  if (workScheduleCache.hasOwnProperty(WorkScheduleString)) {
    return{
      valid: true,
      value: workScheduleCache[WorkScheduleString].name === undefined ? workScheduleCache[WorkScheduleString].id : {id:workScheduleCache[WorkScheduleString].id}, 
      bad: false
    }
  }else{
    return{
      valid:false,
      value: WorkScheduleString, 
      bad: true
    }
  }
}
function getPropertyValue(newValue, propertyFunction){
  return eval(propertyFunction)       
}
function progressBarUpdate(currentValue,maxValue){
  if(currentValue == 0){$("#progressContainer progress").show()};
  var value = currentValue * 100 / maxValue;
  $("#progressContainer progress").attr("value",value);
  $("#progressPercentage").text(value.toFixed(2) + " % ");
}     
function serialNumberParse(rawVehicleString){
  var thisSerial, charKindTest;
  if (rawVehicleString.length < 12) {
    return {
      valid: false,
      value: thisSerial
    }
  }
  thisSerial = rawVehicleString.replace(" ", "").replace(/-/gi, "").substring(0, 12).toUpperCase();
  charKindTest = /\w{12}/.test(thisSerial);
  if (charKindTest === false) {
    return {
      valid: false,
      value: thisSerial
    }
  }
  return {
    valid: true,
    value: thisSerial
  }
}     
function getAssets(assetType,callback){
  if(assetType == "Zone"){
    api.call("Get", {
      typeName: assetType,
      name: '%'         
    }, function(result) {
      if (result !== undefined && result.length > 0) {
        for (var i = 0; i < result.length; i++) {               
          assetCache[result[i].name] = result[i];
        }
      }
      if (callback) {
        callback();
      }
    }, function(error) {
      console.log(error);
    });

  }else{
    api.call("Get", {
      typeName: assetType   
    }, function(result) {
      if (result !== undefined && result.length > 0) {
        for (var i = 0; i < result.length; i++) {
          if(assetType == "Device"){
            assetCache[result[i].serialNumber] = result[i];
          }else{
            assetCache[result[i].name] = result[i];
          }
        }
      }
      if (callback) {
        callback();
      }
    }, function(error) {
      console.log(error);
    });
  }
} 
function refreshZoneTypeCache(callback) {
          api.call("Get", {
              typeName: "ZoneType"
          }, function(result) {
              if (result !== undefined && result.length > 0) {
                  zoneTypeCache = {};
                  for (var i = 0; i < result.length; i++) {
                      // Built-in groups do not have proper names
                      if (result[i].name === undefined) {
                          zoneTypeCache[result[i].toLowerCase()] = result[i];
                      } else {
                          zoneTypeCache[result[i].name.toLowerCase()] = result[i];
                      }
                  }
              }
              if (callback) {
                  callback();
              }
          }, function(error) {
              console.log(error);
          });
      }
      function refreshGroupCache(callback) {
          api.call("Get", {
              typeName: "Group"
          }, function(result) {
              if (result !== undefined && result.length > 0) {
                  groupCache = {};
                  for (var i = 0; i < result.length; i++) {
                      // Built-in groups do not have proper names
                      if (result[i].name === undefined) {
                          groupCache[result[i].id] = {"children":[],"id": result[i].id};
                      } else {
                          groupCache[result[i].name] = {"children":[],"id": result[i].id};
                      }
                  }
              }
              if (callback) {
                  callback();
              }
          }, function(error) {
              console.log(error);
          });
      }
function refreshSecurityCache(callback) {
          api.call("Get", {
              search: {"id": "GroupSecurityId"},
    typeName: "Group"
          }, function(result) {
              if (result !== undefined && result.length > 0) {
                  securityCache = {};
                  for (var i = 0; i < result.length; i++) {
                      // Built-in groups do not have proper names
                      // Zendesk#279469 - Always store custom & built-in groups by ID (LMIT Aug 23 2016)
                      securityCache[result[i].id] = result[i];
                  }
              }
              if (callback) {
                  callback();
              }
          }, function(error) {
              console.log(error);
          });
      }     
function refreshWorkScheduleCache(callback){
  api.call("Get", {
              typeName: "WorkTime"
          }, function(result) {
              if (result !== undefined && result.length > 0) {
                  workScheduleCache = {};
                  for (var i = 0; i < result.length; i++) {
                      // Built-in groups do not have proper names
                      if (result[i] == "WorkTimeAllHoursId") {
                          workScheduleCache[result[i]] = result[i];
                      }else if (result[i].name === undefined) {
                          workScheduleCache[result[i].id] = result[i];
                      } else {
                          workScheduleCache[result[i].name] = result[i];
                      }
                  }
              }
              if (callback) {
                  callback();
              }
          }, function(error) {
              console.log(error);
          });
}
function refreshCertificateCache(callback){
  api.call("Get", {
    typeName: "Certificate"
          }, function(result) {
              if (result !== undefined && result.length > 0) {
                  certificateCache = {"id":result[0].id};                        
              }
              if (callback) {
                  return callback();
              }
          }, function(error) {
              console.log(error);
          });
}                 
function refreshTimeZoneCache(callback){
  api.call("GetTimeZones", {
          }, function(result) {
              if (result !== undefined && result.length > 0) {
                  timeZoneCache = {};
                  for (var i = 0; i < result.length; i++) {                            
                      timeZoneCache[result[i].id] = result[i];                            
                  }
              }
              if (callback) {
                  return callback();
              }
          }, function(error) {
              console.log(error);
          });
}

function refreshAssetCache(expectedAssetType,totalCount,inputtedAssets, update){
  api.call("GetCountOf", {
    typeName: expectedAssetType
  }, function(result) {
    //new route for add
    console.log('update: ', update);
    if (result !== undefined && update === "add") {
      parseActualInput(expectedAssetType, totalCount, inputtedAssets, update);
    }

    if (result !== undefined && result > 0) {
      assetCache = {};
      if (result > 10 && totalCount/result < 0.5) {
        var calls = buildGet(expectedAssetType,totalCount,inputtedAssets);
        return runCalls(calls,"get",expectedAssetType,function(){ parseActualInput(expectedAssetType,totalCount,inputtedAssets,update); });
      } else {
        return getAssets(expectedAssetType,function(){ parseActualInput(expectedAssetType,totalCount,inputtedAssets,update); });
      }
    }
  }, function(error) {
    console.log(error);
  });
}