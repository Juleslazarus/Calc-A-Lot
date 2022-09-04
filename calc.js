const numberBtn = document.querySelectorAll('.number'); 

const input = document.querySelector('.input'); 

const screen = document.querySelector('.screen'); 

const decimalBtn = document.querySelector('.decimal'); 

const operatorBtn = document.querySelectorAll('.operator'); 

const clearBtn = document.querySelector('.clear'); 


// this is for clearing the screen
function clearInput() {
    input.innerText = ''; 
    screen.innerText = ''; 
}

let inputValue; 
//this functions adds the buttons with class of '.number' to the 
//div class '.input's innerText. 
numberBtn.forEach(button => {
    button.addEventListener('click', (userInput) => {
        let inputValue = userInput.target.innerText; 
       
        input.innerText += inputValue; 

        
    })
})


//this function
operatorBtn.forEach(operation => {
    operation.addEventListener('click', (e) => {
        let operatorValue = e.target.innerText; 

        let num1 = input.innerText; 

        if (operatorValue === '/') {
            screen.innerText = num1 +operatorValue; 
            input.innerText = '';
            if(screen.innerText.includes('/') )
        }
        if (operatorValue === '+') {
            screen.innerText = num1 +operatorValue; 
            input.innerText = ''; 
        }
        if (operatorValue === '-') {
            screen.innerText = num1 +operatorValue; 
            input.innerText = ''; 
        }
        if (operatorValue === '*') {
            screen.innerText = num1 +operatorValue; 
            input.innerText = ''; 
        }
    })
})
clearBtn.addEventListener('click', clearInput); 

