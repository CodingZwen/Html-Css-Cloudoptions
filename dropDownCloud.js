

//parameter wird hier nicht benätigt
function addOption(el) {



    
    var closingElement = document.createElement("div");
    closingElement.className = "closingelement";
    closingElement.innerHTML = "x";


    var newElement = document.createElement("div");
    var newElementText = document.createTextNode($("#querynodesinputfield").val());


    if ($("#querynodesinputfield").val() == "") {
        alert("Bitte benennen Sie das Datenbankfeld!");
        return;
    } 

    newElement.appendChild(newElementText);
    //  newElement.innerHTML = $("#querynodesinputfield").val();
    
    newElement.className = "cloudoption";


    newElement.appendChild(closingElement);

    var element = document.getElementById("selected_Querynodes");

    element.appendChild(newElement);


    initRemovingElement();
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomText() {
    var size = getRandomInt(3, 7);

    var word = [];
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < size; i++) {
        var char = (i == 0) ? alphabet[getRandomInt(0, alphabet.length)].toUpperCase() : alphabet[getRandomInt(0, alphabet.length)];
        word.push(char);
    }

    var str = word.join("");
    return str;
}

function initRemovingElement() {

    var closingElement = document.querySelectorAll(".closingelement");

    closingElement.forEach(element => {
        element.addEventListener("click", remove);
    });

}

function remove(el) {

    el.target.parentElement.remove();

}

//not in use i think..
function getDropwDownElementsBody() {

    var code = ' <input type="submit" onclick="addOption(this)">' +
        '<div id="options">' +
        '  </div>';

    return code;
}
