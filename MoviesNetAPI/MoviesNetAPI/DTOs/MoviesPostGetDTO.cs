namespace MoviesNetAPI.DTOs
{
    public class MoviesPostGetDTO
    {
        public List<GenreDTO> Genres { get; set; } = [];
        public List<TheaterDTO> Theaters { get; set; } = [];
        public List<ActorDTO> Actors { get; set; } = [];
    }
}
