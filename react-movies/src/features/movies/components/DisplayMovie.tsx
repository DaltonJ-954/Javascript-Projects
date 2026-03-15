import { NavLink } from 'react-router';
import styles from './DisplayMovie.module.css';
import type Movie from '../models/movie.model';

export default function DisplayMovie(props: DisplayMovieProps) {

const buildLink = () => `/movies/${props.movie.id}`;

    return (
        <div className={styles.div}>
            <NavLink to={buildLink()}>
                <img src={props.movie.poster} alt="Movie" />
            </NavLink>
            <p>
                <NavLink to={buildLink()}>{props.movie.title}</NavLink>
            </p>
            <div>
                <NavLink to={`/movies/edit/${props.movie.id}`} className='btn btn-primary'>Edit</NavLink>
            </div>
        </div>
    )
}

interface DisplayMovieProps {
    movie: Movie;
}