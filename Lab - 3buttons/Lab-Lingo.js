// Nicky Devilee | 99047338
// Bol4 applicatieontwikkelaar
// Blok 2
// Week 11-14 - Lingo

var container = document.getElementById('container');
var body = document.getElementsByTagName('BODY')[0];

// button1 
var btn1 = document.createElement('BUTTON');
var text1 = document.createTextNode('BUTTON 1');
container.appendChild(btn1);
btn1.appendChild(text1);
btn1.classList.add('button1');
btn1.onclick = button1;

// button 2
var btn2 = document.createElement('BUTTON');
var text2 = document.createTextNode('BUTTON 2');
container.appendChild(btn2);
btn2.appendChild(text2);
btn2.classList.add('button2');
btn2.onclick = button2;

// button 3
var btn3 = document.createElement('BUTTON');
var text3 = document.createTextNode('BUTTON 3');
container.appendChild(btn3);
btn3.appendChild(text3);
btn3.classList.add('button3');
btn3.onclick = button3;

function button1 () {

    body.style.background = 'blue';
}

function button2 () {

    body.style.background = 'red';
}

function button3 () {

    body.style.background = 'green';

}