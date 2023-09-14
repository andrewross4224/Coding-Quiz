// setting button elements into variables
var startbutton = document.getElementById("start");
var leaderboardbutton = document.getElementById("leaderboard");
// setting div classes into variables
var quizArea = document.getElementById("quiz-area");
var questionArea = document.getElementById("question-area");
// timer variable
var timer = document.getElementById("timer");
var secondsLeft = 75

startbutton.addEventListener("click", function () {
    quizArea.setAttribute("class", "hidden");
    questionArea.setAttribute("class", "shown");
    timer.setAttribute("class", "shown");
    countdown();
});

leaderboardbutton.addEventListener("click", function () {
    quizArea.setAttribute("class", "hidden");
    questionArea.setAttribute("class", "hidden");
    timer.setAttribute("class", "hidden");
});

function countdown() {
    var timersecond = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Time Remaining: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timersecond);
            // gameover
            console.log("gameover")
        }
    }, 1000);
};
