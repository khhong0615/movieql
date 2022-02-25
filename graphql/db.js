let Movies = [
    {    
        id:0,
        name: "더 배트맨",
        score: 8,
    },
    {    
        id:1,
        name: "화양연화",
        score: 8,
    },
    {   id:2, 
        name: "언차티드",
        score: 5,
    },
    {   id:3, 
        name: "해적",
        score: 5,
    }
];

export const getMovie = () => Movies;

export const getById = id => {
    const filteredMovies = Movies.filter(Movies => id === Movies.id);
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = Movies.filter(Movies => Movies.id !== id);
    if(Movies.length > cleanedMovies.length) {
        Movies = cleanedMovies
        return true;
    }
    else {
        return false;
    }
}

export const addMovie = (name,score) => {
    const newMovie ={
        id: `${Movies.length}`,
        name,
        score
    };
    Movies.push(newMovie);
    return newMovie;

}