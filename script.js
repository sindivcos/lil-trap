const questions = [
  "Will you go on a date with me? 💕",
  "Are you sureeeeeeee (You better beeeee)? 🥺",
  "Wanna be mine forever (hehehehe, evil laugh)? ",
  "Do you realize you’re stuck with me now?",
  "Are you emotionally prepared for how dramatic I am? 💖",
  "Do you promise to never get tired of me?",
  "So like… you’re not allowed to leave now, right?"
];

let currentQuestion = 0;

// Elements
const startButton = document.getElementById("start-button");
const startText = document.getElementById("start-text");
const quizDiv = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const responseElement = document.getElementById("response");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

// START BUTTON
startButton.addEventListener("click", () => {
  startText.style.display = "none";
  startButton.style.display = "none";
  quizDiv.style.display = "block";
  showQuestion();
});

// SHOW QUESTION
function showQuestion() {
  questionElement.innerText = questions[currentQuestion];
  responseElement.innerText = "";
}

// YES BUTTON
yesButton.addEventListener("click", () => {
  responseElement.innerText = getYesResponse();

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }, 800); // pause so response is visible
});

// NO BUTTON
noButton.addEventListener("click", () => {
  responseElement.innerText = "Incorrect choice 💔 Try again.";
});

// Random YES responses
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

// END SCREEN
function endGame() {
  questionElement.innerText = "Congrats 🎉 You’re mine now 💖";
  responseElement.innerText = "I love youuuuuuu 🥹";
  yesButton.style.display = "none";
  noButton.style.display = "none";
}
