namespace MoviesNetAPI.DTOs
{
    public class LandingDTO
    {
        public List<MovieDTO> InTheaters { get; set; } = [];
        public List<MovieDTO> UpcomingReleases { get; set; } = [];
    }
}
