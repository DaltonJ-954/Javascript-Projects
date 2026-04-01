import { useState, useEffect } from "react";
import MoviesList from "../../movies/components/MoviesList";
import apiClient from "../../../api/apiClient";
import type LandingPageDTO from "../models/LandingPageDTO";
import AlertContext from "../../../utils/AlertContext";

export default function LandingPage() {
  const [movies, setMovies] = useState<LandingPageDTO>({
    inTheaters: [],
    upcomingReleases: [],
  });

  useEffect(() => {
    loadRecords();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function loadRecords() {
    try {
      const res = await apiClient.get<LandingPageDTO>("/movies/landing");
      console.log("API response:", res.data); // 👈 add this
      setMovies(res.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  return (
    <>
      <AlertContext.Provider value={() => loadRecords()}>
        <h1>In Theaters</h1>
        <MoviesList movies={movies.inTheaters ?? []} />
        <h1 className="mt-5">Upcoming Releases</h1>
        <MoviesList movies={movies.upcomingReleases ?? []} />
      </AlertContext.Provider>
    </>
  );
}
