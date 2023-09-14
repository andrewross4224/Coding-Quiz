// setting button elements into variables
var startbutton = document.getElementById("start");
var leaderboardbutton = document.getElementById("leaderboard");
// setting div classes into variables
var quizArea = document.getElementById("quiz-area");
var questionArea = document.getElementById("question-area");
// timer variable
var timer = document.getElementById("timer");

startbutton.addEventListener("click", function () {
    quizArea.setAttribute("class", "hidden");
    questionArea.setAttribute("class", "shown");
});

leaderboardbutton.addEventListener("click", function () {
    quizArea.setAttribute("class", "hidden");
    questionArea.setAttribute("class", "hidden");
    timer.setAttribute("class", "hidden");
});

