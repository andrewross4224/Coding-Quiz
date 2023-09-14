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
    questionpicker();
});

leaderboardbutton.addEventListener("click", function () {
    quizArea.setAttribute("class", "hidden");
    questionArea.setAttribute("class", "hidden");
    timer.setAttribute("class", "hidden");
});

function countdown() {
    var timersecond = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timersecond);
            // gameover
            console.log("gameover")
        }
    }, 1000);
};

// setting variables for quiz layout
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var index = 0;
// questions array of objects (source: https://www.w3schools.com/js/default.asp)
var questions = [
    {
        questionchosen: "Inside which HTML element do we put the Javascript?",
        option1: "<script>",
        option2: "<javascript>",
        option3: "<js>",
        option4: "<scripting>",
        correctanswer: "<script>"
    },
    {
        questionchosen: "Where is the correct place to insert a JavaScript script?",
        option1: "Both the <head> section and the <body> section are correct",
        option2: "The <head> section",
        option3: "The <body> section",
        option4: "The <footer> section",
        correctanswer: "Both the <head> section and the <body> section are correct"
    },
    {
        questionchosen: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: '<script src="xxx.js">',
        option2: '<script href="xxx.js">',
        option3: '<script name="xxx.js">',
        option4: '<script="xxx.js">',
        correctanswer: '<script src="xxx.js">'
    },
]
// chooses random question then removes question from array
function questionpicker(i = Math.floor(Math.random() * questions.length)) {
    question.textContent = questions[i].questionchosen;
    option1.textContent = questions[i].option1;
    option2.textContent = questions[i].option2;
    option3.textContent = questions[i].option3;
    option4.textContent = questions[i].option4;
    index = i;
}
one = questions[index].option1
two = questions[index].option2
three = questions[index].option3
four = questions[index].option4
correct = questions[index].correctanswer

option1.addEventListener("click", function () {
    if (one === correct) {
        console.log("correct")
    } else {
        console.log("wrong")
        return;
    }
})
option2.addEventListener("click", function () {
    if (two === correct) {
        console.log("correct")
    } else {
        console.log("wrong")
        return;
    }
})
option3.addEventListener("click", function () {
    if (three === correct) {
        console.log("correct")
    } else {
        console.log("wrong")
        return;
    }
})
option4.addEventListener("click", function () {
    if (four === correct) {
        console.log("correct")
    } else {
        console.log("wrong")
        return;
    }
})
