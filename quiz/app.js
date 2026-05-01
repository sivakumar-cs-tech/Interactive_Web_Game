// script.js
const questions = [
    //question 1
    {
        question: "Which technology is primarily responsible for the styling of web pages?",
        options: ["JavaScript", "HTML", "CSS", "Python"],
        answer: "CSS"
    },
    //question 2
    {
        question: "Which programming language is mainly used for adding interactivity to websites?",
        options: ["HTML", "CSS", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    //question 3
    {
        question: "Which Front-End framework is developed by Facebook and is used for building user interfaces?",
        options: ["Angular", "React", " jQuery", "Vue.js"],
        answer: "React"
    },
    //question 4
    {
        question: " Which JavaScript method is used to add a new element to the end of an array?",
        options: [" shift()", "push()", "unshift()", "pop()"],
        answer: "push()"
    },
    // question 5
    {
        question: "Which of the following is a popular front-end development framework maintained by Google?",
        options: ["Angular", "React", " jQuery", "Vue.js"],
        answer: "Angular"
    },
    //question 6
    {
        question: "Which of the following is a server-side scripting language commonly used for web development?",
        options: ["HTML", "CSS", "Python", "JavaScript"],
        answer: "Python"
    },
    // question 7
    {
        question: " Which JavaScript function is used to change the content of an HTML element?",
        options: ["modify()", "change()", "update()", "innerHTML()"],
        answer: "innerHTML()"
    },
    // question 8
    {
        question: "Which of the following is the correct way to comment in JavaScript?",
        options: ["// This is a comment", "<!– This is a comment –>", " \* This is a comment \*", "# This is a comment"],
        answer: "// This is a comment"
    },
    // question 9
    {
        question:"Which of the following computer language is written in binary form ?",
        options: ["C", "Java script", " Machine language", "Python"],
        answer: "Machine language"
    },
    // question 10
    {
        question: "What is the brain of a computer system called ?",
        options: ["RAM", "GPU", "ALU", "CPU"],
        answer: "CPU"
    }
];

let currentQuestionIndex = 0;
let point = 1;

const quizQuestion = document.querySelector('.quiz-question');
const quizOptions = document.querySelector('.quiz-options');
const nextButton = document.querySelector('.next-button');
const quizResult = document.querySelector('.quiz-result');

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    quizQuestion.textContent = questionData.question;
    quizOptions.innerHTML = '';
    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => handleAnswer(option));
        quizOptions.appendChild(button);
    });
    nextButton.style.display = 'none';
}

function handleAnswer(selectedOption) {
    const questionData = questions[currentQuestionIndex];
    if (selectedOption === questionData.answer) {
        point++;
    }
    nextButton.style.display = 'block';
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizQuestion.textContent = '';
    quizOptions.innerHTML = '';
    nextButton.style.display = 'none';
    quizResult.textContent = `You scored ${point} out of ${questions.length} `;
}

nextButton.addEventListener('click', showNextQuestion);

showQuestion();
