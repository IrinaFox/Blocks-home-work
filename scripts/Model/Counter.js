'use strict';

function ColorCounter () {
    var counterOfColor = {
        Red: 0,
        Blue: 0,
        Green: 0
    };

    this.increaseCounter = function (color) {
        counterOfColor[color]++;
        console.log(counterOfColor);
    };

    this.toJSON = function () {
        var returnedCounterOfColor = {},
            key;

        for (key in counterOfColor) {
            returnedCounterOfColor[key] = counterOfColor[key];
        }

        return returnedCounterOfColor;
    };

    return this;
}