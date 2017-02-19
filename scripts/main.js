'use strict';

window.addEventListener('load', function () {
    var button = new ButtonView(),
        counter = new CounterView(),
        block = new BlockView();

    button.displayButton();
    block.displayBlock();
    counter.displayCounter();
}, false);