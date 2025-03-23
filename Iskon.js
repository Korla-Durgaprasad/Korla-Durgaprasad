const questions = [
    {
        question: "What is the capital of India?",
        answers: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
        correct: 0
    },
    {
        question: "Which language is primarily used for web development?",
        answers: ["JavaScript", "Python", "Ruby", "C++"],
        correct: 0
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Styling Sheets", "Computer Style Sheets"],
        correct: 0
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question");
    const answersContainer = document.getElementById("answers");
    const feedbackContainer = document.getElementById("feedback");

    feedbackContainer.innerHTML = ""; // Clear feedback
    const question = questions[currentQuestionIndex];
    questionContainer.innerText = question.question;
    answersContainer.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

let selectedAnswer = null;

function selectAnswer(index) {
    selectedAnswer = index;
}

function submitAnswer() {
    const feedbackContainer = document.getElementById("feedback");
    if (selectedAnswer === null) {
        feedbackContainer.innerHTML = "Please select an answer!";
        return;
    }
    const question = questions[currentQuestionIndex];
    if (selectedAnswer === question.correct) {
        feedbackContainer.innerHTML = "Correct!";
    } else {
        feedbackContainer.innerHTML = "Wrong!";
    }
    selectedAnswer = null; // Reset selection
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 1000); // Load next question after feedback
    } else {
        setTimeout(showResult, 1000); // End the quiz
    }
}

function showResult() {
    const questionContainer = document.getElementById("question");
    const answersContainer = document.getElementById("answers");
    const feedbackContainer = document.getElementById("feedback");

    questionContainer.innerHTML = "Quiz Over!";
    answersContainer.innerHTML = "";
    feedbackContainer.innerHTML = `You answered ${currentQuestionIndex} questions.`;
}

loadQuestion();