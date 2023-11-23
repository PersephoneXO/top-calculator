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


function operate(){
    let operands=displayValue.split(' ');
    num1=Number(operands[0]);
    num2=Number(operands[2]);

    let solution;

    switch(currentOperator){
        case '+':
            solution=add(num1,num2);
            break;
        case '-':
            solution=subtract(num1,num2);
            break;
        case '*':
            solution=multiply(num1,num2);
            break;
        case '/':
            solution=divide(num1,num2);
            if (isNaN(solution)||solution==Infinity){
                solution="You can't divide by 0 you silly goose";
            }
            break;
        default:
            solution='Error!';
    }

    if (isNaN(solution)){
        displayValue=solution;
        currentOperator='';
        updateDisplay();
        setTimeout(()=>{
            clearDisplay();
        },5000);
    }

    solution=Number(solution.toFixed(2));

    displayValue=solution;
    currentOperator='';
    updateDisplay();

}


let displayValue='0';
let currentOperator='';

function appendNumber(num){
    if(displayValue==='0'){
        displayValue='';
    }
    displayValue+=num;
    updateDisplay();
}

function setOperator(operator){
    currentOperator=operator;
    displayValue+=" "+operator+" ";
    updateDisplay();
}


function updateDisplay(){
    let displayText=document.getElementById('display');
    displayText.innerText=displayValue;
}

function clearDisplay(){
    displayValue='';
    currentOperator=''
    updateDisplay();
}




const clearButton=document.querySelector('#clear');
clearButton.addEventListener('click',(event)=>{
    clearDisplay();
});
