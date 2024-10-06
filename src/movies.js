// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movie) => movie.director);
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  
const dramaSpielberg = moviesArray.filter(
    (movies) =>
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
  );
  return dramaSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0;
    }
    const scoredMovies = moviesArray.map(movie => {
        if (!movie.score) {
            movie.score = 0;
            return movie;
        } else {
            return movie;
        }
    });
    
    const scoreAverage = Math.ceil(scoredMovies.reduce((acc, curr) => acc + curr.score, 0) / scoredMovies.length * 100) / 100;
    return scoreAverage;
}

const number = [8, 9, 9];
const twoDecimals = Math.ceil(number.reduce((acc, curr) => acc + curr) / number.length * 100) /100;

console.log(twoDecimals);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {


const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"))

if(dramaMovies.length === 0){
    return 0;
}

const dramaAverageScore = dramaMovies.reduce((acum, curr)=> acum + curr.score, 0)/ dramaMovies.length


// return Number(Number.parseFloat(dramaAverageScore).toFixed(2))

return Number.parseFloat(dramaAverageScore).toFixed(2) * 1;
}

dramaMoviesScore([
    { genre: ['Drama'], score: 8 },
    { genre: ['Drama'], score: 9 },
    { genre: ['Drama'], score: 7 }
  ])
console.log(dramaMoviesScore([
    { genre: ['Drama'], score: 8 },
    { genre: ['Drama'], score: 9 },
    { genre: ['Drama'], score: 7 }
  ]));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
