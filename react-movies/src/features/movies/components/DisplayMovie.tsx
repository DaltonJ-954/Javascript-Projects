import { NavLink } from "react-router";
import styles from "./DisplayMovie.module.css";
import type Movie from "../models/movie.model";
import Button from "../../../components/Button";
import customConfirm from "../../../utils/customConfirm";
import apiClient from "../../../api/apiClient";
import AlertContext from "../../../utils/AlertContext";
import { useContext } from "react";

export default function DisplayMovie(props: DisplayMovieProps) {

const buildLink = () => `/movies/${ props.movie.id }`
const alert = useContext(AlertContext);

async function deleteMovie() {
    await apiClient.delete(`/movies/${ props.movie.id }`);
    alert();
}

    return (
        <div className={ styles.div }> 
            <NavLink to={ buildLink() }>
                <img src={ props.movie.poster } alt="Movie" />
            </NavLink>
            <p>
                <NavLink to={ buildLink() }>{ props.movie.title }</NavLink>
            </p>
            <div>
                <NavLink to={ `/movies/edit/${ props.movie.id }` } className='btn btn-primary'>Edit</NavLink>
                <Button className="btn btn-danger ms-4" onClick={ () => customConfirm(() => deleteMovie()) }>Delete</Button>
            </div>
        </div>
    )
}

interface DisplayMovieProps {
    movie: Movie;
}