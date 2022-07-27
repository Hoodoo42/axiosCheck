// if request succeeds
function successFunction(response) {
  // the for loop is being directed into the data section of the response object from what was recived
  // from the request. it will loop through that data and retrieve and display the title and body onto the page.
  for (i = 0; i < response[`data`].length; i++)
    document.body.insertAdjacentHTML(
      `beforebegin`,
      `<h3>${response[`data`][i][`title`]}</h3>
       <p>${response[`data`][i][`body`]}</p>`
    );
}
// if the request fails, and error message will be displayed instead
function failureFunction(error) {
  document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error!</h3>`);
}

// starting with making the request. axios.request, then the url you are requesting, and then set up
// an if else function scenerio wether the request succeeds or fails.
axios
  .request({
    url: `https://jsonplaceholder.typicode.com/posts`,
  })
  .then(successFunction)
  .catch(failureFunction);
