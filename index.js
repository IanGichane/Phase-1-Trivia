// counter for score
let score = 0;


//A reset button
let reset = document.querySelector("#reset");
reset.addEventListener("click", (e) => {
  window.location.reload();
  score = 0;
});


//Next question button

  document.querySelector('#nxt-btn').addEventListener('click',()=>{
   // alert('click')
    getData()
  })


//Get a random number
function getRandomNumber(){
  let i = Math.floor(Math.random() * 10);
  return i
}
//counter/timer
function counter() {
  let count = document.querySelector("#counter");
  count.innerHTML--;
  if (count.textContent < 0) {
    count.innerHTML = 3;
   
  } else {
    response.innerHTML = "";
  }
}
setInterval(counter, 1000);


//update the score counter
function updateScore() {
  score += 1;
  document.getElementById("scoreCounter").textContent = score;
}

//Handle true button
function handleTrue(result, i) {
  //  alert('Clicked')
  let response = document.querySelector("#response");
  let answer = result[i].correct_answer;
  if (answer === "True") {
  //alert("Clicked");
    response.innerHTML = `<h2>That is Correct</h2>`;
    updateScore();
  } else {
    // console.log("Oh No!");
    response.innerHTML = `<h2>Oh No!</h2>`;
  }
}

// handle false button
function handleFalse(result, i) {
  let answer = result[i].correct_answer;
  if (answer === "False") {
    response.innerHTML = `<h2>That is Correct</h2>`;
    updateScore();
  } else {
    response.innerHTML = `<h2>Oh No!</h2>`;
  }
}
//Fix:getQuestion function to work with the data provided
function getQuestion(result) {
  let i= getRandomNumber()
  // console.log(result[i].question);
  // console.log(result[i].correct_answer);
  let randomQuestion = result[i].question;
  let answer = result[i].correct_answer;
  let triviaQuestion = document.querySelector("#question");
  triviaQuestion.innerText = `${randomQuestion} ${answer} `;
  document
    .querySelector("#True")
    .addEventListener("click", () => handleTrue(result, i));
  document
    .querySelector("#False")
    .addEventListener("click", () => handleFalse(result, i));
}

//Api fetch to retrieve questions ,calls the function function to display a random function
//Fix data to display the right data when called
function getData() {
  fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean"
  )
    .then((response) => response.json())
    .then((dt) => {
      console.log(dt);
      let result = dt.results;
      getQuestion(result);
    })

    .catch((err) => ("error", err));
}
//  getData();
