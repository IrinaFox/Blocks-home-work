'use strict';

function Counter () {
    var counterOfColor = {
        Red: 0,
        Blue: 0,
        Green: 0
    };

    this.increaseCounter = function (color) {
        counterOfColor[color]++;
    };

    this.toJSON = function () {
        var returnedCounterOfColor = {},
            key;

        for (key in counterOfColor) {
            returnedCounterOfColor[key] = counterOfColor[key];
        }

        return returnedCounterOfColor;
    }

}