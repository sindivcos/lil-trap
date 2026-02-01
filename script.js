const questions = [
  "Will you go on a date with me? 💕",
  "Are you sureeeeeeee (You better be)? 🥺",
  "Wanna be mine forever (hehehehe, evil laugh)? 🤍",
  "Do you realize you’re stuck with me now? ",
  "Are you emotionally prepared for how dramatic I am? 💖",
  "Do you promise to never get tired of me? ",
  "So like… you’re not allowed to leave now, right?"
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const responseElement = document.getElementById("response");
const buttons = document.querySelectorAll("button");

// Show the first question when page loads
questionElement.innerText = questions[currentQuestion];

function answerYes() {
  responseElement.innerText = getYesResponse();
  nextQuestion();
}

function answerNo() {
  responseElement.innerText = "Incorrect choice 💔 Try again.";
}

function nextQuestion() {
  setTimeout(() => {
    responseElement.innerText = "";
    currentQuestion++;

    if (currentQuestion < questions.length) {
      questionElement.innerText = questions[currentQuestion];
    } else {
      endGame();
    }
  }, 900);
}

function getYesResponse() {
  const responses = [
    "I knew it 😍",
    "As you should 💖",
    "Correct choice 💘",
    "Smart decision 😏",
    "Excellent taste 🥰"
  ];

  return responses[Math.floor(Math.random() * responses.length)];
}

function endGame() {
  questionElement.innerText = "Congrats 🎉 You’re mine now 💖";
  responseElement.innerText = "I love youuuuuuu 🥹";
  buttons.forEach(button => button.style.display = "none");
}