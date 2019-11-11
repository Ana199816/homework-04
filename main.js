var startBtn = document.getElementById("startButton");
var currentQuestionIndex = 0;
var setTime = document.querySelector("#seconds");


startBtn.addEventListener("click", function () {
  var hideMe = document.getElementById("startContainer")
  hideMe.style.display = "none";
  startBtn.style.display = "none";

 

  createQuestion();
});

function createQuestion() {
  var currentQuestion = questions[currentQuestionIndex]
  var currentTitle = document.getElementById("question");
  currentTitle.textContent = currentQuestion.title

  document.getElementById("answers").innerHTML = "";

  currentQuestion.choices.forEach(function (choice) {
    var btn = document.createElement("button")
    btn.setAttribute("class", "choice")
    btn.setAttribute("value", choice)
    btn.textContent = choice
    btn.onclick = buttonClick
    document.getElementById("answers").appendChild(btn)

  })

}
function getFormattedSeconds() {
  var secondsLeft = (totalSeconds - secondsElapsed) % 60;

  var formattedSeconds;

  if (secondsLeft < 10) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}
function startTimer() {
  setTime();

  interval = setInterval(function() {
    secondsElapsed++;
    renderTime();
  }, 1000);
}

function buttonClick() {
  console.log(this.value)

  if (this.value === questions[currentQuestionIndex].answer) {
    document.getElementById("correctChoice").textContent = "Correct";
  } else {
    document.getElementById("correctChoice").textContent = "Wrong";
  }

  currentQuestionIndex++
  if (questions.length === currentQuestionIndex) {
    console.log("quizOver")
   
  } else {
    createQuestion()
  }

}


		