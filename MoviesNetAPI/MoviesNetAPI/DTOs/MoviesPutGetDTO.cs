namespace MoviesNetAPI.DTOs
{
    public class MoviesPutGetDTO
    {
        public MovieDTO Movie { get; set; } = null!;
        public List<GenreDTO> SelectedGenres { get; set; } = [];
        public List<GenreDTO> NonSelectedGenres { get; set; } = [];
        public List<TheaterDTO> SelectedTheaters { get; set; } = [];
        public List<TheaterDTO> NonSelectedTheaters { get; set; } = [];
        public List<MovieActorDTO> Actors { get; set; } = [];
    }
}
