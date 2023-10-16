
    function initialize(){
        num = document.getElementById("numberChoice");
        newNum = parseInt(document.getElementById("numberChoice").innerHTML);
        hint = document.getElementById("hint");
        log1 = document.getElementById("log1");
        log2 = document.getElementById("log2");
        log3 = document.getElementById("log3");
        log4 = document.getElementById("log4");
        e = document.getElementById("show");
        guessCount = 5;
        hiddenNum = Math.floor((100*Math.random())+1);
        guesses = document.getElementById("guesses");
        responseStr = "";
        count = 0;
        end = false;
    }
    function win(){
        hint.innerHTML = "You win!"
        end = true;;
    }
    function prev(number){
    a = parseInt(number, 10);
    if(a == 1){
    log1.innerHTML = "Guess: " + newNum + "  Hint: " + responseStr;
    }
    else if(a == 2){
    log2.innerHTML = "Guess: " + newNum + "  Hint: " + responseStr;
    }
    else if(a == 3){
    log3.innerHTML = "Guess: " + newNum + "  Hint: " + responseStr;
    }   
    else if(a == 4){
    log4.innerHTML = "Guess: " + newNum + "  Hint: " + responseStr;
    }
    else{
        return;
    }
    }
    function response(){
        if(end){
        return;
    }
        responseStr = "";
        if(guessCount <= 0){
            loss();
            guessCount = 0;
            return;
        }
        if(hiddenNum == newNum){
            win();
            return;
        }
        else if(Math.abs(hiddenNum - newNum) <= 5){
            responseStr = "Very Hot";
        }
        else if(Math.abs(hiddenNum - newNum) <= 8){
            responseStr = "Hot";
            guessCount -= 1;
        }
        else if(Math.abs(hiddenNum - newNum) <= 15){
            responseStr = "Very Warm";
            guessCount -= 1;
        }
        else if(Math.abs(hiddenNum - newNum) <= 20){
            responseStr = "Warm";
            guessCount -= 1;
        }
        else if(Math.abs(hiddenNum - newNum) <= 30){
            responseStr = "Cool";
            guessCount -= 1;
        }
        else if(Math.abs(hiddenNum - newNum)<= 40){
            responseStr = "Very Cool";
            guessCount -= 1;
        }
        else if(Math.abs(hiddenNum - newNum)<= 55){
            responseStr = "Cold";
            guessCount -= 1;
        }
        else {
            responseStr = "Very Cold";
            guessCount -= 1;
        }
        count++;
        prev(count);
        display();
    }
    function add(number){
        if(end){
        return;
    }
        if(guessCount <= 0){
            loss();
            guessCount = 0;
            return;
        }
        a = parseInt(number, 10);
        if(newNum + a > 100){
            newNum = 100;
        }
        else{
            newNum = a + newNum;
        }
        display();
    }
    function subtract(number){
        if(end){
        return;
    }
        if(guessCount <= 0){
            loss();
            guessCount = 0;
            return;
        }
        a = parseInt(number,10);
        if(newNum - a < 1){
            newNum = 1;
        }
        else{
            newNum = newNum - a;
        }
        display();
    }
    function loss(){
        hint.innerHTML = "You Lost";
        e.innerHTML = "The Hidden Number was: " + hiddenNum;
        end = true;
    }
    function display(){
        if(end){
        return;
    }
        num.innerHTML = newNum;
        guesses.innerHTML = "Guesses: " + guessCount;
        hint.innerHTML = "Hint: " + responseStr;
        if(guessCount <= 0){
            loss();
            guessCount = 0;
            return;
        }

    }
    function reset(){
        num.innerHTML = 50;
        guessCount = 5;
        hint.innerHTML = "Hint:";
        log1.innerHTML = "";
        log2.innerHTML = "";
        log3.innerHTML = "";
        log4.innerHTML = "";
        e.innerHTML = "";
        hiddenNum = Math.floor((100*Math.random())+1);
        newNum = parseInt(document.getElementById("numberChoice").innerHTML);
        count = 0;
        end = false;
    }
