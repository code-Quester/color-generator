const heading  = document.querySelector("h1");
const btn = document.querySelector("button");
let box = document.querySelector('#box');


const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];




btn.onclick = generateNewColor;
function generateNewColor() {
    let hexColorRep = "#";

    for (let index = 0; index < 6; index++){
        let randomPosition = Math.floor ( Math.random() * hexCharacters.length ) ;
        hexColorRep += hexCharacters[randomPosition];
    }
    heading.innerText = hexColorRep;
    box.style.backgroundColor = hexColorRep;
};



