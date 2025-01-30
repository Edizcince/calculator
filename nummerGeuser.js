let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    let userGuess = parseInt(document.getElementById("guess").value);
    let resultMessage = document.getElementById("result");

    if (userGuess < 1 || userGuess > 10) {
        resultMessage.textContent = "Voer een getal tussen 1 en 10 in.";
        resultMessage.style.color = "red";
        return;
    }

    if (userGuess === randomNumber) {
        resultMessage.textContent = "Correct! Je hebt het juiste getal geraden!";
        resultMessage.style.color = "green";
        document.getElementById("reset").style.display = "block";
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = "Te laag! Probeer het opnieuw.";
        resultMessage.style.color = "orange";
    } else {
        resultMessage.textContent = "Te hoog! Probeer het opnieuw.";
        resultMessage.style.color = "orange";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("guess").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("reset").style.display = "none";
}
