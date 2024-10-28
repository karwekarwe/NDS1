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

function squareRoot() {
    let display = document.getElementById("output");
    display.value += "√";
    let currentValue = parseFloat(display.value);  // Convert the display value to a number

    // Check if the current value is a valid number
    if (!isNaN(currentValue)) {
        display.value = Math.sqrt(currentValue);   // Calculate and display the square root
    } else {
        display.value = "Error";  // Show an error if the input is invalid
    }
}

function calculate() {
    let display = document.getElementById("output");
    let expression = display.value;
    let result;

    try {
        result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}