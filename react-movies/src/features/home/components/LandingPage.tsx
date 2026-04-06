import { useState, useEffect } from "react";
import MoviesList from "../../movies/components/MoviesList";
import apiClient from "../../../api/apiClient";
import type LandingPageDTO from "../models/LandingPageDTO";
import AlertContext from "../../../utils/AlertContext";
import ComingSoonTicker from "../../../components/ComingSoonTicker";
import ScrollLinkButton from "../../../components/ScrollLinkButton";

export default function LandingPage() {
  const [movies, setMovies] = useState<LandingPageDTO>({
    inTheaters: [],
    upcomingReleases: [],
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    loadRecords();
  }, []);

  async function loadRecords() {
    try {
      const res = await apiClient.get<LandingPageDTO>("/movies/landing");
      setMovies(res.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  return (
    <>
      <AlertContext.Provider value={() => loadRecords()}>
        <div className="d-flex align-items-center gap-3 mb-4">
          <h2 className="mb-0">In Theaters</h2>
          <span
            className="badge bg-secondary mt-3"
            style={{ fontSize: "0.8rem" }}
          >
            Welcome to React Movies! Explore the latest releases and upcoming
            movies.
          </span>
        </div>
        <MoviesList movies={movies.inTheaters ?? []} />

        <h2 className="mt-5">Upcoming Releases</h2>
        <MoviesList movies={movies.upcomingReleases ?? []} />
      </AlertContext.Provider>

      <ComingSoonTicker />
      <ScrollLinkButton to={"top"} label={"Back"} />
    </>
  );
}
