'use strict';

function ColorCounter () {
    var counterOfColor = {
            red: 0,
            blue: 0,
            green: 0
        };

    this.increaseCounter = function (color) {
        counterOfColor[color]++;
    };

    this.toJSON = function () {
        var JSON = {},
            key;

        for (key in counterOfColor) {
            JSON[key] = counterOfColor[key];
        }

        return JSON;
    };

    return this;
}