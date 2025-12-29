const quizData = [
  {
    question: "Have you practiced sport or physical activity recently?",
    options: [
      "3 times or more per week",
      "1 or 2 times per week",
      "Less than 4 times per month",
      "I don't practice sport"
    ],
    answer: 0
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C", "Java"],
    answer: 1
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mode Language",
      "None"
    ],
    answer: 0
  },
  {
    question: "CSS is used for?",
    options: ["Logic", "Database", "Styling", "Backend"],
    answer: 2
  },
  {
    question: "JavaScript is a?",
    options: ["Markup Language", "Styling Language", "Programming Language", "Database"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;
let selected = null;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const qNumberEl = document.getElementById("q-number");

loadQuestion();

function loadQuestion() {
  selected = null;
  qNumberEl.textContent = currentQuestion + 1;
  questionEl.textContent = quizData[currentQuestion].question;

  optionsEl.forEach((opt, index) => {
    opt.textContent = quizData[currentQuestion].options[index];
    opt.classList.remove("selected");
  });
}

function selectOption(index) {
  selected = index;
  optionsEl.forEach(opt => opt.classList.remove("selected"));
  optionsEl[index].classList.add("selected");
}

function nextQuestion() {
  if (selected === null) {
    alert("Please select an option");
    return;
  }

  if (selected === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".quiz-container").innerHTML = `
    <h2>Quiz Completed 🎉</h2>
    <p>Your Score: <strong>${score}/${quizData.length}</strong></p>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}
