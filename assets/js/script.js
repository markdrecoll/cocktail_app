function getApi() {
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
    });
}
fetchButton.addEventListener('click', getApi);
