document.addEventListener("DOMContentLoaded", () => {

  const questions = [
    "All set for our first trip?",
    "Are you sureeeeeeee (You better be)? 🥺",
    "Are you excitedddd? (hehehehe, evil laugh)? 🤍",
    "Do you realize you’re stuck with me now?",
    "Are you emotionally prepared for how dramatic I am? 💖",
    "Do you promise to never get tired of me?",
    "So like… you’re not allowed to leave now, right?"
  ];

  // YES responses must match question order
  const yesResponses = [
    "YAYYYYYY 😍",
    "Good. I was watching 😌",
    "AS YOU SHOULD 😈🤍",
    "Correctttttt",
    "You’ll survive. Probably 😏",
    "That’s all I wanted to hear ",
    "Too late anyway, hahhahahha "
  ];

  const noResponse = "I will kill you, huhhh";

  let currentQuestion = 0;

  // Elements
  const startButton = document.getElementById("start-button");
  const startText = document.getElementById("start-text");
  const quizDiv = document.getElementById("quiz");
  const questionElement = document.getElementById("question");
  const responseElement = document.getElementById("response");
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");

  // Start
  startButton.addEventListener("click", () => {
    startText.style.display = "none";
    startButton.style.display = "none";
    quizDiv.style.display = "block";
    showQuestion();
  });

  function showQuestion() {
    questionElement.innerText = questions[currentQuestion];
    responseElement.innerText = "";
  }

  // YES
  yesButton.addEventListener("click", () => {
    responseElement.innerText = yesResponses[currentQuestion];

    setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }, 10000); 
});

//NO

 noButton.addEventListener("click", () => {
    responseElement.innerText = noResponse;
    yesButton.disabled = true;
    noButton.disabled = true;

    // 7-second pause before allowing retry
    setTimeout(() => {
      responseElement.innerText = "";
      yesButton.disabled = false;
      noButton.disabled = false;
    }, 7000); // 7000ms = 7 seconds
  });

  function endGame() {
    questionElement.innerText = "You’re officially stuck with meeeeeeee";
    responseElement.innerText = "I love youuuuu 🥹";
    yesButton.style.display = "none";
    noButton.style.display = "none";
  }

});
