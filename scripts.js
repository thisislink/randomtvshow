//Purpose: display random tv show title
//get random number between 0 and 240. 240 is current number of pages from website api
let randomNumber = Math.floor(Math.random() * 241);
let listOfShows = [];

const apiData = () => {
  //update url below with random number
  const getPromise = fetch(`https://api.tvmaze.com/shows?page=${randomNumber}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP Status Code Error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      data.forEach(function (show) {
        //get only the names and push to the 'list of shows' array
        listOfShows.push(show.name);
      });
      //grab a random number generated from the count of list of show names
      let randomShow = Math.floor(Math.random() * listOfShows.length);
      //display the tv show to the page
      getRandomShow(listOfShows[randomShow]);
    })
    .catch((err) => {
      console.log(`Fetch API Error: ${err}`);
    });
};

//function to update the div content
function getRandomShow(show) {
  const randomShowDiv = document.getElementById("randomShow");
  randomShowDiv.innerHTML = "";
  randomShowDiv.innerHTML = show;
}
