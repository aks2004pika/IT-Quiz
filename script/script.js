// Animation
const startBtn = document.querySelector(".startBtn");
const preGameBg = document.querySelector(".preGameBlock");
const gameBg = document.querySelector(".mainBlock");
const scoreBg = document.querySelector(".scoreSection");
const timeBg = document.querySelector(".timeBlock");

var preGameOpenAnim = {
  animation: "preGameOpenAnim .5s ease-out 0.6s forwards",
};

var preGameCloseAnim = {
  animation: "preGameCloseAnim .5s ease-out forwards",
};

var gameOpenAnim = {
  animation: "gameBlockOpenAnim .5s ease-out 0.6s forwards",
};

var gameCloseAnim = {
  animation: "gameBlockCloseAnim .5s ease-out forwards",
};

var scoreOpenAnim = {
  animation: "scoreOpenAnim .5s ease-out 0.6s forwards",
};

var scoreCloseAnim = {
  animation: "scoreCloseAnim .5s ease-out forwards",
};

var timeBlockOpenAnim = {
  animation: "timeBlockOpenAnim .5s ease-out 0.6s forwards",
};

startBtn.onclick = () => {
  if (nextClickCount == 0) {
    setInterval(timer1, 1000);
  }
  Object.assign(preGameBg.style, preGameCloseAnim);
  Object.assign(gameBg.style, gameOpenAnim);
  Object.assign(timeBg.style, timeBlockOpenAnim);
};

var questionOutput = document.querySelector(".question");
const nextBtn = document.querySelector(".nextBtn");
const submitBtn = document.querySelector(".submitBtn");
const answer = [1, 0, 0, 1, 0];
const questions = [
  {
    question: "Q1) The meta tag is placed in the head section.",
  },
  {
    question: "Q2) The script tag can be placed only in body section.",
  },
  {
    question: "Q3) The full-form of HTML is HyperText Make-up Language.",
  },
  {
    question: "Q4) CSS is of three types.",
  },
  {
    question: "Q5) HTML is a scripting language.",
  },
];

questionOutput.innerHTML = questions[0].question;

// Question Swap
var nextClickCount = 0;
var previousClickCount = 0;

nextBtn.onclick = () => {
  if (nextClickCount < 4) {
    nextClickCount++;
    previousClickCount--;
    time = 20;
    setInterval(timer2, 1000);
    answerStore();
    Object.assign(trueBtn.style, optionNormalStyle);
    Object.assign(falseBtn.style, optionNormalStyle);
    questionSwapNext();
  }
  if (nextClickCount == 4) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
  } else {
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
  }
};

function questionSwapNext() {
  for (var i = nextClickCount; i <= nextClickCount; i++) {
    questionOutput.innerHTML = questions[i].question;
  }
}

// Scoring mechanism
var scoreOutput = document.querySelectorAll(".scoreOutput");

var optionActiveStyle = {
  border: "2px solid var(--grey-)",
  color: "rgb(31, 31, 31)",
};
var optionNormalStyle = {
  border: "2px solid var(--light-grey-)",
  color: "var(--grey-)",
};
submitBtn.onclick = () => {
  answerStore();
  var score = finalScore();
  scoreOutput[0].innerHTML = `${(score / 5) * 100}%`;
  scoreOutput[1].innerHTML = `${(score / 5) * 100}%`;
  Object.assign(gameBg.style, gameCloseAnim);
  Object.assign(scoreBg.style, scoreOpenAnim);
  answerViewer();
};
const trueBtn = document.querySelector(".true");
const falseBtn = document.querySelector(".false");
var userAnswer = [];
var answerCount = 2;

trueBtn.onclick = () => {
  Object.assign(trueBtn.style, optionActiveStyle);
  answerCount = 1;
};

falseBtn.onclick = () => {
  Object.assign(falseBtn.style, optionActiveStyle);
  answerCount = 0;
};

function answerStore() {
  userAnswer.push(answerCount);
  answerCount = 2;
}

function finalScore() {
  var finalScore = 0;

  for (var i = 0; i < answer.length; i++) {
    answer[i] == userAnswer[i] ? finalScore++ : finalScore;
  }
  return finalScore;
}

// Answers section
const answerBtn = document.querySelector(".checkBtn");
var ansQuestions = document.querySelectorAll(".ansQuestions");
var ansTrueBtn = document.querySelectorAll(".ansTrue");
var ansFalseBtn = document.querySelectorAll(".ansFalse");
var bg = document.querySelector(".bg");
var answerBg = document.querySelector(".answerSection");

answerBtn.onclick = () => {
  bg.style.display = "none";
  answerBg.style.display = "flex";
};

var correctAnswerStyle = {
  border: "2px solid green",
  background: "rgba(17, 216, 17, 0.1)",
  color: "green",
};

var wrongAnswerStyle = {
  border: "2px solid red",
  background: "rgba(255, 86, 86, 0.1)",
  color: "red",
};

for (var i = 0; i < questions.length; i++) {
  ansQuestions[i].innerHTML = questions[i].question;
}

function answerViewer() {
  for (var i = 0; i < userAnswer.length; i++) {
    if (answer[i] == userAnswer[i]) {
      if (userAnswer[i] == 0) {
        Object.assign(ansFalseBtn[i].style, correctAnswerStyle);
      } else if (userAnswer[i] == 1) {
        Object.assign(ansTrueBtn[i].style, correctAnswerStyle);
      }
    } else {
      if (userAnswer[i] == 0) {
        Object.assign(ansFalseBtn[i].style, wrongAnswerStyle);
        Object.assign(ansTrueBtn[i].style, correctAnswerStyle);
      } else if (userAnswer[i] == 1) {
        Object.assign(ansTrueBtn[i].style, wrongAnswerStyle);
        Object.assign(ansFalseBtn[i].style, correctAnswerStyle);
      }
    }
  }
}

// Timer section
var timeOutput = document.querySelector(".timeOutput");
var time = 20;

function timer1() {
  if (nextClickCount == 1) {
    return;
  }
  var seconds = time % 60;
  seconds < 10
    ? (timeOutput.innerHTML = `0${seconds}`)
    : (timeOutput.innerHTML = `${seconds}`);
  time > 0 ? time-- : (time = 0);
}

function timer2() {
  var seconds = time % 60;
  seconds < 10
    ? (timeOutput.innerHTML = `0${seconds}`)
    : (timeOutput.innerHTML = `${seconds}`);
  time > 0 ? time-- : (time = 0);
}
