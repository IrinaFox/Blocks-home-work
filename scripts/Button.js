function createButton (value, callback) {
    var button = '<input type="button" class="button" value=' + value + '/>'

}

function createWindow () {
    console.log('!!!');
    var content = document.getElementById('content'),
        contentDiv = '<div class="contentDiv"> </div>' +
                     '<div class="contentDiv" class="contentBlock"> ' +
                        '<div class="block"> </div>' +
                     '</div>' +
                     '<div class="contentDiv"> </div>';

    content.innerHTML += contentDiv;

    createButtonMine('RED', 'blockRed', content);


}


function createButtonMine (value, className, changedDiv) {
    var counter = makeCounter();
    var content = document.getElementById('content');
    var button = document.createElement('input');
    button.type = 'text';
    button.value = value;



    button.addEventListener('click', function () {
        changedDiv.removeAttribute('class');
        changedDiv.removeAttribute(className);

        var count = counter();
        console.log(count);
    });
    content.appendChild(button);
}

function makeCounter() {
    var currentCount = 1;

    return function() { // (**)
        return currentCount++;
    };
}


