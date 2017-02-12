function displayBlock () {
    var content = document.getElementById('content');
    content.innerHTML += blockTpL;
}

//Change the color of block
function changeBlock (Color, counterColor) {
    var block = document.getElementById('block'),
        counter = counterColor();

    block.removeAttribute('class');
    block.setAttribute('class', 'block' + Color);

    changeCounter(counter, Color);
}