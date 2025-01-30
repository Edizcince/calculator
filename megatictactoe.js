var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");
var i5 = document.getElementById("i5");
var i6 = document.getElementById("i6");
var i7 = document.getElementById("i7");
var i8 = document.getElementById("i8");
var i9 = document.getElementById("i9");

var iframe1 = '';
var iframe2 = '';
var iframe3 = '';
var iframe4 = '';
var iframe5 = '';
var iframe6 = '';
var iframe7 = '';
var iframe8 = '';
var iframe9 = '';


window.addEventListener('message', handleMessage);

function handleMessage(event) {
    
    const { iframeId, value } = event.data;
    if (iframeId == "iframe1"){
        iframe1 = value;
    }
    else if (iframeId == "iframe2"){
        iframe2 = value;
    }
    else if (iframeId == "iframe3"){
        iframe3 = value;
    }
    else if (iframeId == "iframe4"){
        iframe4 = value;
    }
    else if (iframeId == "iframe5"){
        iframe5 = value;
    }
    else if (iframeId == "iframe6"){
        iframe6 = value;
    }
    else if (iframeId == "iframe6"){
        iframe6 = value;
    }
    else if (iframeId == "iframe7"){
        iframe7 = value;
    }
    else if (iframeId == "iframe8"){
        iframe8 = value;
    }
    else if (iframeId == "iframe9"){
        iframe9 = value;
    }
    checkEnd();
}

function end(winner){
    var body = document.getElementsByTagName("BODY")[0];
    body.innerHTML = winner;
    if(turn == "X"){ 
        body.style.color = "red";
    }
    else{
        body.style.color = "blue";
    }
    body.style.fontSize = "500px";
    body.style.textAlign = "center";
    body.style.margin = "0 auto";
}

function checkEnd(){
    if (iframe1 == "X" && iframe2 == "X" && iframe3 == "X"){
        setTimeout(end, 1000, "X"); 
     }
     else if (iframe1 == "X" && iframe5 == "X" && iframe9 == "X"){

        setTimeout(end, 1000, "X"); 
     }
     else if (iframe1 == "X" && iframe4 == "X" && iframe7 == "X"){

        setTimeout(end, 1000, "X"); 
    }
     else if (iframe4 == "X" && iframe5 == "X" && iframe6 == "X"){

        setTimeout(end, 1000, "X"); 
    }
     else if (iframe7 == "X" && iframe8 == "X" && iframe9 == "X"){

        setTimeout(end, 1000, "X"); 
     }
     else if (iframe3 == "X" && iframe6 == "X" && iframe9 == "X"){

        setTimeout(end, 1000, "X"); 
     }
     else if (iframe2 == "X" && iframe5 == "X" && iframe8 == "X"){

        setTimeout(end, 1000, "X"); 
     }
     else if (iframe3 == "X" && iframe5 == "X" && iframe7 == "X"){

        setTimeout(end, 1000, "X"); 
     }
     if (iframe1 == "O" && iframe2 == "O" && iframe3 == "O"){
 
        setTimeout(end, 1000, "O"); 
     }
     else if (iframe1 == "O" && iframe5 == "O" && iframe9 == "O"){

        setTimeout(end, 1000, "O");
     }
     else if (iframe1 == "O" && iframe4 == "O" && iframe7 == "O"){

        setTimeout(end, 1000, "O");
     }
     else if (iframe4 == "O" && iframe5 == "O" && iframe6 == "O"){

        setTimeout(end, 1000, "O");
     }
     else if (iframe7 == "O" && iframe8 == "O" && iframe9 == "O"){

        setTimeout(end, 1000, "O");
     }
     else if (iframe3 == "O" && iframe6 == "O" && iframe9 == "O"){

        setTimeout(end, 1000, "O");
     }
     else if (iframe2 == "O" && iframe5 == "O" && iframe8 == "O"){

        setTimeout(end, 1000, "O");
     }
     else if ( iframe3 == "O" && iframe5 == "O" && iframe7 == "O"){

        setTimeout(end, 1000, "O");
     }
     else if(iframe1.length > 0 && iframe2.length > 0 && iframe3.length > 0 && iframe4.length > 0 && iframe5.length > 0 && iframe6.length > 0 && iframe7.length > 0 && iframe8.length > 0 && iframe9.length > 0){

     }
}
