function displayButton () {
    var content = document.getElementById('content');
    content.innerHTML += buttonTpl2;
}

//add events to buttons
function addEventToButton () {
    var buttonRed = (document.getElementsByName('red'))[0],
        buttonBlue = (document.getElementsByName('blue'))[0],
        buttonGreen = (document.getElementsByName('green'))[0],
        counterRed = makeCounter(),
        counterBlue = makeCounter(),
        counterGreen = makeCounter();

    buttonRed.addEventListener('click', function () {
        changeBlock('Red', counterRed);
    }, false);

    buttonBlue.addEventListener('click', function () {
        changeBlock('Blue', counterBlue);
    }, false);

    buttonGreen.addEventListener('click', function () {
        changeBlock('Green', counterGreen);
    }, false);
}