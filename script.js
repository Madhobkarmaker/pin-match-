// random pin generate and display random pin
function randomPinInput(min, max){
    document.getElementById("display-pinScreen").value = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("matchMessage").style.display = "none";
    document.getElementById("misMatchMessage").style.display = "none";
    
}

//  Input digit in the inputScreen
function digitInput(value){
    document.getElementById("input-pinScreen").value += value;
}

// remove one by one number by clicking '<'
document.getElementById("remove-digit").addEventListener('click',function(){
    document.getElementById("input-pinScreen").value = document.getElementById("input-pinScreen").value.slice(0,-1);
})

// clear the screen-2 by clicking 'c'
document.getElementById("clear-screen").addEventListener('click',function(){
    document.getElementById("input-pinScreen").value = " " ; 
})

// display message after clicking submit button
function submitButton() {
    var generatePin = document.getElementById("display-pinScreen").value;
    var inputPin = document.getElementById("input-pinScreen").value;
    if (inputPin == generatePin) {
        document.getElementById("matchMessage").style.display = "block";
        document.getElementById("misMatchMessage").style.display = "none";
        document.getElementById("try-action").innerText = "Done";
        document.getElementById("display-pinScreen").value = "" ;
        document.getElementById("input-pinScreen").value = "" ;
        
    } 
    else {
        document.getElementById("matchMessage").style.display = "none";
        document.getElementById("misMatchMessage").style.display = "block";
        document.getElementById("input-pinScreen").value = "" ;
        tryLeftFunction();
    }
}

// tryLeft action 
// if submit wrong input three times then submit button will remove 

let tryCount = 0;
function tryLeftFunction() {
    var generatePin = document.getElementById("display-pinScreen").value;
    var inputPin = document.getElementById("input-pinScreen").value;
    tryCount++ ;
    if (tryCount == 1 && inputPin !== generatePin) {
        document.getElementById("try-action").innerText = "2 try left";
    }
    else if (tryCount == 2 && inputPin !== generatePin) {
        document.getElementById("try-action").innerText = "1 try left";
    }
    else if (tryCount == 3 && inputPin !== generatePin) {
        document.getElementById("try-action").style.display = "none";
        document.getElementById("submitBtn").style.display = "none";
    }
}

// hide the match & mismatch notifications
document.getElementById("matchMessage").style.display = "none"
document.getElementById("misMatchMessage").style.display = "none"