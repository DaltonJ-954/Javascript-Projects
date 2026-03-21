import { useEffect, useState } from "react";
import { useParams } from "react-router"
import apiClient from "../../../api/apiClient";
import type Movie from "../models/movie.model";
import Loading from "../../../components/Loading";

export default function MovieDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        apiClient.get<Movie>(`/movies/${ id }`).then(res => {
            setMovie(res.data);
        });
    }, [id]);

    if (!movie) {
        return <Loading />;
    }

    const date = new Date(movie.releaseDate);
    const year = date.getFullYear();
    const dateFormatted = date.toLocaleDateString();

    function getYoutubeEmbedUrl(url: string) : string | undefined {
        const objUrl = new URL(url);
        const videoId = objUrl.searchParams.get("v");
        return videoId ? `https://www.youtube.com/embed/${ videoId }` : undefined;
    }

    return (
        <>
            <div className="container my-4">
                <h2>{ movie.title } <small className="text-muted">({ year })</small></h2>

                { movie.genres && movie.genres.length > 0 && (
                    <div className="mb-2">
                        { movie.genres.map(g => <span key={ g.id } className="badge bg-primary me-2">
                            { g.name }
                        </span>) }
                    </div>
                )}

                <p className="text-muted">Release Date: { dateFormatted }</p>

                <div className="d-flex">
                    <span className="d-inline-block me-4">
                        <img src={ movie.poster } alt="Title" style={{ width: "225px", height: "330px", borderRadius: "5px" }} />
                    </span>
                    <div>
                        <iframe width="565" height="315" title="trailer" allowFullScreen
                        src={ getYoutubeEmbedUrl(movie.trailer ?? "") }>
                            
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}