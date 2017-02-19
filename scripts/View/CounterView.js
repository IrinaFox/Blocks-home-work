'use strict';

function CounterView () {
    var content = document.getElementById('content'),
        containerDiv = document.createElement('div'),
        colorCounter = new ColorCounter(),
        colors = colorCounter.toJSON(),
        key;

    this.displayCounter = function () {
        containerDiv.setAttribute('class', 'mainDiv');
        for (key in colors) {
            containerDiv.innerHTML += key + ': ' + colors[key] + '<br>';
        }

        content.appendChild(containerDiv);
    };

    this.changeCounter = function (_color) {
        var counterDiv = document.getElementsByClassName('mainDiv')[2];

        counterDiv.innerHTML = '';
        containerDiv.innerHTML = '';

        colorCounter.increaseCounter(_color);
        colors = colorCounter.toJSON();

        for (key in colors) {
            containerDiv.innerHTML += key + ': ' + colors[key] + '<br>';
        }

        counterDiv.appendChild(containerDiv);
    };

    return this;
}