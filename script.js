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

let calculatorDisplay = output.textContent;

let x = [];
let y = [];

buttonGrid.addEventListener("click", (event) => {
    if (event.target.matches("button")) {
        const button = event.target;
        const action = button.dataset.action;

        const buttonContent = button.textContent;

        let calculatorDisplay = output.textContent;

        if (!action) {
            if (
                calculatorDisplay.includes("+") == false &&
                calculatorDisplay.includes("-") == false &&
                calculatorDisplay.includes("x") == false &&
                calculatorDisplay.includes("/") == false
            ) {
                if (buttonContent === "0" && x == "") {
                    calculatorDisplay = calculatorDisplay;
                } else {
                    if (x == "") {
                        x.push(buttonContent);
                        output.textContent = buttonContent;
                    } else {
                        x.push(buttonContent);
                        output.textContent = calculatorDisplay + buttonContent;
                    }
                }
            } else {
                if (buttonContent === "0" && y.includes("0") == false) {
                    console.log(y.includes("0"));
                    y.push(buttonContent);
                    output.textContent = calculatorDisplay + buttonContent;
                } else if (buttonContent != "0") {
                    console.log(calculatorDisplay);
                    y.push(buttonContent);
                    output.textContent = calculatorDisplay + buttonContent;
                }
            }
        }

        if (action) {
            if (action === "plus") {
                if (
                    calculatorDisplay.includes("+") === false &&
                    calculatorDisplay.includes("-") === false &&
                    calculatorDisplay.includes("/") === false &&
                    calculatorDisplay.includes("x") === false
                ) {
                    output.textContent = calculatorDisplay + "+";
                } else {
                    calculatorDisplay = calculatorDisplay;
                }
            }
        }

        if (action === "minus") {
            if (
                calculatorDisplay.includes("+") === false &&
                calculatorDisplay.includes("-") === false &&
                calculatorDisplay.includes("/") === false &&
                calculatorDisplay.includes("x") === false
            ) {
                output.textContent = calculatorDisplay + "-";
            } else {
                calculatorDisplay = calculatorDisplay;
            }
        }

        if (action === "divide") {
            if (
                calculatorDisplay.includes("+") === false &&
                calculatorDisplay.includes("-") === false &&
                calculatorDisplay.includes("/") === false &&
                calculatorDisplay.includes("x") === false
            ) {
                output.textContent = calculatorDisplay + "/";
            } else {
                calculatorDisplay = calculatorDisplay;
            }
        }
        if (action === "multiply") {
            if (
                calculatorDisplay.includes("+") === false &&
                calculatorDisplay.includes("-") === false &&
                calculatorDisplay.includes("/") === false &&
                calculatorDisplay.includes("x") === false
            ) {
                output.textContent = calculatorDisplay + "x";
            } else {
                calculatorDisplay = calculatorDisplay;
            }
        }

        if (action === "decimal") {
            if (
                calculatorDisplay.includes("+") === false &&
                calculatorDisplay.includes("-") === false &&
                calculatorDisplay.includes("/") === false &&
                calculatorDisplay.includes("x") === false
            ) {
                if (x.includes(".") === false) {
                    x.push(buttonContent);
                    output.textContent = calculatorDisplay + ".";
                } else {
                    calculatorDisplay = calculatorDisplay;
                }
            } else {
                if (y.includes(".") === false) {
                    console.log(y);
                    if (y == "") {
                        y.push("0");
                        y.push(buttonContent);
                        output.textContent = calculatorDisplay + "0.";
                    } else {
                        y.push(buttonContent);
                        output.textContent = calculatorDisplay + ".";
                    }
                } else {
                    calculatorDisplay = calculatorDisplay;
                }
            }
        }

        if (action === "clear") {
            output.textContent = "0";
            x = [];
            y = [];
        }

        if (action === "equals") {
            if (
                output.textContent.includes("+") ||
                output.textContent.includes("-") ||
                output.textContent.includes("/") ||
                output.textContent.includes("x")
            ) {
                equals();
                x = [output.textContent];
                y = [];
            }
        }
    }
});

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
