//var exec = require('cordova/exec');

//exports.getFingerPrint = function (arg0, success, error) {
//    exec(success, error, 'sahakarfingerprint', 'getFingerPrint', [arg0]);
//};



//var exec = require('cordova/exec');

//var sahakarfingerprint = {
//    getFingerPrint: function(arg0) {
//        exec(null, null, "sahakarfingerprint", "getFingerPrint", [arg0]);
//    }
//};

//module.exports = sahakarfingerprint;

window.getFingerPrint=function(success,failure,text){
    cordova.exec(success,
             failure,
             "sahakarfingerprint",
             "getFingerPrint",
             [text]);    
}

