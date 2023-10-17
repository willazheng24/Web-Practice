let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies....");
    let j = 0;
    for (let i = 0; i < allMovies.length; i++) {
        console.log(allMovies[i].title + ", rating of " + allMovies[i].rating + ", haveWatched: "
        + allMovies[i].haveWatched);
        j++;
    }
    console.log("");
    console.log("You have " + j + " movies in total");
}

//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    console.log("printing movie that has a rating higher than " + rating);
    let j = 0;
    for (let i = 0; i < allMovies.length; i++){
        if (allMovies[i].rating > rating) {
            console.log(allMovies[i].title + "has a rating of " + allMovies[i].rating);
            j++;
        }
    }
    console.log("");
    console.log("In total, there are " + j + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    for (let i = 0; i < allMovies.length; i++){
        if (allMovies[i].title == title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched;
            console.log("changing the status of the movie...");
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);