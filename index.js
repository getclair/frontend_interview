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
  
}


console.log(actorEarning(movieListOne));

/**
 * @question Write a function that returns a list of the movies box office values.
 * What's the space and time complexity of your implementation?
 * */
function moviesBoxOffice(selectedMovies) {

}

console.log(moviesBoxOffice(movieListOne));
