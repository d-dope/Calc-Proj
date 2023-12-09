let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let btn5 = document.querySelector('.btn5');
let btn6 = document.querySelector('.btn6');
let btn7 = document.querySelector('.btn7');
let btn8 = document.querySelector('.btn8');
let btn9 = document.querySelector('.btn9');
let btn0 = document.querySelector('.btn0');
let display = document.querySelector('.display');
let operatorRed = document.querySelector('.operatorRed');
let btnPlus = document.querySelector('#btnPlus');
let btnMinus = document.querySelector('#btnMinus'); 
let btnEq = document.querySelector('.btnEq');
let btnTimes = document.querySelector('#btnTimes');
let btnDiv = document.querySelector('#btnDiv');



let savedNum = 0; 
let operator = '';

btn1.addEventListener('click', function () {
    numberClick(1);
});

btn2.addEventListener('click', function () {
    numberClick(2);
});

btn3.addEventListener('click', function () {
    numberClick(3);
});

btn4.addEventListener('click', function () {
    numberClick(4);
});

btn5.addEventListener('click', function () {
    numberClick(5);
});

btn6.addEventListener('click', function () {
    numberClick(6);
});

btn7.addEventListener('click', function () {
    numberClick(7);
});

btn8.addEventListener('click', function () {
    numberClick(8);
});
btn9.addEventListener('click', function () {
    numberClick(9);
});

btn0.addEventListener('click', function () {
    numberClick(0);
});


operatorRed.addEventListener('click', function () {
    clearDisplay();
});

btnPlus.addEventListener('click', function () {
    operatorClick('+');
});

btnMinus.addEventListener('click', function () {
    operatorClick('-');
});

btnTimes.addEventListener('click', function () {
    operatorClick('*');
});

btnDiv.addEventListener('click', function () {
    operatorClick('/');
});



btnEq.addEventListener('click', function () {
    calculateResult();
});



function numberClick(number) {
    if (display.textContent == 0) {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function clearDisplay() {
    display.textContent = 0;
    savedNum = 0;
    operator = ''; 
}

function operatorClick(selectedOperator) {
    savedNum = +display.textContent;
    display.textContent = 0;
    operator = selectedOperator; 
}

function calculateResult() {
    let result = 0;
    if (operator === '+') {
        result = savedNum + +display.textContent;
    } else if (operator === '-') {
        result = savedNum - +display.textContent;
    } else if (operator === '/') {
        result = savedNum / +display.textContent;
    } else if (operator === '*') {
        result = savedNum * +display.textContent;
    }
    
    display.textContent = result;
}



