const movieListOne = require("./movieData");

// Make a map of actors to a amount they made

/**
Given an array of movie objects (found in the movieData.js file), write a function that will determine which actor made the most money from their movies. 
Each actor in a movie receives an equal percent of the box office earnings. 
For example, if BoxOffice was $100 and there were 3 actors, each actor would get $33.33.
The function should return the actor’s name and their earnings as a string.
m = #movies
a = #actors
Time: O(m*a^floor(a,m))
Space: O(a) - Each actor gets a spot in the mapping with a constant size value
*/
function actorEarning(movies) {
  const actorMapping = {};
  for (let movie of movies) {
    let boxOffice = movie.BoxOffice;
    if (boxOffice && boxOffice == "N/A") {
      continue;
    }
    boxOffice = boxOffice.replaceAll(",", "").replace("$", "");
    const actors = movie.Actors;
    for (let actor of actors) {
      const actorsMovieEarning = Math.floor(Number(boxOffice)/actors.length)
      if (Object.keys(actorMapping).includes(actor)) {
        actorMapping[actor] += actorsMovieEarning;
      } else {
        actorMapping[actor] = actorsMovieEarning;
      }
    }
  }
  let highestEarnAmount = Number.NEGATIVE_INFINITY;
  let highestEarner = "";
  for (let [actor, totalEarn] of Object.entries(actorMapping)) {
    if (totalEarn > highestEarnAmount) {
      highestEarnAmount = totalEarn;
      highestEarner = actor;
    }
  }
  return [highestEarner, "$" + highestEarnAmount.toLocaleString()];
}

// [ 'Daisy Ridley', '$415,515,036' ]
console.log(actorEarning(movieListOne));

/**
 * @question Write a function that returns a list of the movies box office values.
 * What's the space and time complexity of your implementation?
 * */
function moviesBoxOffice(selectedMovies) {
  // O(n) time where n is the number of movies
  const moviesWithBoxOffice = selectedMovies.filter(
    (movie) => movie.hasOwnProperty("BoxOffice") && movie.BoxOffice !== "N/A"
  );
  // Transform each movie object into an array of Number parsed box office earnings.
  // O(n*m) time. We do a replace on each movie's box office which is O(m), where m is the length of the longest BoxOffice string/number
  return moviesWithBoxOffice.map((movie) =>
    Number(movie.BoxOffice.replace(/[^0-9\.-]+/g, ""))
  );
}

// Should be [ 936662225, 309306177, 768946, 1 ]
console.log(moviesBoxOffice(movieListOne));
