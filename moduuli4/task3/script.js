const form = document.querySelector("#searchForm");
const input = document.querySelector("#query");
const results = document.querySelector("#results");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  results.innerHTML = "";

  fetch("https://api.tvmaze.com/search/shows?q=" + input.value)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      for (let i = 0; i < data.length; i++) {
        const article = document.createElement("article");

        article.innerHTML = `
          <h2>${data[i].show.name}</h2>
          <a href="${data[i].show.url}" target="_blank">Details</a>
          <img src="${data[i].show.image?.medium}" alt="${data[i].show.name}">
          <div>${data[i].show.summary}</div>
        `;

        results.appendChild(article);
      }
    });
});
