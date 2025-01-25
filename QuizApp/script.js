const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
        answer: 0
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;
let hasSelectedOption = false;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll(".option");

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.style.backgroundColor = "#f7f7f7";
        option.disabled = false;
    });

    hasSelectedOption = false;
    document.getElementById("next").style.display = "none";
}

function selectOption(index) {
    if (hasSelectedOption) return;

    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll(".option");

    if (index === currentQuestion.answer) {
        score++;
        options[index].style.backgroundColor = "green";
    } else {
        options[index].style.backgroundColor = "red";
        options[currentQuestion.answer].style.backgroundColor = "green";
    }

    options.forEach(option => option.disabled = true);
    hasSelectedOption = true;
    document.getElementById("next").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").textContent = "Quiz Completed!";
        document.querySelector(".options").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("score").textContent = `Your score: ${score}/${questions.length}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
});