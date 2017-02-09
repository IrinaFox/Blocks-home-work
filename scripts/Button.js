//function-closure for counter
function makeCounter() {
    var currentCount = 1;

    return function() { // (**)
        return currentCount++;
    };
}


//Make alive counter
function changeCounter (newElement, counterColor) {
    var counter = (document.getElementsByClassName('counter'+counterColor))[0],
        changedCount = counter.innerHTMl = counterColor + ': ' + newElement;

    counter.innerHTML = changedCount;
}

//add events to buttons
function addEvents () {
    var buttonRed = (document.getElementsByName('red'))[0],
        buttonBlue = (document.getElementsByName('blue'))[0],
        buttonGreen = (document.getElementsByName('green'))[0],
        counterRed = makeCounter(),
        counterBlue = makeCounter(),
        counterGreen = makeCounter();

    buttonRed.addEventListener('click', function () {
        var block = document.getElementById('block'),
            counter = counterRed();

        block.removeAttribute('class');
        block.setAttribute('class', 'blockRed');

        changeCounter(counter, 'Red');
    }, false);

    buttonBlue.addEventListener('click', function () {
        var block = document.getElementById('block'),
            counter = counterBlue();

        block.removeAttribute('class');
        block.setAttribute('class', 'blockBlue');

        changeCounter(counter, 'Blue');
    }, false);

    buttonGreen.addEventListener('click', function () {
        var block = document.getElementById('block'),
            counter = counterGreen();

        block.removeAttribute('class');
        block.setAttribute('class', 'blockGreen');

        changeCounter(counter, 'Green');
    }, false);
}
























var ira = function (button, Color, callback) {
    var countGreen = callback();
    var block = document.getElementById('block');
    block.removeAttribute('class');
    block.setAttribute('class', 'blockGreen');

    changeCounter(countGreen, 'Green');

};


//add events to buttons
function addEvents3 () {
    var buttonRed = (document.getElementsByName('red'))[0],
        buttonBlue = (document.getElementsByName('blue'))[0],
        buttonGreen = (document.getElementsByName('green'))[0],
        counterRed = makeCounter(),
        counterBlue = makeCounter(),
        counterGreen = makeCounter();

    buttonRed.addEventListener('click', function () {
        var countRed = counterRed();
        var block = document.getElementById('block');
        block.removeAttribute('class');
        block.setAttribute('class', 'blockRed');

        changeCounter(countRed, 'Red');

    }, false);



    buttonBlue.addEventListener('click', function () {

        var countBlue = counterBlue();
        var block = document.getElementById('block');
        block.removeAttribute('class');
        block.setAttribute('class', 'blockBlue');

        changeCounter(countBlue, 'Blue');

    }, false);


    buttonGreen.addEventListener('click', function()  {
        ira(buttonGreen, 'Green', counterGreen);
    }, false);

}


