
// random pin generate and display random pin

function randomPinInput(min, max){
        document.getElementById("display-pin").value = Math.floor(Math.random() * (max - min + 1) + min);
        notDisplay();
        
}

//  Input digit in the screen-2

function digitInput(value){
    document.getElementById("screen").value += value;
}

// remove one by one number by clicking '<'

document.getElementById("remove-digit").addEventListener('click',function(){
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0,-1);
})

// clear the screen-2 by clicking 'c'

document.getElementById("clear-screen").addEventListener('click',function(){
    document.getElementById("screen").value = " " ; 
})

// display message after clicking submit button

document.getElementById("submit").addEventListener('click',function(){
    if(document.getElementById("screen").value == document.getElementById("display-pin").value){
        document.getElementById("alertMessage2").style.display = 'block' ;
        document.getElementById("screen").value = " " ;
        document.getElementById("display-pin").value = " " ;
        
    }
    else{
        document.getElementById("alertMessage1").style.display = 'block' ;
        document.getElementById("screen").value = " " ;
         
    }
 })

 // not display the bottom message

function notDisplay(){
    document.getElementById("alertMessage1").style.display = 'none';
    document.getElementById("alertMessage2").style.display = 'none';
}

notDisplay();
