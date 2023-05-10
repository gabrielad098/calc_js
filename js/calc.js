'use strict';

function calc (){
    const buttonValue = this.innerText

    const ResPlace = document.querySelector('#res')

    if(buttonValue === 'C'){
        ResPlace.value = ''
    } else if(buttonValue ==='=') {
        ResPlace.value = eval(ResPlace.value)
    } else {
        ResPlace.value +=buttonValue;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach(element => {
    element.addEventListener('click', calc)
});