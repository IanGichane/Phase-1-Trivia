//console.log('hello')
const trivia =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean";

//counter for score
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
  setInterval(counter, 1000);
});

//update the score counter
function updateScore() {
  score++;
  let scoreBoard = document.getElementById("scoreCounter");
  scoreBoard.textContent = score;
}

//Display question to the Dom

function question(result) {
  let i = Math.floor(Math.random() * 10);
  //console.log(i);
  // console.log(result[i].question);
  let triviaQuestion = document.querySelector("#question");
  triviaQuestion.innerText = `${result[i].question} ${result[i].correct_answer}`;

  handleTrue(result, i);
  handleFalse(result, i);
}
//handle true button
function handleTrue(result, i) {
  document.querySelector("#True").addEventListener("click", () => {
    //alert('Hey')
    let clickChoice = "True";
    

    let response = document.querySelector("#response");

    if (result[i].correct_answer === clickChoice) {
      updateScore();

      console.log(score);
      // console.log(response);
      // console.log("Correct");
      response.innerHTML = `<h2>That is Correct</h2>`;
    } else {
      // console.log("Oh No!");
      response.innerHTML = `<h2>Oh No!</h2>`;
    }
  });
  //console.log(choiceTrue)
}
handleTrue();
//handle false button
function handleFalse(result, i) {
  document.querySelector("#False").addEventListener("click", () => {
    //let response = document.querySelector("#response");
    let response = document.querySelector("#response");
    let clickChoice = "False";
    console.log(result[i].correct_answer);
    console.log(clickChoice);
    if (result[i].correct_answer === clickChoice) {
      updateScore();

      console.log(score);
      // console.log(response);
      // console.log("Correct");
      response.innerHTML = `<h2>That is Correct</h2>`;
    } else {
      // console.log("Oh No!");
      response.innerHTML = `<h2>Oh No!</h2>`;
    }
  });
}

// //update the score counter
// function updateScore() {
// let scoreBoard = document.getElementById("scoreCounter");
// scoreBoard.textContent = score;

// }

//A counter to relod and bring up the next question when the counter reaches xero
function counter() {
  // console.log("Hello");
  let count = document.querySelector("#counter");
  count.innerHTML--;
  // console.log(count)
  if (count.textContent < 0) {
    count.innerHTML = 5;
    getData();
    // console.log('Condition')
    // window.location.reload();
  }
}

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
