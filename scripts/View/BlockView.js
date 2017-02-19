'use strict';

function BlockView () {
    var content = document.getElementById('content'),
        containerDiv = document.createElement('div');

    this.displayBlock = function () {
        containerDiv.setAttribute('class', 'mainDiv');
        containerDiv.innerHTML = blockTpL;

        content.appendChild(containerDiv);
    };

    this.changeBlock = function (_color) {
        var block = document.getElementById('block'),
            color = _color;

        block.removeAttribute('class');
        block.setAttribute('class', color);
    };

    return this;
}



