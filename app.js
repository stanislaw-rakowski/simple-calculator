const inputA = document.getElementById("input-A");
const inputB = document.getElementById("input-B");
const calculateBtn = document.getElementById("calculate-btn")
const addBtn = document.getElementById("add-btn");
const substractBtn = document.getElementById("sub-btn");
const multiplyBtn = document.getElementById("mul-btn");
const divideBtn = document.getElementById("div-btn");
const resultP = document.getElementById("result");

const ADD = "add";
const SUBSTRACT = "substract";
const MULTIPLY = "multiply";
const DIVIDE = "divide";

let currentOperation;
let result;

addBtn.addEventListener('click', () => { currentOperation = ADD; changeBtnStyle(addBtn); })
substractBtn.addEventListener('click', () => { currentOperation = SUBSTRACT; changeBtnStyle(substractBtn); })
multiplyBtn.addEventListener('click', () => { currentOperation = MULTIPLY; changeBtnStyle(multiplyBtn); })
divideBtn.addEventListener('click', () => { currentOperation = DIVIDE; changeBtnStyle(divideBtn); })

const calculateResult = (currentOperation) => {
    if (currentOperation === ADD) {
        result = parseInt(inputA.value) + parseInt(inputB.value);
    } else if (currentOperation === SUBSTRACT) {
        result = parseInt(inputA.value) - parseInt(inputB.value);
    } else if (currentOperation === MULTIPLY) {
        result = parseInt(inputA.value) * parseInt(inputB.value);
    } else {
        if (parseInt(inputB.value) != 0) {
            result = parseInt(inputA.value) / parseInt(inputB.value);
        } else {
            window.alert("You can't divide by zero!");
        }
    }
}

calculateBtn.addEventListener('click', () => {
    calculateResult(currentOperation);
    console.log(currentOperation, result);
    resultP.textContent = result;
});

const changeBtnStyle = (curBtn) => {
    curBtn.classList.toggle("click-style");
}