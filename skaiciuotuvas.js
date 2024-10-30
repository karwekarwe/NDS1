function append(number) {
    const display = document.getElementById("output");
    display.value += number;
}

function clearDisplay() {
    const display = document.getElementById("output");
    display.value = "";
}

function deleteLast() {
    let display = document.getElementById("output");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("output");
    let expression = display.value;
    
    try {
        let result = math.evaluate(expression);  
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function squareRoot() {
    let display = document.getElementById("output");

    if (!isNaN(display.value) && display.value >= 0) {
        display.value = `sqrt(${display.value})`; 
    } else {
        display.value = "Error";
    }
}

function power() {
    let display = document.getElementById("output");

    if (!isNaN(display.value)) {
        display.value += "^2";  
    } else {
        display.value = "Error";
    }
}

function calculateLog() {
    let display = document.getElementById("output");

    if (!isNaN(display.value)) {
        display.value = `log10(${display.value})`;  
    } else {
        display.value = "Error"; 
    }
}

function calculateFactorial() {
    const display = document.getElementById("output");
    display.value += "!"; 
}

function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) return NaN;
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
