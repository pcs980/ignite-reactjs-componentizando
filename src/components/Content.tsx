import { Header } from "./Header"
import { MovieCard } from "./MovieCard";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: {
    Source: string;
    Value: string;
  }[]
}

interface ContainerProps {
  movies: Movie[];
  selectedGenre: {
    title: string;
  },
}

export function Content({ movies, selectedGenre }: ContainerProps) {
  return (
    <div className="container">
      <Header title={selectedGenre.title} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}