import Movie from "./models/Movie.js";

const resolvers = {
  Query: {
    // Get all movies
    getAllMovies: () => {
      return Movie.getAll();
    },

    // Get movie by ID
    getMovieById: (_, { id }) => {
      return Movie.getById(id);
    },

    // Get movies by director name using static method
    getMoviesByDirector: (_, { director_name }) => {
      return Movie.getByDirector(director_name);
    },
  },

  Mutation: {
    // Insert new movie
    addMovie: (_, args) => {
      return Movie.add(args);
    },

    // Update movie
    updateMovie: (_, { id, ...fields }) => {
      return Movie.update(id, fields);
    },

    // Delete movie by ID
    deleteMovie: (_, { id }) => {
      return Movie.deleteById(id);
    },
  },
};

export default resolvers;
