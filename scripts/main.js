'use strict';
window.addEventListener('load', function () {
    var content = document.getElementById('content');

    content.innerHTML = buttonTpl;

    addEvents();
}, false);
