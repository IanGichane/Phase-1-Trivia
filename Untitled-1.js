//score counter
function handleScore(e){
    e.preventDefault()
    scoreObj={
      score:0
    }
    updateScore(scoreObj)
  }
//update the score counter
function updateScore(scoreObj) {
    let scoreBoard = document.getElementById("scoreCounter");
    scoreBoard.textContent = scoreObj.score;
    console.log(JSON.stringify(scoreObj ))
        fetch(trivia,{
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body:JSON.stringify({
             scoreObj
          })
    
        })
    
        .then(res=>res.json())
        .then(data=>console.log(data)
        // data = data.score
        // updateScore()
        )
    
    
    
}


function question(result) {
    let i = Math.floor(Math.random() * 10);
    //console.log(i);
    // console.log(result[i].question);
    let triviaQuestion = document.querySelector("#question");
    triviaQuestion.innerText = `${result[i].question} ${result[i].correct_answer}`;
    handleTrue(result,i)
    handleFalse(result,i)
  
}
function handleTrue(result,i){
    document.querySelector("#True").addEventListener("click", () => {
        let response = document.querySelector("#response");
      
        if (result[i].correct_answer === "True") {
          score++;
          updateScore()
          console.log(score)
          // console.log(response);
          // console.log("Correct");
          response.innerHTML = `<h2>That is Correct</h2>`;
        } else {
          // console.log("Oh No!");
          response.innerHTML = `<h2>Oh No!</h2>`;
        }
      });

}
function handleFalse(result,i){
    document.querySelector("#False").addEventListener("click", () => {
        let response = document.querySelector("#response");
      
        if (result[i].correct_answer === "False") {
          // console.log("Correct");
          score++;
          updateScore()
      
          response.innerHTML = `<h2>That is Correct</h2>`;
        } else {
          // console.log("but its  true");
          response.innerHTML = `<h2>Oh No!</h2>`;
        }
      });
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
    