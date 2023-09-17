// ----------------------------------------------GLOBAL VARIABLES----------------------------------------------
// setting button elements into variables
var startButtonClick = document.getElementById("start");
var startOver = document.getElementById("startover");
var leaderboardButton = document.getElementById("leaderboard");
var initialsButton = document.getElementById("initial-submit");
var clearLeaderboard = document.getElementById("clear-leaderboard");
// setting div classes into variables
var quizArea = document.getElementById("quiz-area");
var questionArea = document.getElementById("question-area");
var leaderBoardArea = document.getElementById("leaderboard-area");
var finished = document.getElementById("gameover");
// timer variable
var timer = document.getElementById("timer");
var secondsLeft = 75;
// user score and leaderboard
var userScore = document.getElementById("score");
var userInitials;
var userObject;
var score = 0;
var userLeaderboard = [];
var leaderList = document.getElementById("leaderlist")
// setting variables for quiz layout
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var one;
var two;
var three;
var four;
var correct;
// warning label
var warning = document.getElementById("warning")
// right or wrong
var answerValue = document.getElementById("answer-value");
// declaring index
var index = 0;
// questions array of objects (source: https://www.w3schools.com/js/default.asp)
var questions = [
    {
        questionchosen: "Inside which HTML element do we put the Javascript?",
        option1: "<javascript>",
        option2: "<js>",
        option3: "<script>",
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
        option1: '<script href="xxx.js">',
        option2: '<script src="xxx.js">',
        option3: '<script name="xxx.js">',
        option4: '<script="xxx.js">',
        correctanswer: '<script src="xxx.js">'
    },
    {
        questionchosen: 'How do you write "Hello World" in an alert box?',
        option1: 'alertBox("Hello World");',
        option2: 'msgBox("Hello World");',
        option3: 'msg("Hello World");',
        option4: 'alert("Hello World");',
        correctanswer: 'alert("Hello World");'
    },
    {
        questionchosen: "How do you create a function in JavaScript",
        option1: "function = myFunction()",
        option2: "function myFunction()",
        option3: "function:myFunction()",
        option4: "function == myFunction()",
        correctanswer: "function myFunction()"
    },
    {
        questionchosen: 'How do you call a function named "myFunction"',
        option1: "myFunction()",
        option2: "call function myFunction()",
        option3: "call myFunction()",
        option4: "execute myFunction()",
        correctanswer: "myFunction()"
    },
    {
        questionchosen: "What is the correct syntax for a if statement in JavaScript",
        option1: "if i = 5",
        option2: "if i = 5 then",
        option3: "if (i == 5)",
        option4: "if i == 5 then",
        correctanswer: "if (i == 5)"
    },
    {
        questionchosen: "What is the correct syntax for a while loop in JavaScript",
        option1: "while (i = 0; i <= 10; i++)",
        option2: "while i = 1 to 10",
        option3: "while (i <= 10; i++)",
        option4: "while (i <= 10)",
        correctanswer: "while (i <= 10)"
    },
    {
        questionchosen: "What is the correct way to write a JavaScript array?",
        option1: 'var colors = "red", "green", "blue"',
        option2: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        option3: 'var colors = (1:"red", 2:"green", 3:"blue")',
        option4: 'var colors = ["red", "green", "blue"]',
        correctanswer: 'var colors = ["red", "green", "blue"]'
    },
    {
        questionchosen: "Which event occurs when the user clicks on an HTML element?",
        option1: "onmouseover",
        option2: "onclick",
        option3: "onchange",
        option4: "onmouseclick",
        correctanswer: "onclick"
    },
]
// ---------------------------------------------------FUNCTIONS-----------------------------------------------------
// timer code
function countdown() {
    var timersecond = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timersecond);
            timer.textContent = "GAMEOVER!"
            gameOver();
        }
    }, 1000);
};
// chooses random question then removes question from array
function questionpicker(i = Math.floor(Math.random() * questions.length)) {
    if (questions.length > 0) {
        question.textContent = questions[i].questionchosen;
        correct = questions[i].correctanswer
        one = questions[i].option1;
        two = questions[i].option2;
        three = questions[i].option3;
        four = questions[i].option4;
        option1.textContent = one
        option2.textContent = two
        option3.textContent = three
        option4.textContent = four
        index = i
    } else {
        secondsLeft = 0;
    }
};
// storing user score and initials into leaderboard
function storeInitials(event) {
    event.preventDefault();
    userInitials = document.getElementById("Initials").value;
    if (userInitials === "") {
        warning.textContent = "Initials cannot be blank!"
        warning.style = "color: rgb(136, 0, 0);"
    } else {
        warning.style = "color: white";
        warning.textContent = "Score submited click leaderboard to see scores!";
        userObject = "Name: " + String(userInitials).toUpperCase() + " Score: " + score;
        userLeaderboard.push(userObject);
        initialsButton.setAttribute("class", "hidden");
        storeLeaderboard();
        renderLeaderboard();
    };
};
// init leaderboard
function init() {
    var currentLeaderboard = JSON.parse(localStorage.getItem("leaderboard"));

    if (currentLeaderboard !== null) {
        userLeaderboard = currentLeaderboard;
    }
    renderLeaderboard();
};
// putting user input into local storage
function storeLeaderboard() {
    localStorage.setItem("leaderboard", JSON.stringify(userLeaderboard));
};
// rendering leaderboard from local storage
function renderLeaderboard() {
    leaderList.innerHTML = "";
    for (var i = 0; i < userLeaderboard.length; i++) {
        var leader = userLeaderboard[i];
        var li = document.createElement("li");
        li.textContent = leader;
        li.setAttribute("user-index", i);
        leaderList.appendChild(li)
    };
};
// if answer is correct
function rightAnswer() {
    score++
    answerValue.textContent = "Correct!";
    questions.splice(index, 1);
    questionpicker();
};
// if answer is wrong
function wrongAnswer() {
    score--
    answerValue.textContent = "Incorrect";
    secondsLeft = secondsLeft - 10;
    questions.splice(index, 1);
    questionpicker();
};
// When questions or seconds run out
function startButton() {
    quizArea.setAttribute("class", "hidden");
    questionArea.setAttribute("class", "shown");
    timer.setAttribute("class", "shown");
    startOver.setAttribute("class", "shown");
    startOver.style = "display: inline";
    countdown();
    questionpicker();
};
function gameOver() {
    quizArea.setAttribute("class", "hidden");
    questionArea.setAttribute("class", "hidden");
    timer.setAttribute("class", "hidden");
    finished.setAttribute("class", "shown");
    userScore.textContent = "Your score is " + score + "!";
};
// display leaderboard
function leaderboard() {
    quizArea.setAttribute("class", "hidden");
    questionArea.setAttribute("class", "hidden");
    timer.setAttribute("class", "hidden");
    finished.setAttribute("class", "hidden");
    leaderBoardArea.setAttribute("class", "shown");
    startOver.setAttribute("class", "shown");
    startOver.style = "display: inline";
};
// clear leaderboard
function leaderboardClear() {
    userLeaderboard = [];
    storeLeaderboard();
    renderLeaderboard();
}

// ------------------------------------------------EVENT-LISTENERS-----------------------------------------------
// event listener for start button
startButtonClick.addEventListener("click", startButton);
// event listener for leaderboard button
leaderboardButton.addEventListener("click", leaderboard);
// Initials submit button
initialsButton.addEventListener("click", storeInitials);
// clear leaderboard button
clearLeaderboard.addEventListener("click", leaderboardClear);
// event listeners for question options
option1.addEventListener("click", function () {
    if (one === correct) {
        rightAnswer();
    } else {
        wrongAnswer();
    }
});
option2.addEventListener("click", function () {
    if (two === correct) {
        rightAnswer();
    } else {
        wrongAnswer();
    }
});
option3.addEventListener("click", function () {
    if (three === correct) {
        rightAnswer();
    } else {
        wrongAnswer();
    }
});
option4.addEventListener("click", function () {
    if (four === correct) {
        rightAnswer();
    } else {
        wrongAnswer();
    }
});

init();