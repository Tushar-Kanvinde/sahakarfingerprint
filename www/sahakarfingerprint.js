var exec = require('cordova/exec');

exports.getFingerPrint = function (arg0, success, error) {
    exec(success, error, 'sahakarfingerprint', 'getFingerPrint', [arg0]);
};
