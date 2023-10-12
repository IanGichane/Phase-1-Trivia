//console.log('hello')
const trivia =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean";
let response = document.querySelector("#response");

//counter for score
let score = 0;
let trueChoice = "True";
let falseChoice ="False"

//reload counter
setInterval(counter, 1000);

//update the score counter
function updateScore() {
  score++;
  document.getElementById("scoreCounter").textContent = score;
  // scoreBoard.textContent = score;
}

//Display question to the Dom
function question(result) {
  let i = Math.floor(Math.random() * 10);
  let triviaQuestion = document.querySelector("#question");
  triviaQuestion.innerText = `${result[i].question} ${result[i].correct_answer} `;
  // console.log(`${result[i].correct_answer}`)
  document
    .querySelector("#True")
    .addEventListener("click", () => handleTrue(result, i));
  document
    .querySelector("#False")
    .addEventListener("click", () => handleFalse(result, i));
  // handleTrue(result, i);
  // handleFalse(result, i);
}
function counter() {
  let count = document.querySelector("#counter");
  count.innerHTML--;
  if (count.textContent < 0) {
    count.innerHTML = 3;
    getData();
  }
  response.innerHTML = "";
}

//handle true button
function handleTrue(result, i) {
  if (result[i].correct_answer === trueChoice) {
    response.innerHTML = `<h2>That is Correct</h2>`;
    updateScore();
  } else {
    // console.log("Oh No!");
    response.innerHTML = `<h2>Oh No!</h2>`;
  }
}

//handle false button
function handleFalse(result, i) {
  if (result[i].correct_answer === falseChoice) {
    updateScore();
    response.innerHTML = `<h2>That is Correct</h2>`;
  } else {
    response.innerHTML = `<h2>Oh No!</h2>`;
  }
}

//A counter to relod and bring up the next question when the counter reaches xero

//Api fetch to retrieve questions ,calls the function function to display a random function
function getData() {
  fetch(trivia)
    .then((response) => response.json())
    .then((dt) => {
      let result = dt.results;
      question(result);
    })

    .catch((err) => ("error", err));
}
