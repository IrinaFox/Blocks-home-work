'use strict';

function ButtonView () {
    var content = document.getElementById('content'),
        colorCounter = new ColorCounter(),
        counter = new CounterView(),
        colors = colorCounter.toJSON(),
        miniDiv = document.createElement('div'),
        stringButton = '',
        key;

    this.displayButton = function () {
        for (key in colors) {
            var button;

            stringButton = buttonTpl.replace(/:color/g, key);
            miniDiv.innerHTML += stringButton;
        }

        miniDiv.setAttribute('class', 'mainDiv');

        content.appendChild(miniDiv);
    };

    this.addEvent = function () {
        var buttons = miniDiv.getElementsByTagName('input'),
            i;

        miniDiv.addEventListener('click', function (event) {
            var target = event.target,
                color = target.value;

            if (target.tagName === 'INPUT') {
                changeBlock(color);
                counter.changeCounter(color);
            }
        }, false);

        /*for (i = 0; i < buttons.length; i++) {
            var color = buttons[i].value;

            buttons[i].addEventListener('click', (function(color){

                return function(){
                    changeBlock(color);
                }
            }(i)),false)
        } */

    };

    //Change the color of block
    function changeBlock (_color) {
        var block = document.getElementById('block'),
            color = _color;

        block.removeAttribute('class');
        block.setAttribute('class', 'block' + color);

        colorCounter.increaseCounter(color);
    }

    return this;
}