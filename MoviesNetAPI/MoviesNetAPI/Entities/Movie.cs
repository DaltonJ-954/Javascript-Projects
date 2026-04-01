
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace MoviesNetAPI.Entities
{
    public class Movie
    {
        public int Id { get; set; }
        [Required]
        [StringLength(300)]
        public required string Title { get; set; }
        public string? Trailer { get; set; }
        public DateTime ReleaseDate { get; set; }
        [Unicode(false)]
        public string? Poster { get; set; }
        public List<MovieGenre> MoviesGenres { get; set; } = [];
        public List<MovieTheater> MoviesTheaters { get; set; } = [];
        public List<MovieActor> MoviesActors { get; set; } = [];
    }
}