namespace MoviesNetAPI.DTOs
{
    public class MoviesPostGetDTO
    {
        public List<GenreDTO> Genres { get; set; } = new List<GenreDTO>();
        public List<TheaterDTO> Theaters { get; set; } = new List<TheaterDTO>();
        public List<ActorDTO> Actors { get; set; } = new List<ActorDTO>();
    }
}
