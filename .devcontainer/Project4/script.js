const rand = Math.round(Math.random()*100)+1;
const btn = document.querySelector('#btn');
const noGuess = document.querySelector('#guesses');
const remain = document.getElementById('remain');
const result = document.querySelector('#result');
let countGuess = 1;

btn.addEventListener('click', (e) => {
    let guess = parseInt(document.querySelector('input').value);
    noGuess.innerHTML = countGuess;
    remain.innerHTML = 10-countGuess;
    countGuess++;
    if(guess === rand){
        result.innerHTML = 'Yeah!!! You won. Celebrate with your friends.'
    }
    else if(guess > rand) {
        result.innerHTML = 'Please enter the smaller number.'
    }
    else if(guess < rand) {
        result.innerHTML = 'Please enter the greater number.'
    }
    if(countGuess > 10) {
        alert("You lose the game. please refresh the page.")
    }
})