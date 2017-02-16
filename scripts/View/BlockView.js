'use strict';

function displayBlock () {
    var content = document.getElementById('content'),
        containerDiv = document.createElement('div');

    containerDiv.setAttribute('class', 'mainDiv');
    containerDiv.innerHTML = blockTpL;

    content.appendChild(containerDiv);
}

