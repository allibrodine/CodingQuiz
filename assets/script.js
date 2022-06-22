const startButton = document.querySelector("#start");
const questionContainerEl = document.querySelector("#question-container");
const questionEl = document.querySelector("#question");
const answerButtons = document.querySelector("#answers");

const questions = [

    { question: "HTML uses _____",
        answers: [
            {a: "user defined tags.", correct: false },
            {b: "fixed tags defined by the language.", correct: true },
            {c: "tags for links only.", correct: false },
            {d: "predefined tags.", correct: false }
        ]},

    { question: "If we want to set the style for just one element with CSS, which CSS selector will we use?",
        answers: [
            {a: "text", correct: false },
            {b: "class", correct: false },
            {c: "name", correct: false },
            {d: "id", correct: true }
        ]},

    { question: "Which of the following keywords is used to define a variable in JavaScript?",
        answers: [
            {a: "let", correct: false },
            {b: "var", correct: false },
            {c: "none", correct: false },
            {d: "both A and B", correct: true }
        ]},

];

startButton.addEventListener('click', startGame)

function startGame() {
    console.log("started")
};