using MoviesNetAPI.DTOs;
using MoviesNetAPI.Validations;
using System.ComponentModel.DataAnnotations;

namespace MoviesNetAPI.Entities
{
    public class Genre : IId
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "A genre was not specified. Please enter a valid name")] // Data annotation to enforce that Name is required
        [StringLength(maximumLength: 50)]
        [FirstLetterUppercase]
        public required string Name { get; set; }
    } 
}