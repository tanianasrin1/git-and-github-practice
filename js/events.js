function makeRed(){
    document.body.style.backgroundColor = 'red'
}

// system:3
const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// system:4 (anonymous function)
const  greenButton = document.getElementById('make-green');
greenButton.onclick = function () {
    document.body.style.background = 'green';
}

// system :5 (eventlistener)
const goldenButton = document.getElementById('make-golden');
goldenButton.addEventListener('click', makeGolden);

function makeGolden () {
    document.body.style.backgroundColor = 'goldenRod'
}

// system :6 (eventlistener)
const pinkButton = document.getElementById('make-pink');
 pinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink'
 })

 // system :7 (eventlistener) 
 document.getElementById('light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'black'
 })




