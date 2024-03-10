
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        var btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        } else if (btntext == '÷') {
            btntext = '/';
        } 
        
        
        screen.value += btntext;
    });
}

function sin(){
    var inputValue = parseFloat(screen.value);
    if (!isNaN(inputValue)) {
        screen.value = `sin (${inputValue})`;
    } else {
        screen.value = 'sin';
    }
}


function calculatesin() {
    // Extract the value after 'sin ' (including the space)
    var inputValue = parseFloat(screen.value.substring(5));
    // Check if the extracted value is a valid number
    if (!isNaN(inputValue)) {
        // Calculate the sine of the extracted value
        var sinResult = Math.sin(inputValue);
        // Round the result to 12 decimal places
        sinResult = Math.round(sinResult * 100000000000) / 100000000000;
        // Update the screen value to display the sine result
        screen.value = sinResult;
    } else {
        // Display an error message if the extracted value is not a valid number
        screen.value= "Error";
        scr
    }
}
function cos(){
    var inputValue = parseFloat(screen.value);
    if (!isNaN(inputValue)) {
        screen.value = `cos (${inputValue})`;
    } else {
        screen.value = 'cos';
    }
}

function calculatecos() {
    var inputValue = parseFloat(screen.value.substring(5));
    if (!isNaN(inputValue)) {
        var cosResult = Math.cos(inputValue);
        // Round the result to the nearest value
        cosResult = Math.round(cosResult * 100000000000) / 100000000000;
        screen.value = cosResult;
    } else {
        // Display an error message or handle invalid input
        screen.value = "Error";
    }
}
function tan(){
    var inputValue = parseFloat(screen.value);
    if (!isNaN(inputValue)) {
        screen.value = `tan (${inputValue})`;
    } else {
        screen.value = 'tan';
    }
}
function calculatetan() {
    var inputValue = parseFloat(screen.value.substring(5));
    if (!isNaN(inputValue)) {
        var tanResult = Math.tan(inputValue);
        // Round the result to the nearest value
        tanResult = Math.round(tanResult * 100000000000) / 100000000000;
        screen.value = tanResult;
    } else {
        // Display an error message or handle invalid input
        screen.value = "Error";
    }
}

function log(){
    var inputValue = parseFloat(screen.value);
    if (!isNaN(inputValue)) {
        screen.value = `log ${inputValue}`;
    } else {
        screen.value = 'log';
    }
}
function calculatelog() {
    var inputValue = parseFloat(screen.value.substring(4));
    if (!isNaN(inputValue)) {
        var Log = Math.log10(inputValue);
        Log = Math.round(Log * 1000000000) / 1000000000;
        screen.value = Log;
    }
    else{
        screen.value="Error";
    }
}



function sqrt()  {
    var inputValue = parseFloat(screen.value);
    if (!isNaN(inputValue)) {
        screen.value = `√(${inputValue})`;
    } else {
        screen.value = '√( )';
    }
}

function calculateSqrt() {
    var numberMatch = screen.value.match(/\d+/);
    if (numberMatch) {
    var inputValue = parseFloat(screen.value.match(/\d+/)[0]); // Extracting the number from the input
    if (!isNaN(inputValue)) {
        var sqrtResult = Math.sqrt(inputValue);
        sqrtResult = Math.round(sqrtResult * 10000000) / 10000000;
        screen.value = sqrtResult;
    }
    else{
        screen.value= "Error";
    }
}
    else {
        screen.value = "Error";
    }
}
function pi(){
    var lastValue = parseFloat(screen.value);
    if (!isNaN(lastValue)) {
        screen.value = `${lastValue}π`;
    } else {
        screen.value = 'π';
    }
}
function calculatepi() {
    if (screen.value.includes('π')) {
        var lastValue = parseFloat(screen.value);
        if (!isNaN(lastValue)) {
            var piResult = lastValue * Math.PI;
            piResult = Math.round(piResult * 1000000000) / 1000000000;
            screen.value = piResult;
        }
    }
}


function e() {
    screen.value = 2.71828182846;
}


function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

function pow() {
    var inputValue = parseFloat(screen.value);
    if (!isNaN(inputValue)) {
        screen.value = `${inputValue}^2`;
    } else {
        screen.value = '';
    }
}

function calculatepow() {
    var inputValue = parseFloat(screen.value);
    if (!isNaN(inputValue)) {
        screen.value = Math.pow(inputValue, 2);
    } else {
        screen.value = 'Error';
    }
}

function fact() {
    var lastValue = parseFloat(screen.value);
    if (!isNaN(lastValue)) {
        screen.value = `${lastValue} !`; // Display the factorial sign after the number
    } else {
        screen.value = '!'; // Display just the factorial sign if no number is entered
    }
}
function calculateFact() {
    var num = parseInt(screen.value); // Parse the input value as an integer
    if (!isNaN(num) && num >= 0) { // Check if the input is a valid non-negative integer
        var f = 1;
        for (var i = 2; i <= num; i++) {
            f *= i; // Calculate the factorial
        }
        screen.value = f; // Display the result
    } else {
        screen.value = "Error"; // Display an error message for invalid input
    }
}
function equals() {
    if (screen.value == 'π') {
        let pi_result = Math.PI;
        pi_result = Math.round(pi_result * 100000000)/100000000;
        screen.value = pi_result;
    }
    else if (screen.value.endsWith('!')) {
        calculateFact(); // Call calculateFact() function to calculate factorial
    }
    else if (screen.value.endsWith('^2')) {
        calculatepow();
    }
    // Check if the current value in the screen starts with '√('
    else if (screen.value.startsWith('√(')) {
        // Extract the number inside the square root symbol
        calculateSqrt();
    }
    else if(screen.value.includes('π')) {
        // Extract the number before 'π'
        calculatepi();
    }
    else if(screen.value.startsWith('sin')){
        calculatesin();

    }
    else if(screen.value.startsWith('cos')){
        calculatecos();

    }
    else if(screen.value.startsWith('tan')){
        calculatetan();

    }
    else if(screen.value.startsWith('log')){
        calculatelog();

    }
    else if (screen.value.includes('%')) {
            // Split the expression by operators (+, -, *, /)
            var parts = screen.value.split(/[\+\-\*\/]/);
            // Get the last entered value
            var lastValue = parseFloat(parts.pop());
            // Get the percentage value
            var percentage = parseFloat(parts.pop());
            // Calculate the result
            var result = lastValue * (percentage / 100);
            screen.value = result;
        } 

     else {
        // Evaluate the expression in the screen using eval function
        try {
            screen.value = eval(screen.value);
        } catch (error) {
            // Display an error message if evaluation fails
            screen.value = 'Error';
        }
    }
}
