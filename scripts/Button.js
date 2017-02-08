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
}