//console.log('hello')
const trivia ="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean";
document.addEventListener('DOMContentLoaded',()=>{
  setInterval(counter,1000)
})

//Display question to the Dom

function question(result) {
  let i = Math.floor(Math.random() * 10);
  console.log(i);
  console.log(result[i].question);
  let triviaQuestion = document.querySelector("#question");
  triviaQuestion.innerText = `${result[i].question} ${result[i].correct_answer}`;

  refreshPage()

  document.querySelector("#True").addEventListener("click", () => {
    let response = document.querySelector("#response");
    if (result[i].correct_answer === "True") {
      // console.log(response);
      // console.log("Correct");
      response.innerHTML = `<h2>That is Correct</h2>`;
    } else {
      // console.log("Oh No!");
      response.innerHTML = `<h2>Oh No!</h2>`;
    }
  });
  document.querySelector("#False").addEventListener("click", () => {
    let response = document.querySelector("#response");
    if (result[i].correct_answer === "False") {
      // console.log("Correct");
      response.innerHTML = `<h2>That is Correct</h2>`;
    } else {
      // console.log("but its  true");
      response.innerHTML = `<h2>Oh No!</h2>`;
    }
  });
}
function counter() {  
  console.log("Hello");
  let count = document.querySelector('#counter')
  count.innerHTML--
  console.log(count)
  if(count.textContent<=0){
    console.log('Condition')
    // window.location.reload();
  }
}

function getData(limit = 2) {
  fetch(trivia)
    .then((response) => response.json())
    .then((dt) => {
      let result = dt.results;
      question(result);
    })

    .catch((err) => console.log("error", err));
}
getData();
