import { useState, useEffect } from "react";
import MoviesList from "../../movies/components/MoviesList";
import apiClient from "../../../api/apiClient";
import type LandingPageDTO from "../models/LandingPageDTO";
import AlertContext from "../../../utils/AlertContext";

export default function LandingPage() {

    const [movies, setMovies] = useState<LandingPageDTO>({ InTheaters: [], UpcomingReleases: []});

    useEffect(() => {
      // eslint-disable-next-line react-hooks/immutability
      loadRecords();
    }, [])

    async function loadRecords() {
        await apiClient.get<LandingPageDTO>('/movies/landing').then(res => {
            setMovies(res.data);
        });
    }

    return (
        <>
            <AlertContext.Provider value={() => loadRecords() }>
                <h1>In Theaters</h1>
                <MoviesList movies={ movies.InTheaters } />
                <h1>Upcoming Releases</h1>
                <MoviesList movies={ movies.UpcomingReleases } />
            </AlertContext.Provider>
        </>
    )
}