let turn = "X"
function end(turn){
    var body = document.getElementsByTagName("BODY")[0];
    body.innerHTML = turn + " wint";
    if(turn == "X"){
        body.style.color = "red";
    }
    else{
        body.style.color = "blue";
    }
    body.style.textAlign = "center";
    body.style.marginTop = "10vh";
    body.style.fontWeight = "bold";
    body.style.fontSize = "30vw";
}
function checkWin(){
    if (button1.textContent == "X" && button2.textContent == "X" && button3.textContent == "X"){
        button1.style.backgroundColor = "#00ff19"
        button2.style.backgroundColor = "#00ff19"
        button3.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "X"); 
     }
     else if (button1.textContent == "X" && button5.textContent == "X" && button9.textContent == "X"){
        button1.style.backgroundColor = "#00ff19"
        button5.style.backgroundColor = "#00ff19"
        button9.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "X"); 
     }
     else if (button1.textContent == "X" && button4.textContent == "X" && button7.textContent == "X"){
        button1.style.backgroundColor = "#00ff19"
        button4.style.backgroundColor = "#00ff19"
        button7.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "X"); 
    }
     else if (button4.textContent == "X" && button5.textContent == "X" && button6.textContent == "X"){
        button4.style.backgroundColor = "#00ff19"
        button5.style.backgroundColor = "#00ff19"
        button6.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "X"); 
    }
     else if (button7.textContent == "X" && button8.textContent == "X" && button9.textContent == "X"){
        button7.style.backgroundColor = "#00ff19"
        button8.style.backgroundColor = "#00ff19"
        button9.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "X"); 
     }
     else if (button3.textContent == "X" && button6.textContent == "X" && button9.textContent == "X"){
        button3.style.backgroundColor = "#00ff19"
        button6.style.backgroundColor = "#00ff19"
        button9.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "X"); 
     }
     else if (button2.textContent == "X" && button5.textContent == "X" && button8.textContent == "X"){
        button2.style.backgroundColor = "#00ff19"
        button5.style.backgroundColor = "#00ff19"
        button8.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "X"); 
     }
     else if (button3.textContent == "X" && button5.textContent == "X" && button7.textContent == "X"){
        button3.style.backgroundColor = "#00ff19"
        button5.style.backgroundColor = "#00ff19"
        button7.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "X"); 
     }
     if (button1.textContent == "O" && button2.textContent == "O" && button3.textContent == "O"){
        button1.style.backgroundColor = "#00ff19"
        button2.style.backgroundColor = "#00ff19"
        button3.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "O"); 
     }
     else if (button1.textContent == "O" && button5.textContent == "O" && button9.textContent == "O"){
        button1.style.backgroundColor = "#00ff19"
        button5.style.backgroundColor = "#00ff19"
        button9.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "O");
     }
     else if (button1.textContent == "O" && button4.textContent == "O" && button7.textContent == "O"){
        button1.style.backgroundColor = "#00ff19"
        button4.style.backgroundColor = "#00ff19"
        button7.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "O");
     }
     else if (button4.textContent == "O" && button5.textContent == "O" && button6.textContent == "O"){
        button4.style.backgroundColor = "#00ff19"
        button5.style.backgroundColor = "#00ff19"
        button6.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "O");
     }
     else if (button7.textContent == "O" && button8.textContent == "O" && button9.textContent == "O"){
        button7.style.backgroundColor = "#00ff19"
        button8.style.backgroundColor = "#00ff19"
        button9.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "O");
     }
     else if (button3.textContent == "O" && button6.textContent == "O" && button9.textContent == "O"){
        button3.style.backgroundColor = "#00ff19"
        button6.style.backgroundColor = "#00ff19"
        button9.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "O");
     }
     else if (button2.textContent == "O" && button5.textContent == "O" && button8.textContent == "O"){
        button2.style.backgroundColor = "#00ff19"
        button5.style.backgroundColor = "#00ff19"
        button8.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "O");
     }
     else if (button3.textContent == "O" && button5.textContent == "O" && button7.textContent == "O"){
        button3.style.backgroundColor = "#00ff19"
        button5.style.backgroundColor = "#00ff19"
        button7.style.backgroundColor = "#00ff19"
        setTimeout(end, 1000, "O");
     }
     else if(button1.textContent.length > 0 && button2.textContent.length > 0 && button3.textContent.length > 0 && button4.textContent.length > 0 && button5.textContent.length > 0 && button6.textContent.length > 0 && button7.textContent.length > 0 && button8.textContent.length > 0 && button9.textContent.length > 0){
        var body = document.getElementsByTagName("BODY")[0];
        body.innerHTML = "draw";
        body.style.backgroundColor = "orange";
        body.style.fontSize = "50px";
        body.style.textAlign = "center";
        body.style.marginTop = "10vh";
        body.style.fontWeight = "bold";
        body.style.fontSize = "30vw";
     }

}
function change1(){
    button1.disabled = true;
    button1.style.border = "3px solid black"
    button1.style.backgroundColor = "darkgrey"
    button1.textContent = turn;
    if (turn == "X"){
        button1.style.color = "#ff2200"        
        turn = "O"
    }
    else{
        button1.style.color = "#009cff"
        turn = "X"
    }
    checkWin()
}
function change2(){
    button2.disabled = true;
    button2.style.border = "3px solid black"
    button2.style.backgroundColor = "darkgrey"
    button2.textContent = turn;
    if (turn == "X"){
        button2.style.color = "#ff2200"        
        turn = "O"
    }
    else {
        button2.style.color = "#009cff"
        turn = "X"
    }
    checkWin()
}
function change3(){
    button3.disabled = true;
    button3.style.border = "3px solid black"
    button3.style.backgroundColor = "darkgrey"
    button3.textContent = turn;
    if (turn == "X"){
        button3.style.color = "#ff2200"        
        turn = "O"
    }
    else{
        button3.style.color = "#009cff"
        turn = "X"
    }
    checkWin()
}
function change4(){
    button4.disabled = true;
    button4.style.border = "3px solid black"
    button4.style.backgroundColor = "darkgrey"
    button4.textContent = turn;
    if (turn == "X"){
        button4.style.color = "#ff2200"        
        turn = "O"
    }
    else{
        button4.style.color = "#009cff"
        turn = "X"
    }
    checkWin()
}
function change5(){
    button5.disabled = true;
    button5.style.border = "3px solid black"
    button5.style.backgroundColor = "darkgrey"
    button5.textContent = turn;
    if (turn == "X"){
        button5.style.color = "#ff2200"        
        turn = "O"
    }
    else{
        button5.style.color = "#009cff"
        turn = "X"
    }
    checkWin()
}
function change6(){
    button6.disabled = true;
    button6.style.border = "3px solid black"
    button6.style.backgroundColor = "darkgrey"
    button6.textContent = turn;
    if (turn == "X"){
        button6.style.color = "#ff2200"        
        turn = "O"
    }
    else{
        button6.style.color = "#009cff"
        turn = "X"
    }
    checkWin()
}
function change7(){
    button7.disabled = true;
    button7.style.border = "3px solid black"
    button7.style.backgroundColor = "darkgrey"
    button7.textContent = turn;
    if (turn == "X"){
        button7.style.color = "#ff2200"        
        turn = "O"
    }
    else{
        button7.style.color = "#009cff"
        turn = "X"
    }
    checkWin()
}
function change8(){
    button8.disabled = true;
    button8.style.border = "3px solid black"
    button8.style.backgroundColor = "darkgrey"
    button8.textContent = turn;
    if (turn == "X"){
        button8.style.color = "#ff2200"        
        turn = "O"
    }
    else{
        button8.style.color = "#009cff"
        turn = "X"
    }
    checkWin()
}
function change9(){
    button9.disabled = true;
    button9.style.border = "3px solid black"
    button9.style.backgroundColor = "darkgrey"
    button9.textContent = turn;
    if (turn == "X"){
        button9.style.color = "#ff2200"        
        turn = "O"
    }
    else{
        button9.style.color = "#009cff"
        turn = "X"
    }
    checkWin()
}

let button1 = document.getElementById("b1")
let button2 = document.getElementById("b2")
let button3 = document.getElementById("b3")
let button4 = document.getElementById("b4")
let button5 = document.getElementById("b5")
let button6 = document.getElementById("b6")
let button7 = document.getElementById("b7")
let button8 = document.getElementById("b8")
let button9 = document.getElementById("b9")
