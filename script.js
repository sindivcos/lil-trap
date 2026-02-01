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

// Grab elements
const startButton = document.getElementById("start-button");
const startText = document.getElementById("start-text");
const quizDiv = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const responseElement = document.getElementById("response");
const buttons = document.querySelectorAll("#quiz button");

// Start the quiz
startButton.addEventListener("click", () => {
  startText.style.display = "none";
  startButton.style.display = "none";
  quizDiv.style.display = "block";
  showQuestion();
});

// Show the current question
function showQuestion() {
  questionElement.innerText = questions[currentQuestion];
  responseElement.innerText = "";
}

// YES button
function answerYes() {
  responseElement.innerText = getYesResponse();
  
  // Move to next question after a short delay
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }, 800); // 0.8 seconds pause so he sees the response
}

// NO button
function answerNo() {
  responseElement.innerText = "Incorrect choice 💔 Try again.";
}

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

// End screen
function endGame() {
  questionElement.innerText = "Congrats 🎉 You’re mine now 💖";
  responseElement.innerText = "I love youuuuuuu 🥹";
  buttons.forEach(button => button.style.display = "none");
}
