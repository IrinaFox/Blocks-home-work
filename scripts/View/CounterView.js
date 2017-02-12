function displayCounter () {
    var content = document.getElementById('content');
    content.innerHTML += counterTpl;
}

//Make alive counter and change it
function changeCounter (newElement, counterColor ) {
    var counter = (document.getElementsByClassName('counter'+counterColor))[0],
        changedCount = counter.innerHTMl = counterColor + ': ' + newElement;

    counter.innerHTML = changedCount;
}

//function-closure for counter
function makeCounter () {
    var currentCount = 1;

    return function () {
        return currentCount++;
    };
}