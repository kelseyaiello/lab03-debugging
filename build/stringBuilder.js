"use strict";
var stringBuilder = (function () {
    function stringBuilder(input) {
        input = data;
    }
    stringBuilder.prototype.getString = function () {
        return data;
    };
    stringBuilder.prototype.setString = function (data) {
        this.data = data;
    };
    stringBuilder.prototype.reverse = function () {
        var chars = this.data.split('');
        for (var i = 1; i < chars.length; i++) {
            var cTmp = chars[i];
            chars[i] = chars[chars.length - 1];
            chars[chars.length - 1] = cTmp;
        }
        this.data = chars.join('');
    };
    return stringBuilder;
}());
//# sourceMappingURL=stringBuilder.js.map