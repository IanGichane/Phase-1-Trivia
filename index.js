//console.log('hello')
const trivia =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean";
let response = document.querySelector("#response");

//counter for score
let score = 0;
console.log(`1 ${score}`);

//buttong choice select
let trueChoice = "True";
let falseChoice = "False";

//reload counter
setInterval(counter, 1000);

//update the score counter
function updateScore() {
  score += 1;
  document.getElementById("scoreCounter").textContent = score;
}

// scoreBoard.textContent = score;

//Display question to the Dom
//A counter to relod and bring up the next question when the counter reaches xero
function counter() {
  let count = document.querySelector("#counter");
  count.innerHTML--;
  if (count.textContent < 0) {
    count.innerHTML = 3;
    getData();
  } else {
    response.innerHTML = "";
  }
}

response.innerHTML = `<h2>Your score is ${score}</h2>`;
//handle true button
function handleTrue(result, i) {
  console.log(typeof result[i].correct_answer);
  const truth = result[i].correct_answer;
  console.log(truth);
  if (truth === trueChoice) {
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
    response.innerHTML = `<h2>That is Correct</h2>`;
    updateScore();
  } else {
    response.innerHTML = `<h2>Oh No!</h2>`;
  }
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", (e) => {
  window.location.reload();
  getData();
  score = 0;
});

//Questing  function to work with the data from the api
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
  console.log(`1 ${score}`);
}
//Fix:getQuestion function to work with the data provided
function getQuestion(result) {
  let i = Math.floor(Math.random() * 10);
  console.log(dat[i].question);
  console.log(dat[i].correct_answer);
}

//Api fetch to retrieve questions ,calls the function function to display a random function
//Fix data to display the right data when called
function getData() {
  fetch(trivia)
    .then((response) => response.json())
    .then((dt) => {
      console.log(dt);
      let result = dt.results;
      getQuestion(result);
    })

    .catch((err) => ("error", err));
}
