const form = document.querySelector("#searchForm");
const input = document.querySelector("#query");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const searchText = input.value;

  fetch("https://api.tvmaze.com/search/shows?q=" + searchText)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    });
});
