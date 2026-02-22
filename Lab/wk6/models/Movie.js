// In-memory movie store with sample records
let movies = [
  {
    id: "1",
    name: "Inception",
    director_name: "Christopher Nolan",
    production_house: "Warner Bros",
    release_date: "2010-07-16",
    rating: 8.8,
  },
  {
    id: "2",
    name: "The Dark Knight",
    director_name: "Christopher Nolan",
    production_house: "Warner Bros",
    release_date: "2008-07-18",
    rating: 9.0,
  },
  {
    id: "3",
    name: "Interstellar",
    director_name: "Christopher Nolan",
    production_house: "Paramount Pictures",
    release_date: "2014-11-07",
    rating: 8.6,
  },
  {
    id: "4",
    name: "Avatar",
    director_name: "James Cameron",
    production_house: "20th Century Fox",
    release_date: "2009-12-18",
    rating: 7.8,
  },
  {
    id: "5",
    name: "Titanic",
    director_name: "James Cameron",
    production_house: "Paramount Pictures",
    release_date: "1997-12-19",
    rating: 7.9,
  },
];

// Static methods for querying movies
const Movie = {
  // Get all movies
  getAll() {
    return movies;
  },

  // Get movie by ID
  getById(id) {
    return movies.find((m) => m.id === id) || null;
  },

  // Get movies by director name (static method)
  getByDirector(director_name) {
    return movies.filter(
      (m) => m.director_name.toLowerCase() === director_name.toLowerCase()
    );
  },

  // Add a new movie
  add({ name, director_name, production_house, release_date, rating }) {
    const newMovie = {
      id: String(movies.length + 1),
      name,
      director_name,
      production_house,
      release_date,
      rating,
    };
    movies.push(newMovie);
    return newMovie;
  },

  // Update an existing movie by ID
  update(id, fields) {
    const index = movies.findIndex((m) => m.id === id);
    if (index === -1) return null;
    movies[index] = { ...movies[index], ...fields };
    return movies[index];
  },

  // Delete a movie by ID
  deleteById(id) {
    const index = movies.findIndex((m) => m.id === id);
    if (index === -1) return null;
    const deleted = movies[index];
    movies.splice(index, 1);
    return deleted;
  },
};

export default Movie;
