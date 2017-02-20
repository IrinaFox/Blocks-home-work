'use strict';

function BlockView () {
    var content = document.querySelector('#content'),
        containerDiv = document.createElement('div');

    this.displayBlock = function () {
        containerDiv.classList.add('mainDiv');
        containerDiv.innerHTML = blockTpL;

        content.appendChild(containerDiv);
    };

    this.changeBlock = function (_color) {
        var block = document.querySelector('#block'),
            color = _color;

        block.removeAttribute('class');
        block.setAttribute('class', color);
    };

    return this;
}



