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
