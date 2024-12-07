function scrollDisplay(){   
    display.scrollLeft = display.scrollWidth;
}

function appendToinput(output){
    display.value += output
    scrollDisplay();
}

function clearinput(){
    display.value = "";
}
function calculateDisplay(){
    try{
        display.value = eval(display.value);
    }
    catch{
        alert("error");
    }
}

const display = document.getElementById("output");

