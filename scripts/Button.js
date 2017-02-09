//add events to buttons
function addEvents2 () {
    var content = document.getElementById('content'),
        buttonRed = (document.getElementsByName('red'))[0],
        buttonBlue = (document.getElementsByName('blue'))[0],
        buttonGreen = (document.getElementsByName('green'))[0],
        block = (document.getElementsByClassName('block'))[0],
        counterRed = makeCounter(),
        counterBlue = makeCounter(),
        counterGreen = makeCounter(),
        changedRed =':counterRed',
        changedBlue =':counterBlue',
        changedGreen =':counterGreen';


    buttonRed.addEventListener('click', function () {
        var countRed = counterRed();

        block.removeAttribute('class');
        block.setAttribute('class', 'blockRed');

        changeCounter(countRed, 'Red');

    }, false);



    buttonBlue.addEventListener('click', function () {

        var countBlue = counterBlue();

        block.removeAttribute('class');
        block.setAttribute('class', 'blockBlue');

        changeCounter(countBlue, 'Blue');

    }, false);


    buttonGreen.addEventListener('click', function () {
        console.log('WORK');
        var countGreen= counterGreen();

        block.removeAttribute('class');
        block.setAttribute('class', 'blockGreen');

        changeCounter(countGreen, 'Green');

    }, false);


}





//function-closure for counter
function makeCounter() {
    var currentCount = 1;

    return function() { // (**)
        return currentCount++;
    };
}


//Make alive counter
function changeCounter (newElement, counterColor) {
    var counter = (document.getElementsByClassName('counter'+counterColor))[0];

    var changedCount = counter.innerHTMl = counterColor + ': ' + newElement;
    counter.innerHTML = changedCount;
}






























//add events to buttons
function addEvents () {
    var content = document.getElementById('content'),
        buttonRed = (document.getElementsByName('red'))[0],
        buttonBlue = (document.getElementsByName('blue'))[0],
        buttonGreen = (document.getElementsByName('green'))[0],

        counterRed = makeCounter(),
        counterBlue = makeCounter(),
        counterGreen = makeCounter(),
        changedRed =':counterRed',
        changedBlue =':counterBlue',
        changedGreen =':counterGreen';


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


    buttonGreen.addEventListener('click', function () {
        console.log('WORK');
        var countGreen= counterGreen();
        var block = document.getElementById('block');
        block.removeAttribute('class');
        block.setAttribute('class', 'blockGreen');

        changeCounter(countGreen, 'Green');

    }, false);


}