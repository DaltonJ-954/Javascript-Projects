import type { SubmitHandler } from "react-hook-form";
import type MovieCreation from "../models/MovieCreation.model";
import MovieForm from "./MovieForm";
import type Genre from "../../genres/models/Genre.model";
import type Theater from "../../theaters/models/Theater.model";
import { useEffect, useState } from "react";
import apiClient from "../../../api/apiClient";
import type MoviesPostGet from "../models/MoviesPostGet.model";
import Loading from "../../../components/Loading";
import convertMovieToFormData from "../utils/convertMovieToFormData";
import type Movie from "../models/movie.model";
import { useNavigate } from "react-router";
import extractErrors from "../../../utils/extractErrors";
import { AxiosError } from "axios";
import Swal from "sweetalert2";

export default function CreateMovie() {
  const [nonSelectedGenres, setNonSelectedGenres] = useState<Genre[]>([]);
  const [nonSelectedTheaters, setNonSelectedTheaters] = useState<Theater[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    apiClient.get<MoviesPostGet>("/movies/postget").then((res) => {
      setNonSelectedGenres(res.data.genres);
      setNonSelectedTheaters(res.data.theaters);
      setLoading(false);
    });
  }, []);

  const onSubmit: SubmitHandler<MovieCreation> = async (data) => {
    try {
      const formData = convertMovieToFormData(data);
      const response = await apiClient.postForm<Movie>("/movies", formData);
      const movie = response.data;
      navigate(`/movies/${movie.id}`);
    } catch (err) {
      const errors = extractErrors(err as AxiosError);
      setErrors(errors);
    }
    console.log(data.poster instanceof File);
    Swal.fire({
      title: "Success",
      icon: "success",
      text: "Your movie was successfully created!",
    });
  };

  return (
    <>
      <h3>Create Movie</h3>
      {loading ? (
        <Loading />
      ) : (
        <MovieForm
          onSubmit={onSubmit}
          nonSelectedGenres={nonSelectedGenres}
          selectedGenres={[]}
          nonSelectedTheaters={nonSelectedTheaters}
          selectedTheaters={[]}
          selectedActors={[]}
          errors={errors}
        />
      )}
    </>
  );
}
