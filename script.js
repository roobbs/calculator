let operationDisplay = document.querySelector(".operation");
let resultDisplay = document.querySelector(".result");
let showOperator = document.querySelector(".selectedOperator");

let red = document.querySelectorAll(".red");
red.forEach(btn => {
    btn.addEventListener("mouseenter", ()=> btn.style.backgroundColor = "#ff6c6c");
    btn.addEventListener("mouseleave", ()=> btn.style.backgroundColor = "");
});
//////////
let ac = document.querySelector(".clear");
ac.addEventListener("click", ()=> resetDisplay())

function resetDisplay () {
    resultDisplay.textContent = "0";
    operationDisplay.textContent= "";
    selectedOperator="";
    showOperator.textContent="";
}

let c = document.querySelector(".erase");
c.addEventListener("click", () => resultDisplay.textContent = resultDisplay.textContent.toString().slice(0, -1));

let operatorBtn = document.querySelectorAll(".operator");
operatorBtn.forEach(btn => {
    btn.addEventListener("mouseenter", ()=> btn.style.backgroundColor = "#6c6cff");
    btn.addEventListener("mouseleave", ()=> btn.style.backgroundColor = "");
    btn.addEventListener("click", ()=> addOperator(btn.textContent));
});

let numberBtn = document.querySelectorAll(".number");
numberBtn.forEach(btn => {
    btn.addEventListener("mouseenter", ()=> btn.style.backgroundColor = "#00ccff");
    btn.addEventListener("mouseleave", ()=> btn.style.backgroundColor = "");
    btn.addEventListener("click", ()=>  addNumber(btn.textContent));
});

////////////////////////////////////////////////////////////////////
let equal = document.querySelector(".equal");
equal.addEventListener("mouseenter", ()=> equal.style.backgroundColor = "#37eb91");
equal.addEventListener("mouseleave", ()=> equal.style.backgroundColor= "");
equal.addEventListener("click",()=>getResult());

let selectedOperator;
let thereIsAnOperator = false;
////////////////////////////////////////
function addOperator (operator) {
    if(thereIsAnOperator===false) {
        thereIsAnOperator = true;
        selectedOperator = operator; 
        if(operationDisplay.textContent==="") {
            let firstNumber = resultDisplay.textContent;
            operationDisplay.textContent= resultDisplay.textContent;
            resultDisplay.textContent="0";
        } else {
            operationDisplay.textContent= operate(operationDisplay.textContent, selectedOperator, resultDisplay.textContent);
            resultDisplay.textContent= "0";
        }
        showOperator.textContent=selectedOperator;
    }
}
//
function operate (n1,operator,n2) {
    n1 = Number(n1);
    n2 = Number(n2);
    switch (operator) {
        case "+":
            return n1 + n2;
            break;
        case "-":
            return n1 - n2;
            break;
        case "/":
            return n1/n2;
            break;
        case "x":
            return n1*n2;
            break;
        case "%":
            break;
    }

}
function clearDisplay () {
    resultDisplay.textContent = "";
}

function addNumber (number) {
    if (resultDisplay.textContent==="0") {
        clearDisplay()
    }
    resultDisplay.textContent += number;
    thereIsAnOperator=false;
}

function getResult () {
    if(selectedOperator !== "") {
        resultDisplay.textContent= operate(operationDisplay.textContent, selectedOperator, resultDisplay.textContent);
        operationDisplay.textContent= "";
        showOperator.textContent="";
    } else {
        console.log("la variable esta vacia");
    }
}