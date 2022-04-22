const button0 = document.querySelector(".calculator__btn--0");
const button1 = document.querySelector(".calculator__btn--1");
const button2 = document.querySelector(".calculator__btn--2");
const button3 = document.querySelector(".calculator__btn--3");
const button4 = document.querySelector(".calculator__btn--4");
const button5 = document.querySelector(".calculator__btn--5");
const button6 = document.querySelector(".calculator__btn--6");
const button7 = document.querySelector(".calculator__btn--7");
const button8 = document.querySelector(".calculator__btn--8");
const button9 = document.querySelector(".calculator__btn--9");
const buttonPlus = document.querySelector(".calculator__btn--plus");
const buttonMinus = document.querySelector(".calculator__btn--minus");
const buttonMultiply = document.querySelector(".calculator__btn--multiply");
const buttonDivide = document.querySelector(".calculator__btn--divide");
const buttonEquals = document.querySelector(".calculator__btn--equals");
const buttonDecimal = document.querySelector(".calculator__btn--decimal");
const buttonClear = document.querySelector(".calculator__btn--clear");

const calculator = document.querySelector(".calculator");
const buttonGrid = document.querySelector(".calculator__btncontainer");
const output = document.querySelector(".calculator__output");

let x = [];
let y = [];

buttonGrid.addEventListener("click", (event) => {
    if (event.target.matches("button")) {
        const button = event.target;
        const action = button.dataset.action;
        const buttonContent = button.textContent;
        const calculatorDisplay = output.textContent;

        if (!action) {
            console.log(x);
            console.log(y);
            if (
                (output.textContent.includes("+") ||
                    output.textContent.includes("-") ||
                    output.textContent.includes("/") ||
                    output.textContent.includes("x")) === false
            ) {
                x.push(buttonContent);
            } else {
                y.push(buttonContent);
            }
        }
        if (calculatorDisplay === "0") {
            output.textContent = buttonContent;
        } else {
            output.textContent = calculatorDisplay + buttonContent;
        }

        if (action === "plus") {
            if (
                (output.textContent.includes("+") ||
                    output.textContent.includes("-") ||
                    output.textContent.includes("/") ||
                    output.textContent.includes("x")) === false
            ) {
                output.textContent = calculatorDisplay + "+";
            }
        }
        if (action === "minus") {
            if (
                (output.textContent.includes("+") ||
                    output.textContent.includes("-") ||
                    output.textContent.includes("/") ||
                    output.textContent.includes("x")) === false
            ) {
                output.textContent = calculatorDisplay + "-";
            }
        }
        if (action === "divide") {
            if (
                (output.textContent.includes("+") ||
                    output.textContent.includes("-") ||
                    output.textContent.includes("/") ||
                    output.textContent.includes("x")) === false
            ) {
                output.textContent = calculatorDisplay + "/";
            }
        }
        if (action === "multiply") {
            if (
                (output.textContent.includes("+") ||
                    output.textContent.includes("-") ||
                    output.textContent.includes("/") ||
                    output.textContent.includes("x")) === false
            ) {
                output.textContent = calculatorDisplay + "x";
            }
        }

        if (action === "decimal") {
            if (output.textContent.includes(".") === false) {
                output.textContent = calculatorDisplay + ".";
            }
        }

        if (action === "clear") {
            output.textContent = "0";
            x = [];
            y = [];
        }

        if (action === "equals") {
            if (
                (output.textContent.includes("+") ||
                    output.textContent.includes("-") ||
                    output.textContent.includes("/") ||
                    output.textContent.includes("x")) === true
            ) {
                equals();
                x = [output.textContent];
                console.log(x);
            }
        }
    }
});

const split = (operator) => {
    const [x, y] = output.textContent.split(operator);
};

const equals = () => {
    if (output.textContent.includes("+")) {
        output.textContent = plus(x, y);
    }
    if (output.textContent.includes("-")) {
        output.textContent = minus(x, y);
    }
    if (output.textContent.includes("/")) {
        output.textContent = divide(x, y);
    }
    if (output.textContent.includes("x")) {
        output.textContent = multiply(x, y);
    }
};

const multiply = (x, y) => {
    return parseFloat(x.join("")) * parseFloat(y.join(""));
};
const divide = (x, y) => {
    return parseFloat(x.join("")) / parseFloat(y.join(""));
};
const plus = (x, y) => {
    return parseFloat(x.join("")) + parseFloat(y.join(""));
};
const minus = (x, y) => {
    return parseFloat(x.join("")) - parseFloat(y.join(""));
};
