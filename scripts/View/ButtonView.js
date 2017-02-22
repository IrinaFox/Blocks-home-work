'use strict';

function ButtonView () {
    var content = document.querySelector('#content'),
        miniDiv = document.createElement('div'),
        colorCounter = new ColorCounter(),
        colors = colorCounter.toJSON(),
        counter = new CounterView(),
        block =  new BlockView(),
        key;

    this.displayButton = function () {
        var stringElement = '';

        for (key in colors) {
            var newButton = buttonTpl.replace(/:color/g, key);

            stringElement += newButton;
        }

        miniDiv.innerHTML += stringElement;

        miniDiv.classList.add('mainDiv');
        content.appendChild(miniDiv);

        addEvent();
    };

    colorCounter.on('red', function () {
        block.changeBlock('red');
        counter.changeCounter('red');
    });

    colorCounter.on('blue', function () {
        block.changeBlock('blue');
        counter.changeCounter('blue');
    });

    colorCounter.on('green', function () {
        block.changeBlock('green');
        counter.changeCounter('green');
    });

    function addEvent () {
        var buttons = miniDiv.querySelectorAll('input');

        [].forEach.call(buttons, function (button) {
            button.addEventListener('click', function () {
                var color = button.value;

                colorCounter.set(color);
            }, false);
        });
    }

    return this;
}