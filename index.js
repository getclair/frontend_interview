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
  const actorMap = {};
  let max = -Infinity;
  let highestEarner = "";

  for (let movie of movies) {
    const { BoxOffice, Actors } = movie || {};
    if (!BoxOffice || BoxOffice == "N/A") continue;
    const len = movie?.Actors?.length;
    const earnings = parseInt(BoxOffice.replaceAll(",", "").replace("$", ""));
    const earningsPerActor = earnings && len ? earnings / len : 0;

    for (let i = 0; i < len; i++) {
      const actor = Actors[i];
      if (actorMap[actor]) {
        actorMap[actor] += earningsPerActor;
      } else {
        actorMap[actor] = earningsPerActor;
      }
    }
  }

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  for (let actor in actorMap) {
    if (actorMap[actor] >= max) {
      max = actorMap[actor];
      highestEarner = `${actor} - ${currencyFormatter.format(actorMap[actor])}`;
    }
  }
  return highestEarner;
}

// Oscar Isaac - $415,515,037.50
console.log(actorEarning(movieListOne));

/**
 * @question Write a function that returns a list of the movies box office values.
 * What's the space and time complexity of your implementation?
 * */
function moviesBoxOffice(selectedMovies) {
  return selectedMovies?.map((movie) => {
    if (movie?.BoxOffice && movie?.BoxOffice !== "N/A") {
      return parseInt(movie?.BoxOffice.replace(/[^0-9\.-]+/g, ""));
    } else {
      return 0;
    }
  });
}

// [ 936662225, 309306177, 768946, 1 ]
console.log(moviesBoxOffice(movieListOne));
