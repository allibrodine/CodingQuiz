const startButton = document.querySelector("#start");
const questionContainerEl = document.querySelector("#question-container");
const questionEl = document.querySelector("#question");
const answerButtons = document.querySelector("#answers");
const begin = document.querySelector("#begin");
const timeLeft = document.getElementById("time-left");

//Array of questions
const questions = [

    { question: "HTML uses _____",
        answers: [
            `a: user defined tags.`,
            `b: fixed tags defined by the language.`,
            `c: tags for links only.`,
            `d: predefined tags.`
        ],
            correctAnswer: `b: fixed tags defined by the language.` 
    },

    { question: "If we want to set the style for just one element with CSS, which CSS selector will we use?",
        answers: [
            `a: text`,
            `b: class`,
            `c: name`,
            `d: id`
        ],
            correctAnswer: `d: id`
    },

    { question: "Which of the following keywords is used to define a variable in JavaScript?",
        answers: [
            `a: let`, 
            `b: var`, 
            `c: none`,
            `d: both A and B` 
        ],
            correctAnswer: `d: both A and B` 
    },

];

let timerId;
let remainingTime = 30;
let questionIndex = 0;

//Start quiz
startButton.addEventListener('click', startGame)

function startGame() {
    console.log("started")
    //hide start screen
    //begin.classList.add('hide'); - didn't work
    //begin.setAttribute("class", "hide"); - didn't work
    begin.style.display = 'none';

    //start timer
    timerId = setInterval(tick, 1000);
    timeLeft.textContent = remainingTime;

    //display question container
    questionContainerEl.style.display = "block";
    
    //call question
    getNextQuestion();
};

function getNextQuestion() {

    //load question
    let currentQuestion = questions[questionIndex];
    questionEl.textContent = currentQuestion.question;

    //load answers
    let btn1El = document.getElementById("btn1");
    btn1El.textContent = currentQuestion.answers[0];
    let btn2El = document.getElementById("btn2");
    btn2El.textContent = currentQuestion.answers[1];
    let btn3El = document.getElementById("btn3");
    btn3El.textContent = currentQuestion.answers[2];
    let btn4El = document.getElementById("btn4");
    btn4El.textContent = currentQuestion.answers[3];

    //for loop to cycle through questions

}

//collect answers


//timer
function tick() {
    remainingTime--;
    timeLeft.textContent = remainingTime;

    if (remainingTime <= 0) {
        endQuiz();
    }
}

function endQuiz() {
    timeLeft.textContent = '';
    clearInterval(timeLeft);
}

//handle scoring

//display final score

//high scores