// option-1: directly set on the HTML element
// <button onclick="console.log(65)">Another button</button>

// option-2 : add onclick function on the html function
// important
//  <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red'
}

// option-3 
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option -3 another sometime
const purpleButton = document.getElementById('make-purple')
purpleButton.onclick= function makePurple(){
    document.body.style.backgroundColor='purple'
}

// option-4
const pinkButton = document.getElementById('make-pink');
// console.log(pinkButton);
pinkButton.addEventListener('click',makePink);
function makePink(){
    document.body.style.backgroundColor='pink'
}

// option-4 another
const greenButton = document.getElementById('make-green');
// console.log(pinkButton);
greenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green'
});

// option-04 final(use most)
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod';
})