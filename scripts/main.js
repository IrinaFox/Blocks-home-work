'use strict';

window.addEventListener('load', function () {
    var buttonView = new ButtonView(),
        counter = new CounterView();

    buttonView.displayButton();
    displayBlock();
    counter.displayCounter();
    buttonView.addEvent();
}, false);