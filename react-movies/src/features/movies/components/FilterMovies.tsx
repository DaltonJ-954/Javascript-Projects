import { useForm, type SubmitHandler } from "react-hook-form"
import type FilterMoviesDTO from "../models/FilterMoviesDTO.model"
import type Genre from "../../genres/models/Genre.model";
import Button from "../../../components/Button";

export default function FilterMovies() {

    const { register, handleSubmit, reset, formState: { isSubmitting }} = useForm<FilterMoviesDTO>() 

    const onSubmit: SubmitHandler<FilterMoviesDTO> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(data)
        reset();
    }

    const genres: Genre[] = [
        { id: 1, name: 'Sci-Fi' },
        { id: 2, name: 'Action' },
        { id: 3, name: 'Drama' },
        { id: 4, name: 'Comedy' },
        { id: 5, name: 'Thriller' },
        { id: 6, name: 'Horror' },
        { id: 7, name: 'Romance' },
        { id: 8, name: 'Adventure' },
        { id: 9, name: 'Fantasy' },
        { id: 10, name: 'Mystery' },
        { id: 11, name: 'Crime' },
        { id: 12, name: 'Animation' },
        { id: 13, name: 'Family' },
        { id: 14, name: 'Biography' },
        { id: 15, name: 'History' },
        { id: 16, name: 'War' },
        { id: 17, name: 'Music' },
        { id: 18, name: 'Sport' },
        { id: 19, name: 'Western' },
        { id: 20, name: 'Documentary' }
        ];

    return (
        <>
            <h3>Filter Movies</h3>  
            <form className="row row-cols-lg-auto g-3 align-items-center" 
            onSubmit={ handleSubmit(onSubmit) }
            >
                <div className="col-12">
                    <input placeholder="Movie Title" autoComplete="off" className="form-control" 
                    { ...register('title') } />
                </div>
                <div className="col-12">
                    <select className="form-select" { ...register('genreId')}>
                        <option value='0'>--Select a Genre--</option>
                        { genres.map(genre => <option key={ genre.id } value={ genre.id }>{ genre.name }</option>) }
                    </select>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="upcomingReleases"
                        { ...register('upcomingReleases') } />
                        <label className="form-check-label" htmlFor="upcomingReleases">
                            Upcoming Releases
                        </label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inTheaters" aria-label="on" 
                        { ...register('inTheaters') } />
                        <label className="form-check-label" htmlFor="inTheaters">
                            In Theaters
                        </label>
                    </div>
                </div>

                <div className="col-12">
                    <Button type="submit" disabled={ isSubmitting }>
                        { isSubmitting ? 'Filtering' : 'Filter'}
                    </Button>
                
                    <Button type="button" onClick={() => reset ()}>
                            Reset
                    </Button>

                </div>

            </form>
        </>
    )
}