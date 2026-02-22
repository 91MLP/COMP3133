const typeDefs = `#graphql
  type Movie {
    id: ID!
    name: String!
    director_name: String!
    production_house: String!
    release_date: String!
    rating: Float!
  }

  type Query {
    # Get all movies
    getAllMovies: [Movie]

    # Get a single movie by ID
    getMovieById(id: ID!): Movie

    # Get movies filtered by director name
    getMoviesByDirector(director_name: String!): [Movie]
  }

  type Mutation {
    # Insert a new movie
    addMovie(
      name: String!
      director_name: String!
      production_house: String!
      release_date: String!
      rating: Float!
    ): Movie

    # Update an existing movie by ID
    updateMovie(
      id: ID!
      name: String
      director_name: String
      production_house: String
      release_date: String
      rating: Float
    ): Movie

    # Delete a movie by ID
    deleteMovie(id: ID!): Movie
  }
`;

export default typeDefs;
