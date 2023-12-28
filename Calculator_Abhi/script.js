var screen = document.querySelector('#screen');
   
   var btn = document.querySelectorAll('.btn');

    /*============ For getting the value of btn, Here we use for loop ============*/
   
      
    for ( item of btn) {
        item.addEventListener('click', (e) => {
            btntext = e.target.innerText;

            if (btntext == '×') {
                btntext = '*';
            }

            if (btntext == '÷') {
                btntext = '/';
            }
            if (btntext == '%') {
    // Extract the last entered value before the percentage symbol
    var lastValue = screen.value.split(/[\+\-\*\/]/).pop();

    // Calculate the percentage and update the screen value
    var percentageResult = parseFloat(lastValue) / 100;
    screen.value = percentageResult;

    // Automatically multiply the result by the next input
    screen.value += '*';
    
    return; // Exit the function to prevent appending '*' to the input
}






           
            screen.value += btntext;
        });
    } 



   /* function sin() {
        screen.value = Math.sin(screen.value);
    }*/
    function sin() {
    var inputValue = parseFloat(screen.value);
    if (!isNaN(inputValue)) {
        var sinResult = Math.sin(inputValue);
        // Round the result to the nearest value
        sinResult = Math.round(sinResult * 100000000000) / 100000000000;
        screen.value = sinResult;
    } else {
        // Display an error message or handle invalid input
        screen.value = "Error";
    }
}



   /* function cos() {
        screen.value = Math.cos(screen.value);
    }*/
    function cos() {
    var inputValue = parseFloat(screen.value);
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

/*
    function tan() {
        screen.value = Math.tan(screen.value);
    }*/
    function tan(){
    var inputValue = parseFloat(screen.value);
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

/*function log()
    {
        screen.value=Math.log(screen.value);
    }*/
    function log(){
        var inputValue = parseFloat(screen.value);
        if(!isNaN(inputValue))
        {
            var Log= Math.log(inputValue);
            Log= Math.round(Log * 1000000) / 1000000;
            screen.value = Log;
        }
    }
    function pow() {
        screen.value = Math.pow(screen.value, 2);
    }
    
    /*function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }*/
    function sqrt(){
        var inputValue = parseFloat(screen.value);
        if(!isNaN(inputValue))
        {
            var sqrt= Math.sqrt(inputValue, 2);
            sqrt= Math.round(sqrt * 10000000) / 10000000;
            screen.value = sqrt;
        }
    }

    

   

   

    function pi() {
        var lastValue = parseFloat(screen.value);
        if(!isNaN(lastValue))
        {
        var piResult  =lastValue * Math.PI;
        piResult= Math.round(piResult* 1000000000) / 1000000000;
    screen.value = piResult;
  
    
    return;
        }
    }

    function e() {
        screen.value = 2.71828182846;
    }

    function fact() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        screen.value = f;
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }