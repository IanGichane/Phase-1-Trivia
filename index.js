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
