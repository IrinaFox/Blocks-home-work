'use strict';

function ButtonView () {
    var content = document.getElementById('content'),
        colorCounter = new ColorCounter(),
        counter = new CounterView(),
        colors = colorCounter.toJSON(),
        miniDiv = document.createElement('div'),
        block =  new BlockView(),
        stringElement = '',
        key;

    this.displayButton = function () {
        for (key in colors) {
            var newButton = buttonTpl.replace(/:color/g, key);

            stringElement += newButton;
        }
        miniDiv.innerHTML += stringElement;

        miniDiv.setAttribute('class', 'mainDiv');
        content.appendChild(miniDiv);

        addEvent();
    };

    function addEvent () {
        var buttons = miniDiv.getElementsByTagName('input');

        [].forEach.call(buttons, function (button) {
            button.addEventListener('click', function () {
                var color = button.value;

                block.changeBlock(color);
                counter.changeCounter(color);
            }, false);
        });
    }

    return this;
}