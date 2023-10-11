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

  // if (result[i].correct_answer === "True") {
  //   console.log("You are right");
  // } else {
  //   console.log("Oh No!");
  // }
  document.querySelector("#True").addEventListener("click", () => {
    if (result[i].correct_answer === "True") {
      console.log("You are right");
    } else {
      console.log("Oh No!");
    }
  });
  document.querySelector("#False").addEventListener("click", () => {
    if (result[i].correct_answer === "False") {
      console.log("Oh No!");
    } else {
      console.log("but its true right");
    }
  });
}

function getData(limit = 2) {
  fetch(trivia)
    .then((response) => response.json())
    .then((dt) => {
      let result = dt.results;
      // let results = dt.results;
      //console.log(result[1]);
      question(result);
    })

    .catch((err) => console.log("error", err));
}
getData();
