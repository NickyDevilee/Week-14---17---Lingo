// Nicky Devilee | 99047338
// Bol4 applicatieontwikkelaar
// Blok 2
// Week 11-14 - Lingo

var container = document.getElementById('container');
var aantalButtons = 30;

for (i = 1; i <= aantalButtons; i++) {
    var button = document.createElement('button');
    button.setAttribute('id','button'+i);
    button.style.backgroundColor='green';
    button.innerText = i;
    container.appendChild(button);
    button.onclick = veranderKleur;
}

var kleuren = ['red', 'purple', 'blue', 'black'];

function veranderKleur() {
	var clicked = event.target;
    clicked.style.backgroundColor = kleuren[0];
    clicked.onclick = veranderKleur2;
}

function veranderKleur2() {
	var clicked = event.target;
    clicked.style.backgroundColor = kleuren[1];
    clicked.onclick = veranderKleur3;
}

function veranderKleur3() {
	var clicked = event.target;
    clicked.style.backgroundColor = kleuren[2];
    clicked.onclick = veranderKleur4;
}

function veranderKleur4() {
	var clicked = event.target;
    clicked.style.backgroundColor = kleuren[3];
    clicked.onclick = verwijder;
}

function verwijder() {
    var clicked = event.target;
    clicked.remove();
}