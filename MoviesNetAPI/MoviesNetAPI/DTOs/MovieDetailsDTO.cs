namespace MoviesNetAPI.DTOs
{
    public class MovieDetailsDTO : MovieDTO
    {
        public List<GenreDTO> Genres { get; set; } = [];
        public List<TheaterDTO> Theaters { get; set; } = [];
        public List<MovieActorDTO> Actors { get; set; } = [];
    }
}
