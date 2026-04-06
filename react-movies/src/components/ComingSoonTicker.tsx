import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ComingSoonTicker.module.css";

export default function ComingSoonTicker() {
  const apiKey = import.meta.env.VITE_TMDB_KEY;
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const year = new Date().getFullYear();
        const startDate = `${year}-01-01`;
        const endDate = `${year}-12-31`;
        const today = new Date();
        const randomPage = Math.floor(Math.random() * 20) + 1;

        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?` +
            `api_key=${apiKey}` +
            `&primary_release_date.gte=${startDate}` +
            `&primary_release_date.lte=${endDate}` +
            `&sort_by=popularity.desc` +
            `&page=${randomPage}`,
        );

        const data = (await res.json()) as { results: Movie[] };
        const futureMovies = data.results.filter(
          (m) => m.release_date && new Date(m.release_date) >= today,
        );

        setMovies(futureMovies);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    }

    fetchMovies();
  }, [apiKey]);

  if (!movies.length) {
    return <p style={{ color: "white", padding: "10px" }}>Loading ticker...</p>;
  }

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.ticker}>
        <div className={styles.tickerContent}>
          {movies.concat(movies).map((movie, idx) => (
            <span
              key={idx}
              className={styles.item}
              onClick={() => navigate(`/movies/${movie.id}`)}
            >
              🎬 {movie.title} (
              {new Date(movie.release_date).toLocaleDateString()})
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface Movie {
  id: number;
  title: string;
  release_date: string;
}
