//add events to buttons
function addEvents () {
    var buttonRed = (document.getElementsByName('red'))[0],
        buttonBlue = (document.getElementsByName('blue'))[0],
        buttonGreen = (document.getElementsByName('green'))[0],
        counterRed = makeCounter(),
        counterBlue = makeCounter(),
        counterGreen = makeCounter();

    buttonRed.addEventListener('click', function () {
        eventButton('Red', counterRed);
    }, false);

    buttonBlue.addEventListener('click', function () {
        eventButton('Blue', counterBlue);
    }, false);

    buttonGreen.addEventListener('click', function () {
        eventButton('Green', counterGreen);
    }, false);
}

//Even to button
function eventButton (Color, counterColor) {
    var block = document.getElementById('block'),
        counter = counterColor();

    block.removeAttribute('class');
    block.setAttribute('class', 'block' + Color);

    changeCounter(counter, Color);
}

//function-closure for counter
function makeCounter () {
    var currentCount = 1;

    return function () {
        return currentCount++;
    };
}

//Make alive counter and change it
function changeCounter (newElement, counterColor) {
    var counter = (document.getElementsByClassName('counter'+counterColor))[0],
        changedCount = counter.innerHTMl = counterColor + ': ' + newElement;

    counter.innerHTML = changedCount;
}