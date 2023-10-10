//console.log('hello')
const trivia =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean";

console.log("hello");
function getTrivia(result) {
  console.log(result);
  console.log("T");
}
console.log("hello");

function getData() {
  fetch(trivia)
    .then((response) => response.json())
    .then((dt) => {
      let result = dt.results;
      // let results = dt.results;
      console.log(result);
      result.forEach((trivaQues) => {
        getTrivia(trivaQues);
      });
    })
    // .then((data) =>
    //   data.forEach(
    //     // console.log('hello')
    //     (trivQues) => {
    //       getTrivia(trivQues);
    //     }
    //   )
    // )
    .catch((err) => console.log("error", err));
}
getData();
