'use strict';

function ButtonView () {
    var containerDiv = document.createElement('div');

    this.displayButton = function () {
        var content = document.getElementById('content'),
            miniDiv = document.createElement('div'),
            colorCounter = new Counter(),
            colors = colorCounter.toJSON(),
            stringButton = '',
            key;

        for (key in colors) {
            var button;

            stringButton = buttonTpl.replace(new RegExp(':color', 'g'), key);
            miniDiv.innerHTML = stringButton;

            containerDiv.appendChild(miniDiv);

            button = containerDiv.getElementsByTagName('input')[0];
            console.log(button);

            button.addEventListener('click', function () {
                var color = button.value;

                changeBlock(color);
            }, false);

            console.log(containerDiv);
        }


        containerDiv.setAttribute('class', 'mainDiv');

        content.appendChild(containerDiv);
    };

    this.addEvent = function () {
        var buttons = containerDiv.getElementsByTagName('input'),
            i;

        for(i = 0; i < buttons.length; i++) {
            var color = buttons[i].value;
            console.log(color);

            buttons[i].addEventListener('click', function () {
                console.log('!!!!!!!!!!');
                changeBlock(color);
            }, false);
        }
    };

    //Change the color of block
    function changeBlock (Color) {
        var block = document.getElementById('block');

        console.log(block);

        block.removeAttribute('class');
        block.setAttribute('class', 'block' + Color);
    }

    return this;
}