let num1;
let num2;
let operator;


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
    operator=operands[1];
    num2=Number(operands[2]);

    let solution;

    switch(operator){
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
        operator='';
        updateDisplay();
        setTimeout(()=>{
            clearDisplay();
        },5000);
    }

    solution=Number(solution.toFixed(2));

    displayValue=solution;
    operator='';
    updateDisplay();

}


let displayValue='0';
//let currentOperator='';

function appendNumber(num){
    if(displayValue==='0'){
        displayValue='';
    }

    if(num=='.'){
        if (displayValue.indexOf('.')!=-1){
            updateDisplay();
        }
        else{
            displayValue+=num;
            updateDisplay();
        }
    }
    else{
    displayValue+=num;
    updateDisplay();
    }
}

function setOperator(currentOperator){
    //currentOperator=operator;
    operator=currentOperator;
    displayValue+=" "+currentOperator+" ";
    updateDisplay();
}


function updateDisplay(){
    let displayText=document.getElementById('display');
    displayText.innerText=displayValue;
}

function clearDisplay(){
    displayValue='';
    operator=''
    updateDisplay();
}

function backspace(){
    displayValue=displayValue.slice(0,-1);
    updateDisplay();
}


const clearButton=document.querySelector('#clear');
clearButton.addEventListener('click',(event)=>{
    clearDisplay();
});


//keyboard support
document.body.addEventListener('keydown',(e)=>{
    let key=e.key;
    switch(key){
        case '1':
            appendNumber(1);
            break;
        case '2':
            appendNumber(2);
            break;
        case '3':
            appendNumber(3);
            break;
        case '4':
            appendNumber(4);
            break;
        case '5':
            appendNumber(5);
            break;
        case '6':
            appendNumber(6);
            break;
        case '7':
            appendNumber(7);
            break;
        case '8':
            appendNumber(8);
            break;
        case '9':
            appendNumber(9);
            break;
        case '0':
            appendNumber(0);
            break;
        case '+':
            setOperator('+')
            break;
        case '-':
            setOperator('-')
            break;
        case '*':
            setOperator('*')
            break;
        case '/':
            setOperator('/')
            break;
        case '=':
            operate();
            break;
        case 'Enter':
            operate();
            break;
        case 'Backspace':
            backspace();
            break;
        case '.':
            appendNumber('.');
            break;
        case 'Escape':
            clearDisplay();
            break;
    }
})
