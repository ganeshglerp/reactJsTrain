import {useState} from "react"

function OscarDetails(){
    console.log("Initializing array");
    const oscarMovies = [
        {nomiId:"1", title: "Oppenheimer", year: 2023, genre: "Thriller", director: "Christopher Nolan", image:"//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg"},
        {nomiId:"2", title: "Everything Everywhere All at Once", year: 2022, genre: "Comedy-drama", director: "Daniel Kwan and Daniel Scheinert",  image:"//upload.wikimedia.org/wikipedia/en/thumb/1/1e/Everything_Everywhere_All_at_Once.jpg/220px-Everything_Everywhere_All_at_Once.jpg"},
        {nomiId:"3", title: "CODA", year: 2021, genre: "Comedy-drama ", director: "Sian Heder",  image:"//upload.wikimedia.org/wikipedia/en/thumb/8/89/Coda_poster.jpeg/220px-Coda_poster.jpeg"},
        {nomiId:"4", title: "Nomadland", year: 2020, genre: "Drama", director: "Chloe Zhao", image: "//upload.wikimedia.org/wikipedia/en/thumb/a/a5/Nomadland_poster.jpeg/220px-Nomadland_poster.jpeg"},
        {nomiId:"5", title: "Parasite", year: 2019, genre: "Thriller", director: "Bong Joon Ho", image: "//upload.wikimedia.org/wikipedia/en/thumb/5/53/Parasite_%282019_film%29.png/220px-Parasite_%282019_film%29.png"},
        {nomiId:"6", title: "Green Book", year: 2018, genre: "Drama", director: "Peter Farrelly", image: "//upload.wikimedia.org/wikipedia/en/thumb/5/5b/Green_Book_%282018_poster%29.png/220px-Green_Book_%282018_poster%29.png"},
        {nomiId:"7", title: "The Shape of Water", year: 2017, genre: "Fantasy", director: "Guillermo del Toro", image: "//upload.wikimedia.org/wikipedia/en/3/37/The_Shape_of_Water_%28film%29.png"},
        {nomiId:"8", title: "Moonlight", year: 2016, genre: "Drama", director: "Barry Jenkins", image: "//upload.wikimedia.org/wikipedia/en/8/84/Moonlight_%282016_film%29.png"},
        {nomiId:"9", title: "Spotlight", year: 2015, genre: "Thriller", director: "Tom McCarthy", image: "//upload.wikimedia.org/wikipedia/en/f/f3/Spotlight_%28film%29_poster.jpg"},
        {nomiId:"10", title: "Birdman", year: 2014, genre: "Comedy-drama", director: "Alejandro Gonzalez Inarritu", image: "//upload.wikimedia.org/wikipedia/en/6/63/Birdman_poster.png"},
        {nomiId:"11", title: "12 Years a Slave", year: 2013, genre: "Drama", director: "Steve McQueen", image: "//upload.wikimedia.org/wikipedia/en/5/5c/12_Years_a_Slave_film_poster.jpg"},
        {nomiId:"12", title: "Argo", year: 2012, genre: "Drama-Thriller", director: "Ben Affleck", image: "//upload.wikimedia.org/wikipedia/en/e/e1/Argo2012Poster.jpg"},
        {nomiId:"13", title: "The Artist", year: 2011, genre: "Drama", director: "Michel Hazanavicius", image: "//upload.wikimedia.org/wikipedia/en/a/a4/The_Artist_Poster.jpg"},
        {nomiId:"14", title: "The King's Speech", year: 2010, genre: "Drama", director: "Tom Hooper", image: "//upload.wikimedia.org/wikipedia/en/thumb/4/4a/The_King%27s_Speech_poster.jpg/220px-The_King%27s_Speech_poster.jpg"},
        {nomiId:"15", title: "The Hurt Locker", year: 2008, genre: "Thriller", director: "Kathryn Bigelow", image: "//upload.wikimedia.org/wikipedia/en/thumb/6/6c/HLposterUSA2.jpg/220px-HLposterUSA2.jpg"}
       ];
    // let [movies,setMovies]=useState({},[])

    function printMovies(movie,index){
        console.log(`"Index: ${index}, Title: ${movie.title}, Movie:${JSON.stringify(movie)}`);
    }
    // foreach loop to pring index and title
    function moviesAdvLoop(movies){
        movies.forEach(printMovies);
    }

    console.log(`Used adv foreach loop for printing movie details`)
    moviesAdvLoop(oscarMovies);

    // for loop to pring index and title
    function moviesLoop(movies){
        for(let m=0; m<movies.length;m++){
            console.log(`"Index: ${m}, Title: ${movies[m].title}, Movie:${JSON.stringify(movies[m])}`);
        }
    }
    console.log(`Used for loop for printing movie details`)
    moviesLoop(oscarMovies);

}

export default OscarDetails;