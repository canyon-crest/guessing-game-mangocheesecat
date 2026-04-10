// add javascript here
let playername = prompt("What is your name?");
let casedname = playername.charAt(0).toUpperCase() + playername.slice(1).toLowerCase();

let answer = 0; 
let guessCount = 0;
let totalWins = 0;
let startTime = 0;
let allTimes = [];
const scores = [];

document.getElementById("playBtn").addEventListener
("click", play);
document.getElementById("guessBtn").addEventListener("click", makeGuess);
document.getElementById("giveUpBtn").addEventListener("click", giveUp);

setInterval(function(){
    document.getElementById("date").textContent = time();
}, 1000);

function time() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date();
    let month = months[d.getMonth()];
    let day = d.getDate();
    let year = d.getFullYear();
    let suffix = "th";
    if (day % 10 == 1 && day !=11) suffix = "st";
    else if (day % 10 == 2 && day !=12) suffix = "nd";
    else if (day % 10 == 3 && day !=13) suffix = "rd";
    return month + " " + day + suffix + ", " + year + " " + d.getHours() + ":" + String(d.getMinutes()).padStart(2, "0") + ":" + String(d.getSeconds()).padStart(2, "0");
}

function play(){
    let range = 0;
    let levels = document.getElementsByName("level");
    for(let i=0; i<levels.length; i++){
        if(levels[i].checked){
            range = parseInt(levels[i].value);
        }
        levels[i].disabled = true;
    }
    document.getElementById("msg").textContent = "Guess a number 1-" +range;
    answer = Math.floor(Math.random()*range) +1;
    guessCount = 0;

    guessBtn.disabled = false;
    giveUpBtn.disabled = false;
    playBtn.disabled = true;
    
}

function makeGuess() {
    let guess = parseInt(document.getElementById("guess").value);
    let diff = Math.abs(guess - answer);
    if(isNaN(guess)) {
        msg.textContent = "Please enter a valid number.";
        return;
    }
    guessCount++;
    if (guess == answer) {
        msg.textContent = "Correct! It took " + guessCount + " tries.";
        updateScore(guessCount);
        guessBtn.disabled = true;
        giveUpBtn.disabled = true;
    }
    else if (guess < answer) {
        msg.textContent = "Too low, try again. " + getTemperature(diff);
    }
    else {
        msg.textContent = "Too high, try again. " + getTemperature(diff);
    }

}
function getTemperature(diff) {
    if (diff <= 2) {
        return "Very hot!";
    }
    else if (diff <= 5) {
        return "Warm...";
    }
    else {
        return "Cold.";
    }
}

function updateScore(score) {
    scores.push(score);
    wins.textContent = "Total wins: " + scores.length;
    let sum = 0;
    for (let i=0; i < scores.length; i++){
        sum += scores[i];
    }
    avgScore.textContent = "Average Score: " + (sum/scores.length).toFixed(1);
    scores.sort(function(a,b){return a-b});

    let lb = document.getElementsByName("leaderboard");
    for (let i = 0; i < lb.length; i++){
        if( i < scores.length) {
            lb[i].textContent = scores[i];
        }
    }
}

  function resetGame() {
    guess.textContent = "";
    guessBtn.disabled = true;
    giveUpBtn.disabled = true;
    playBtn.disabled = false;
    e.disabled = false;
    m.disabled = false;
    h.disabled = false;
}