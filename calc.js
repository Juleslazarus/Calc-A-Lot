let operatorValue = ''; 

let screenValue = ''; 

let inputValue = ''; 

let testDiv = document.querySelector('.test'); 

let clear = document.querySelector('.clear'); 

let inputDiv = document.querySelector('.inputDiv'); 

let screen = document.querySelector('.screen'); 

let numbers = document.querySelectorAll('.number'); 

let operators = document.querySelectorAll('.operator'); 

let decimal = document.querySelector('.decimal'); 

let equals = document.querySelector('.equals'); 



numbers.forEach((number) => {
    number.addEventListener('click', () => {
        inputValue = number.innerText; 

        inputDiv.innerText += inputValue; 
    })
})

operators.forEach((op) => {
    op.addEventListener('click', () => {
        operatorValue = op.innerText; 

        screen.innerText = inputDiv.innerText + operatorValue; 

        inputDiv.innerText = ''; 
    })
})

equals.addEventListener('click', () => {
    inputValue = parseInt(inputDiv.innerText); 
    screenValue = parseInt(screen.innerText); 
    if(operatorValue === '/') {
        screen.innerText = screenValue / inputValue; 
        inputDiv.innerText = ''; 
    }
    if(operatorValue === '+') {
        screen.innerText = screenValue + inputValue; 
        inputDiv.innerText = '';
    }
    if(operatorValue === '-') {
        screen.innerText = screenValue - inputValue; 
        inputDiv.innerText = '';
    }
    if(operatorValue === '*') {
        screen.innerText = screenValue * inputValue; 
        inputDiv.innerText = '';
    }
})


clear.addEventListener('click', () => {
    inputDiv.innerText = ''; 
    screen.innerText = ''; 
})

