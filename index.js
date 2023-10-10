//console.log('hello')
const trivia =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean";
//Display question to the Dom

function question(result) {
  let i = Math.floor(Math.random() * 10);
  console.log(i);
  console.log(result[i].question);
  let triviaQuestion = document.querySelector("#question");
  triviaQuestion.innerText = `${result[i].question} ${result[i].correct_answer}`;
  if (result[i].correct_answer === "True") {
    console.log("You are right");
  } else {
    console.log("Oh No!");
  }
}

function getData() {
  fetch(trivia)
    .then((response) => response.json())
    .then((dt) => {
      let result = dt.results;
      // let results = dt.results;
      console.log(result[1]);
      question(result);
    })

    .catch((err) => console.log("error", err));
}
getData();
