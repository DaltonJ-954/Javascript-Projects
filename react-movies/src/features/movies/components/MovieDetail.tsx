import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../../api/apiClient";
import type Movie from "../models/movie.model";
import Loading from "../../../components/Loading";
import type Coordinate from "../../../components/Map/coordinate.model";
import Map from "../../../components/Map/Maps";
import Rating from "../../../components/Ratings/Rating";
import type RatingCreation from "../../../components/Ratings/RatingCreation.model";
import Swal from "sweetalert2";
import { UserIsLoggedIn } from "../../security/utils/HandleJWT";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    apiClient.get(`/movies/${id}`).then((res) => {
      setMovie(res.data);
    });
  }, [id]);

  if (!movie) {
    return <Loading />;
  }

  const date = new Date(movie.releaseDate!);
  const year = date.getFullYear();
  const dateFormatted = date.toLocaleDateString();

  function getYoutubeEmbedUrl(url?: string): string | undefined {
    if (!url) return;
    const objUrl = new URL(url);
    let videoId = objUrl.searchParams.get("v");

    if (!videoId && objUrl.hostname.includes("youtube")) {
      videoId = objUrl.pathname.slice(1);
    }
    return videoId ? `https://www.youtube.com/embed/${videoId}` : undefined;
  }

  function transformCoordinates(): Coordinate[] | undefined {
    return movie!.theaters!.map((t) => {
      const movieCoordinates: Coordinate = {
        lat: t.latitude,
        lng: t.longitude,
        message: t.name,
      };
      return movieCoordinates;
    });
  }

  async function handleVote(vote: number) {
    const isUserLoggedIn = UserIsLoggedIn();

    if (!isUserLoggedIn) {
      Swal.fire({ icon: "error", title: "Login to vote now! 🗳️" });
      return;
    }

    try {
      const data: RatingCreation = { movieId: Number(id), rate: vote };
      await apiClient.post("/ratings", data);
      Swal.fire({ icon: "success", title: "Vote received" });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="container my-4">
        <h2>
          {movie.title} <small className="text-muted">({year})</small>
        </h2>

        {movie.genres && movie.genres.length > 0 && (
          <div className="mb-2">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="badge bg-primary me-2">
                {genre.name}
              </span>
            ))}
          </div>
        )}

        <p className="text-muted">
          Release Date: {dateFormatted} | Average Rate: {movie.averageRate} |
          User Rating:
          <Rating
            onVote={handleVote}
            maxRating={5}
            selectedVote={movie.userVote}
          />
        </p>

        <div className="d-flex">
          <span className="d-inline-block me-4">
            <img
              src={movie.poster}
              alt={movie.title}
              style={{
                maxWidth: "225px",
                maxHeight: "315px",
                borderRadius: "5px",
              }}
            />
          </span>
          <div>
            <iframe
              width="565"
              height="315"
              title="trailer"
              allowFullScreen
              src={getYoutubeEmbedUrl(movie.trailer)}
              style={{ borderRadius: "5px" }}
            ></iframe>
          </div>
        </div>

        {movie.actors && movie.actors.length > 0 && (
          <div>
            <h4>Actors</h4>
            <div className="row">
              {movie.actors.map((actor) => (
                <div key={actor.id} className="col-md-4 d-flex mb-3">
                  <img
                    src={actor.picture}
                    alt={actor.name}
                    className="rounded me-3"
                    style={{ width: "80px", height: "100px" }}
                  />
                  <div>
                    <strong>{actor.name}</strong>
                    <br />
                    <span className="text-muted">{actor.character}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {movie.theaters && movie.theaters.length > 0 && (
          <div style={{ width: "100%" }}>
            <h2>Showing in the following Theaters:</h2>
            <Map coordinates={transformCoordinates()} allowClicks={false} />
          </div>
        )}
      </div>
    </>
  );
}
