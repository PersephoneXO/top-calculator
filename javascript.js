let num1;
let num2;
let operator=['+','-','*','/'];

//basic operation functions
function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}
//end


function operate(operator,num1,num2){
    switch(operator){
        case '+':
            add(num1,num2);
            break;
        case '-':
            subtract(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
        default:
            console.log('Invalid Operator!');
    }

}


let displayValue='0';

function appendNumber(num){
    if(displayValue==='0'){
        displayValue='';
    }
    displayValue+=num;
    updateDisplay();
}


function updateDisplay(){
    let displayText=document.getElementById('display');
    displayText.innerText=displayValue;
}

function clearDisplay(){
    displayValue='';
    updateDisplay();
}


const clearButton=document.querySelector('#clear');
clearButton.addEventListener('click',(event)=>{
    clearDisplay();
});
